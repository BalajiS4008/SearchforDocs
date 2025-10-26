import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartArea, ChartMarker, ChartAxisLabel, ChartAxisTitle, ChartComponentProps, ChartDataLabel } from '@syncfusion/react-charts';
import { generateInstanceData, initialCPUData, networkInData, networkOutData, diskOperationsReadData, diskOperationsWriteData, diskUsageData } from './dashboard-data';
import { useChartTheme } from './theme';
import { useRef, useState, useEffect, memo } from 'react';
import { Button, Checkbox } from '@syncfusion/react-buttons';
import { Browser } from '@syncfusion/react-base';

const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function useTweenedNumber(target: number, duration = 600) {
    const [value, setValue] = useState(target);
    useEffect(() => {
        const start = performance.now();
        const from = value;                 // start from what’s on screen now
        const delta = target - from;
        let raf = 0;
        const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = easeInOutCubic(t);
            setValue(from + delta * eased);
            if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [target, duration]);
    return value;
}

type DonutProps = { percentage: number; color: string; label: string; size?: number; duration?: number; };
function DonutChartBase({ percentage, color, label, size = 120, duration = 1600,
}: DonutProps) {
    const { chartTheme } = useChartTheme();
    const isDark =
        (typeof chartTheme === 'string' && /dark/i.test(chartTheme))
    const textColor = isDark ? '#e5e7eb' : '#0f172a';
    const pageBg = isDark ? '#0b1220' : '#ffffff';
    const strokeWidth = 10;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const clamped = Math.max(0, Math.min(100, percentage));
    const tweened = useTweenedNumber(clamped, duration);
    const dashOffset = circumference * (1 - tweened / 100);
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
                    {/* Track */}
                    <circle cx={size / 2} cy={size / 2} r={radius} fill="transparent" stroke="#E8F0FE" strokeWidth={strokeWidth} />
                    <circle cx={size / 2} cy={size / 2} r={radius} fill="transparent" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" style={{ strokeDasharray: `${circumference}`, strokeDashoffset: dashOffset, willChange: 'stroke-dashoffset', }} />
                </svg>
                <div
                    style={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', background: pageBg, color: textColor, lineHeight: 1, marginBottom: '2px' }}>
                        {tweened.toFixed(0)}%
                    </div>
                    <div style={{ fontSize: '12px', color: textColor, fontWeight: 500 }}>{label}</div>
                </div>
            </div>
        </div>
    );
}
const DonutChart = memo(
    DonutChartBase,
    (prev, next) =>
        prev.percentage === next.percentage &&
        prev.color === next.color &&
        prev.label === next.label &&
        prev.size === next.size &&
        prev.duration === next.duration
);

export default function App() {
    const { chartTheme } = useChartTheme();
    const cpuChartRef = useRef<ChartComponentProps>(null);
    const networkChartRef = useRef<ChartComponentProps>(null);
    const diskOperationsChartRef = useRef<ChartComponentProps>(null);
    const [cpuData, setCpuData] = useState(initialCPUData);
    const [netWorkInData, setNetWorkInData] = useState(networkInData);
    const [netWorkOutData, setNetWorkOutData] = useState(networkOutData);
    const [readData, setReadData] = useState(diskOperationsReadData);
    const [writeData, setWriteData] = useState(diskOperationsWriteData);
    const [dataPolling, setDataPolling] = useState(true);
    const [cpuUtilization, setCPUUtilization] = useState(65);
    const [memoryUtilization, setMemoryUtilization] = useState(48);
    const [diskUtilization, setDiskUtilization] = useState(72);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const animationInProgressRef = useRef(false);
    const pendingPointRef = useRef<{ x: number, y: number } | null>(null);
    // Track trend directions for alternating pattern
    const cpuTrendRef = useRef({ consecutive: 0, direction: 0 }); // 1 for up, -1 for down
    const networkInTrendRef = useRef({ consecutive: 0, direction: 0 });
    const networkOutTrendRef = useRef({ consecutive: 0, direction: 0 });
    const readTrendRef = useRef({ consecutive: 0, direction: 0 });
    const writeTrendRef = useRef({ consecutive: 0, direction: 0 });
    const memoryTrendRef = useRef({ consecutive: 0, direction: 0 });
    const diskTrendRef = useRef({ consecutive: 0, direction: 0 });
    const [diskUsageBarData, setDiskUsageBarData] = useState(diskUsageData);
    // Improved random value generation with better distribution
    const getRandomValue = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    // --- Dark-mode detection + simple tokens (minimal, inline) ---
    const isDark =
        (typeof chartTheme === 'string' && /dark/i.test(chartTheme))

    const textColor = isDark ? '#e5e7eb' : '#1c1b1f';
    const pageBg = isDark ? '#0b1220' : '#EAEFFE';
    const borderColor = isDark ? 'white' : '#e2e8f0';
    const boxColor = isDark ? '#1c1b1f' : '#FFFBFE';


    // Enhanced random generation with alternating pattern and better range utilization
    const generateSmartValue = (
        currentValue: number,
        trendRef: React.MutableRefObject<{ consecutive: number; direction: number }>,
        min: number = 10,
        max: number = 95
    ): number => {
        let targetDirection = 0;
        let variation = 0;
        // Check if we need to force direction change (after 2 consecutive moves in same direction)
        if (trendRef.current.consecutive >= 2) {
            // Force opposite direction
            targetDirection = -trendRef.current.direction;
            variation = getRandomValue(20, 50) * targetDirection;
            trendRef.current.consecutive = 1; // Reset counter
            trendRef.current.direction = targetDirection;
        } else {
            // Allow natural variation but encourage higher values
            const changeTypes = ['medium', 'large', 'spike_up', 'spike_down'];
            const changeType = changeTypes[Math.floor(Math.random() * changeTypes.length)];
            switch (changeType) {
                case 'medium':
                    variation = getRandomValue(-35, 45); // Slightly favor upward movement
                    break;
                case 'large':
                    variation = getRandomValue(-50, 60); // Favor upward movement
                    break;
                case 'spike_up':
                    variation = getRandomValue(30, 70); // Strong upward spike
                    break;
                case 'spike_down':
                    variation = getRandomValue(-60, -20); // Downward spike
                    break;
            }

            // Determine actual direction
            targetDirection = variation > 0 ? 1 : -1;
            // Update trend tracking
            if (targetDirection === trendRef.current.direction) {
                trendRef.current.consecutive++;
            } else {
                trendRef.current.consecutive = 1;
                trendRef.current.direction = targetDirection;
            }
        }
        // Calculate new value
        let newValue = currentValue + variation;
        // Ensure within bounds
        newValue = Math.max(min, Math.min(max, newValue));
        // If value is too low (below 30), boost it up
        if (newValue < 30 && Math.random() > 0.3) {
            newValue = getRandomValue(40, 80);
            trendRef.current.direction = 1;
            trendRef.current.consecutive = 1;
        }
        // If value is too close to current value, force a bigger change
        if (Math.abs(newValue - currentValue) < 8) {
            const forceDirection = Math.random() > 0.6 ? 1 : -1; // Favor upward
            newValue = currentValue + (forceDirection * getRandomValue(15, 35));
            newValue = Math.max(min, Math.min(max, newValue));

            trendRef.current.direction = forceDirection;
            trendRef.current.consecutive = 1;
        }
        return Math.round(newValue);
    };
    // Generate completely random values for disk usage with better range
    const generateRandomValue = (min: number = 20, max: number = 90): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    useEffect(() => {
        if (!dataPolling) return;
        const barId = setInterval(() => {
            setDiskUsageBarData(prevBarData =>
                prevBarData.map(item => ({
                    x: item.x,
                    y: generateRandomValue(15, 85),
                    color: item.color
                }))
            );
        }, 3500);
        return () => {
            clearInterval(barId);
        };
    }, [dataPolling]);

    const addPoint = () => {
        if (animationInProgressRef.current) { return; }
        animationInProgressRef.current = true;
        const updateData = () => {
            setCpuData(prevData => {
                if (prevData.length === 0) {
                    animationInProgressRef.current = false;
                    return prevData;
                }
                const newData = [...prevData];
                const lastPoint = newData[newData.length - 1];
                // Use smart value generation with alternating pattern
                const newY = generateSmartValue(lastPoint.y, cpuTrendRef, 10, 80);
                pendingPointRef.current = { x: lastPoint.x.getFullYear() + 1, y: prevData[0].y };
                newData.push({ x: new Date(lastPoint.x.getTime() + 1000), y: newY });
                setCPUUtilization(newY);
                // Update other utilization values with smart generation
                setMemoryUtilization(prev => generateSmartValue(prev, memoryTrendRef, 15, 90));
                setDiskUtilization(prev => generateSmartValue(prev, diskTrendRef, 20, 85));
                return newData;
            });
            setNetWorkInData(prevData => {
                if (prevData.length === 0) return prevData;
                const lastPoint = prevData[prevData.length - 1];
                const newValue = generateSmartValue(lastPoint.networkIn, networkInTrendRef, 10, 55);
                return [...prevData, {
                    x: new Date(lastPoint.x.getTime() + 1000),
                    networkIn: newValue
                }];
            });
            setNetWorkOutData(prevData => {
                if (prevData.length === 0) return prevData;
                const lastPoint = prevData[prevData.length - 1];
                const newValue = generateSmartValue(lastPoint.networkOut, networkOutTrendRef, 10, 85);
                return [...prevData, {
                    x: new Date(lastPoint.x.getTime() + 1000),
                    networkOut: newValue
                }];
            });
            setReadData(prevData => {
                if (prevData.length === 0) return prevData;
                const lastPoint = prevData[prevData.length - 1];
                const newValue = generateSmartValue(lastPoint.read, readTrendRef, 5, 90);
                return [...prevData, {
                    x: new Date(lastPoint.x.getTime() + 1000),
                    read: newValue
                }];
            });
            setWriteData(prevData => {
                if (prevData.length === 0) return prevData;
                const lastPoint = prevData[prevData.length - 1];
                const newValue = generateSmartValue(lastPoint.write, writeTrendRef, 5, 60);
                return [...prevData, {
                    x: new Date(lastPoint.x.getTime() + 1000),
                    write: newValue
                }];
            });
        }
        updateData();
        setTimeout(() => {
            removeFirstPoint();
        }, 700);
    };
    const removeFirstPoint = () => {
        setCpuData(prevData => {
            if (prevData.length <= 1) {
                animationInProgressRef.current = false;
                pendingPointRef.current = null;
                return prevData;
            }
            const newData = [...prevData];
            newData.shift();
            return newData;
        });

        setNetWorkInData(prevNetworkData => {
            if (prevNetworkData.length <= 1) {
                return prevNetworkData;
            }
            const newNetworkData = [...prevNetworkData];
            newNetworkData.shift();
            return newNetworkData;
        });

        setNetWorkOutData(prevNetworkData => {
            if (prevNetworkData.length <= 1) {
                return prevNetworkData;
            }
            const newNetworkData = [...prevNetworkData];
            newNetworkData.shift();
            return newNetworkData;
        });

        setReadData(prevColumnData => {
            if (prevColumnData.length <= 1) {
                return prevColumnData;
            }
            const newColumnData = [...prevColumnData];
            newColumnData.shift();
            return newColumnData;
        });

        setWriteData(prevColumnData => {
            if (prevColumnData.length <= 1) {
                return prevColumnData;
            }
            const newColumnData = [...prevColumnData];
            newColumnData.shift();
            return newColumnData;
        });

        setTimeout(() => {
            animationInProgressRef.current = false;
            pendingPointRef.current = null;
        }, 300);
    };

    const slideWindow = () => {
        addPoint();
    };

    const handleManualUpdate = () => {
        if (!animationInProgressRef.current) {
            slideWindow();
        }
    };

    useEffect(() => {
        if (dataPolling) {
            if (intervalRef.current) { clearInterval(intervalRef.current); }
            const tryUpdate = () => {
                if (!animationInProgressRef.current) {
                    slideWindow();
                }
            };

            intervalRef.current = setInterval(tryUpdate, 2000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [dataPolling]);

    return (
        <div style={{ backgroundColor: pageBg, padding: Browser.isDevice ? 10 : 20, minHeight: '100vh' }}>
            <div style={{ display: 'flex', flexDirection: Browser.isDevice ? 'column' : 'row', alignItems: Browser.isDevice ? 'stretch' : 'center', justifyContent: 'space-between', marginBottom: Browser.isDevice ? 10 : 16, gap: Browser.isDevice ? 8 : 12 }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#2485FA', borderRadius: '50%', marginRight: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <svg width="40" height="40" viewBox="0 0 32 32" fill="white">
                        <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M16,25c-5,0-9-4-9-9s4-9,9-9s9,4,9,9 S21,25,16,25z M16,12c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S18.2,12,16,12z" />
                    </svg>
                </div>
                <h1 style={{ fontSize: '20px', fontWeight: '300', margin: 0 }}>Cloud Performance Monitoring</h1>

                <div style={{ marginLeft: 'auto', display: 'flex', gap: Browser.isDevice ? '30px' : '15px', justifyContent: 'space-between' }}>
                    <Button
                        onClick={handleManualUpdate}
                        disabled={animationInProgressRef.current}
                        style={{
                            padding: '8px 12px',
                            backgroundColor: '#2485FA',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: animationInProgressRef.current ? 'not-allowed' : 'pointer',
                            opacity: animationInProgressRef.current ? 0.7 : 1
                        }}
                    >
                        Update Data
                    </Button>
                    <label style={{ fontSize: '15px', fontWeight: '500', display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                            defaultChecked={dataPolling}
                            type="checkbox"
                            checked={dataPolling}
                            onChange={() => setDataPolling(!dataPolling)}
                            style={{ marginRight: '5px' }}
                        />
                        Activate Data Polling
                    </label>
                </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: Browser.isDevice ? '10px' : '15px', marginBottom: '15px' }}>
                <div style={{ background: boxColor, borderColor: borderColor, height: '120px', width: Browser.isDevice ? '48%' : '23%', borderRadius: '8px', padding: '15px' }}>
                    <span style={{ fontSize: '13px', color: textColor, fontWeight: '500', margin: '0 0 10px 0' }}>Instance Type</span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ background: '#EAEFFE', height: '45px', width: '45px', borderRadius: '6px', padding: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8333 3.33333H4.16667C3.3901 3.33333 3.00182 3.33333 2.69553 3.4602C2.28715 3.62936 1.96269 3.95382 1.79353 4.36219C1.66667 4.66848 1.66667 5.05677 1.66667 5.83333C1.66667 6.6099 1.66667 6.99818 1.79353 7.30448C1.96269 7.71285 2.28715 8.03731 2.69553 8.20647C3.00182 8.33333 3.3901 8.33333 4.16667 8.33333H15.8333C16.6099 8.33333 16.9982 8.33333 17.3045 8.20647C17.7128 8.03731 18.0373 7.71285 18.2065 7.30448C18.3333 6.99818 18.3333 6.6099 18.3333 5.83333C18.3333 5.05677 18.3333 4.66848 18.2065 4.36219C18.0373 3.95382 17.7128 3.62936 17.3045 3.4602C16.9982 3.33333 16.6099 3.33333 15.8333 3.33333Z" stroke="#2485FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.8333 11.6667H4.16667C3.3901 11.6667 3.00182 11.6667 2.69553 11.7935C2.28715 11.9627 1.96269 12.2872 1.79353 12.6955C1.66667 13.0018 1.66667 13.3901 1.66667 14.1667C1.66667 14.9433 1.66667 15.3315 1.79353 15.6378C1.96269 16.0462 2.28715 16.3707 2.69553 16.5398C3.00182 16.6667 3.3901 16.6667 4.16667 16.6667H15.8333C16.6099 16.6667 16.9982 16.6667 17.3045 16.5398C17.7128 16.3707 18.0373 16.0462 18.2065 15.6378C18.3333 15.3315 18.3333 14.9433 18.3333 14.1667C18.3333 13.3901 18.3333 13.0018 18.2065 12.6955C18.0373 12.2872 17.7128 11.9627 17.3045 11.7935C16.9982 11.6667 16.6099 11.6667 15.8333 11.6667Z" stroke="#2485FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5 14.1667H5.00833" stroke="#2485FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.33333 14.1667H8.34167" stroke="#2485FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5 5.83333H5.00833" stroke="#2485FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.33333 5.83333H8.34167" stroke="#2485FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <span style={{ marginLeft: '10px', fontSize: '14px' }}>t2.micro</span>
                    </div>
                </div>

                <div style={{ background: boxColor, height: '120px', width: Browser.isDevice ? '48%' : '23%', borderRadius: '8px', padding: '15px' }}>
                    <span style={{ fontSize: '13px', color: textColor, fontWeight: '500', margin: '0 0 10px 0' }}>Zone</span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ background: '#FEF5F8', height: '45px', width: '45px', borderRadius: '6px', padding: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9167 9.16667C12.9167 10.7775 11.6108 12.0833 10 12.0833C8.38917 12.0833 7.08334 10.7775 7.08334 9.16667C7.08334 7.55583 8.38917 6.25 10 6.25C11.6108 6.25 12.9167 7.55583 12.9167 9.16667Z" stroke="#FF9500" stroke-width="1.5" />
                                <path d="M17.5 9.16667C17.5 15 10 18.3333 10 18.3333C10 18.3333 2.5 15 2.5 9.16667C2.5 5.02453 5.85787 1.66667 10 1.66667C14.1422 1.66667 17.5 5.02453 17.5 9.16667Z" stroke="#FF9500" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <span style={{ marginLeft: '10px', fontSize: '14px' }}>eu-west-2b</span>
                    </div>
                </div>

                <div style={{ background: boxColor, height: '120px', width: Browser.isDevice ? '48%' : '23%', borderRadius: '8px', padding: '15px' }}>
                    <span style={{ fontSize: '13px', color: textColor, fontWeight: '500', margin: '0 0 10px 0' }}>AMI</span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ background: '#EFEDFD', height: '45px', width: '45px', borderRadius: '6px', padding: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 18.3333C9.31817 18.3333 8.66683 18.0582 7.36411 17.5079C4.12137 16.1381 2.5 15.4532 2.5 14.3011C2.5 13.9785 2.5 8.38708 2.5 5.83333M10 18.3333C10.6818 18.3333 11.3332 18.0582 12.6359 17.5079C15.8787 16.1381 17.5 15.4532 17.5 14.3011V5.83333M10 18.3333V9.46233" stroke="#5B6FED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.93827 8.07615L4.50393 6.89821C3.16797 6.25175 2.5 5.92853 2.5 5.41667C2.5 4.90481 3.16797 4.58158 4.50393 3.93513L6.93827 2.75718C8.44067 2.03018 9.19192 1.66667 10 1.66667C10.8081 1.66667 11.5593 2.03017 13.0617 2.75718L15.4961 3.93513C16.832 4.58158 17.5 4.90481 17.5 5.41667C17.5 5.92853 16.832 6.25175 15.4961 6.89821L13.0617 8.07615C11.5593 8.80317 10.8081 9.16667 10 9.16667C9.19192 9.16667 8.44067 8.80317 6.93827 8.07615Z" stroke="#5B6FED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5 10L6.66667 10.8333" stroke="#5B6FED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.1667 3.33333L5.83333 7.5" stroke="#5B6FED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <span style={{ marginLeft: '10px', fontSize: '14px' }}>ami-0123456</span>
                    </div>
                </div>

                <div style={{ background: boxColor, height: '120px', width: Browser.isDevice ? '48%' : '23%', borderRadius: '8px', padding: '15px' }}>
                    <span style={{ fontSize: '13px', color: textColor, fontWeight: '500', margin: '0 0 10px 0' }}>OS</span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ background: '#FFEBF0', height: '45px', width: '45px', borderRadius: '6px', padding: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_23)">
                                    <path d="M18.0821 16.3141C17.5534 16.0972 17.1179 15.7555 17.1495 15.1013C17.1802 14.4479 16.6823 14.015 16.6823 14.015C16.6823 14.015 17.1179 12.5844 16.7131 11.4033C16.3091 10.2204 14.9725 8.32527 13.9468 6.89557C12.9228 5.46503 13.7922 3.81669 12.8604 1.70377C11.9269 -0.409154 9.50312 -0.285307 8.1973 0.616544C6.89061 1.51673 7.29458 3.75433 7.35607 4.81337C7.41843 5.86896 7.38426 6.62139 7.26382 6.8947C7.14084 7.16801 6.30044 8.17066 5.7402 9.00932C5.18079 9.84802 4.77682 11.5894 4.37115 12.3043C3.96718 13.0191 4.2473 13.6716 4.2473 13.6716C4.2473 13.6716 3.96718 13.7639 3.74938 14.2327C3.53158 14.6973 3.09689 14.9151 2.31971 15.0688C1.54254 15.2243 1.54254 15.7239 1.72871 16.2833C1.91575 16.8419 1.72958 17.1544 1.51178 17.8676C1.29398 18.5807 2.38207 18.8002 3.43853 18.9224C4.49587 19.0479 5.67701 19.732 6.67285 19.8558C7.66612 19.9805 7.97784 19.1726 7.97784 19.1726C7.97784 19.1726 9.09666 18.9224 10.277 18.8933C11.459 18.8617 12.5761 19.1418 12.5761 19.1418C12.5761 19.1418 12.7939 19.6389 13.1979 19.8558C13.6027 20.0736 14.473 20.1052 15.0324 19.5159C15.5926 18.924 17.0847 18.1793 17.9233 17.7122C18.7645 17.2442 18.6107 16.5302 18.0821 16.3141ZM10.8072 2.6057C11.3402 2.6057 11.7706 3.13435 11.7706 3.78601C11.7706 4.24889 11.5546 4.64775 11.2394 4.8416C11.1591 4.8066 11.0746 4.77073 10.9849 4.73228C11.1745 4.63833 11.3094 4.39665 11.3094 4.11479C11.3094 3.74756 11.0823 3.44947 10.8013 3.44947C10.5237 3.44947 10.2957 3.74839 10.2957 4.11479C10.2957 4.25059 10.3281 4.38125 10.3836 4.48799C10.2179 4.42223 10.0651 4.36074 9.9455 4.31549C9.8806 4.15664 9.84386 3.97728 9.84386 3.78597C9.84386 3.13435 10.2743 2.6057 10.8072 2.6057ZM10.7381 5.0944C11.0045 5.18665 11.3009 5.36003 11.2702 5.53167C11.2386 5.70417 11.0985 5.70417 10.7381 5.92455C10.3768 6.14318 9.5945 6.62827 9.34424 6.65987C9.09231 6.69146 8.95223 6.55055 8.68576 6.37888C8.4193 6.20637 7.91798 5.79726 8.04436 5.57949C8.04436 5.57949 8.43466 5.28057 8.60634 5.12429C8.77885 4.96715 9.21785 4.5922 9.48432 4.6409C9.75078 4.68616 10.4716 5.00045 10.7381 5.0944ZM8.3356 2.79274C8.7558 2.79274 9.09741 3.29319 9.09741 3.91069C9.09741 4.02428 9.08633 4.12932 9.06495 4.23095C8.96248 4.26595 8.85827 4.32234 8.75751 4.40774C8.70982 4.44671 8.66312 4.48685 8.61743 4.52814C8.68406 4.40346 8.71051 4.22581 8.68062 4.03877C8.62424 3.70144 8.39962 3.45545 8.17672 3.49048C7.95468 3.52893 7.82058 3.83209 7.87696 4.17117C7.93417 4.51024 8.15795 4.7562 8.37999 4.71945C8.39282 4.71688 8.40477 4.71348 8.41756 4.7092C8.30912 4.81341 8.20918 4.90309 8.10755 4.97907C7.80011 4.83645 7.57462 4.41197 7.57462 3.90978C7.57466 3.29236 7.9154 2.79274 8.3356 2.79274ZM7.51488 18.4996C7.41582 18.9454 6.89398 19.2691 6.89398 19.2691C6.42084 19.4177 5.1056 18.8472 4.50945 18.597C3.91417 18.3502 2.39823 18.2733 2.19923 18.0529C2.00194 17.8274 2.29829 17.3313 2.37431 16.8607C2.44776 16.3867 2.22572 16.0903 2.29917 15.7666C2.37431 15.4447 3.3428 15.4447 3.71434 15.2218C4.08754 14.9971 4.16186 14.3515 4.45992 14.1781C4.75797 14.003 5.30372 14.6239 5.52746 14.9732C5.75037 15.3191 6.59501 16.8103 6.94264 17.1827C7.2911 17.555 7.61394 18.0538 7.51488 18.4996ZM13.0124 14.1679C12.9227 14.606 12.9227 16.1894 12.9227 16.1894C12.9227 16.1894 11.9594 17.5243 10.4656 17.7429C8.97361 17.9616 8.22716 17.8044 8.22716 17.8044L7.38846 16.8419C7.38846 16.8419 8.04008 16.7471 7.94787 16.0946C7.85391 15.4421 5.95879 14.5402 5.61631 13.7315C5.27553 12.9244 5.55482 11.5554 5.99039 10.8712C6.42512 10.188 6.70354 8.69681 7.1391 8.19802C7.57466 7.70267 7.91544 6.64534 7.76 6.17818C7.76 6.17818 8.69261 7.29783 9.34428 7.1125C9.99677 6.92546 11.4598 5.83653 11.6758 6.02444C11.8928 6.21148 13.758 10.3135 13.9433 11.6193C14.1304 12.9243 13.8186 13.9185 13.8186 13.9185C13.8186 13.9185 13.1046 13.7323 13.0124 14.1679ZM17.7831 17.0964C17.4928 17.3629 15.8769 18.0154 15.3926 18.5244C14.9109 19.0291 14.2815 19.4399 13.8963 19.3203C13.5086 19.1982 13.1712 18.6679 13.3403 17.8941C13.5086 17.1229 13.6546 16.2774 13.6307 15.794C13.6068 15.3106 13.5086 14.6572 13.6307 14.5607C13.7511 14.4668 13.9433 14.5137 13.9433 14.5137C13.9433 14.5137 13.8485 15.4301 14.4028 15.6735C14.957 15.9127 15.7547 15.577 15.9964 15.3336C16.239 15.0937 16.4081 14.7315 16.4081 14.7315C16.4081 14.7315 16.6489 14.8537 16.625 15.2389C16.6011 15.6249 16.7932 16.1817 17.1571 16.3739C17.5184 16.5644 18.0735 16.8316 17.7831 17.0964Z" fill="#FF5D6A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_23">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <span style={{ marginLeft: '10px', fontSize: '14px' }}>Amazon Linux</span>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: Browser.isDevice ? 'stretch' : 'center', flexDirection: Browser.isDevice ? 'column' : 'row', marginBottom: '15px' }}>
                <div style={{ background: boxColor, width: Browser.isDevice ? '100%' : '50%', height: '345px', borderRadius: '8px', padding: '15px', marginRight: '15px', marginBottom: Browser.isDevice ? '10px' : '0', overflowX: Browser.isDevice ? 'auto' : 'visible' }}>
                    <span style={{ fontSize: '13px', color: textColor, fontWeight: '500', margin: '0 0 10px 0' }}>Instances</span>
                    <div style={{ minWidth: Browser.isDevice ? '600px' : '100%' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ height: '40px', fontSize: '14px', fontWeight: '400', color: textColor }}>
                                    <th style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0', fontSize: '14px', fontWeight: '500', color: textColor }}>ID</th>
                                    <th style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0', fontSize: '14px', fontWeight: '500', color: textColor }}>Type</th>
                                    <th style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0', fontSize: '14px', fontWeight: '500', color: textColor }}>PublicIP</th>
                                    <th style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0', fontSize: '14px', fontWeight: '500', color: textColor }}>State</th>
                                    <th style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0', fontSize: '14px', fontWeight: '500', color: textColor }}>Health</th>
                                </tr>
                            </thead>
                            <tbody>
                                {generateInstanceData().map((instance, index) => (
                                    <tr key={index} style={{ height: '40px', fontSize: '14px' }}>
                                        <td style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0' }}>{instance.instanceID}</td>
                                        <td style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0' }}>{instance.type}</td>
                                        <td style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0' }}>{instance.publicIP}</td>
                                        <td style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0' }}>{instance.state}</td>
                                        <td style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0' }}>
                                            <div style={{
                                                display: 'inline-flex',
                                                borderRadius: '4px',
                                                padding: '5px',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <svg width="25" height="25" viewBox="0 0 24 24" fill={instance.health === 'Good' ? '#34A853' : instance.health === 'Warning' ? '#FBBC05' : '#EA4335'}>
                                                    {instance.health === 'Good' ?
                                                        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M10,17l-5-5l1.41-1.41L10,14.17l7.59-7.59L19,8L10,17z" /> :
                                                        instance.health === 'Warning' ?
                                                            <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,13c-0.55,0-1-0.45-1-1V8c0-0.55,0.45-1,1-1 s1,0.45,1,1v4C13,12.55,12.55,13,12,13z M13,17h-2v-2h2V17z" /> :
                                                            <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59 L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59z" />
                                                    }
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: Browser.isDevice ? '10px' : '15px',
                        width: Browser.isDevice ? '100%' : '50%'
                    }}
                >
                    <div
                        style={{
                            background: boxColor,
                            width: '48%',
                            height: '165px',
                            borderRadius: '8px',
                            padding: '5px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <DonutChart percentage={cpuUtilization} color="#2485FA" label="CPU" size={130} />
                    </div>
                    <div
                        style={{
                            background: boxColor,
                            width: '48%',
                            height: '165px',
                            borderRadius: '8px',
                            padding: '5px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <DonutChart percentage={memoryUtilization} color="#FF9500" label="Memory" size={130} />
                    </div>
                    <div
                        style={{
                            background: boxColor,
                            width: '48%',
                            height: '165px',
                            borderRadius: '8px',
                            padding: '5px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="#34A853">
                            <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M10,17l-5-5l1.41-1.41L10,14.17l7.59-7.59L19,8L10,17z" />
                        </svg>
                        <div style={{ fontSize: '13px', color: textColor, fontWeight: '500', marginTop: '10px' }}>Health</div>
                    </div>
                    <div
                        style={{
                            background: boxColor,
                            width: '48%',
                            height: '165px',
                            borderRadius: '8px',
                            padding: '5px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <DonutChart percentage={diskUtilization} color="#8BC34A" label="Disk space" size={130} />
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: Browser.isDevice ? 'stretch' : 'center', flexDirection: Browser.isDevice ? 'column' : 'row', marginBottom: '8px', }}>
                <div style={{ background: boxColor, width: Browser.isDevice ? '100%' : '50%', height: '345px', borderRadius: '8px', padding: '16px', marginRight: '8px', marginBottom: Browser.isDevice ? '10px' : '0' }}>
                    <span style={{ fontSize: '13px', color: textColor, fontWeight: '500', margin: '0 0 10px 0' }}>Disk Usage</span>
                    <Chart height="280px" theme={chartTheme}>
                        <ChartArea border={{ width: 0 }} />
                        <ChartPrimaryXAxis valueType="Category" />
                        <ChartPrimaryYAxis maximum={100}>
                            <ChartAxisTitle text='Usage (GB)' />
                        </ChartPrimaryYAxis>
                        <ChartSeriesCollection>
                            <ChartSeries
                                dataSource={diskUsageBarData}
                                xField="x"
                                yField="y"
                                type="Bar"
                                cornerRadius={{ bottomRight: 4, topRight: 4, bottomLeft: 0, topLeft: 0 }}
                                animation={{ enable: true }}
                                colorField='color'
                            >
                                <ChartMarker>
                                    <ChartDataLabel visible={true} font={{ color: 'black' }} position='Top' />
                                </ChartMarker>
                            </ChartSeries>
                        </ChartSeriesCollection>
                    </Chart>
                </div>

                <div style={{ background: boxColor, width: Browser.isDevice ? '100%' : '50%', height: '345px', borderRadius: '8px', padding: '16px' }}>
                    <span style={{ fontSize: '13px', color: textColor, fontWeight: '500', margin: '0 0 10px 0' }}>CPU Utilization</span>
                    <Chart ref={cpuChartRef} height="280px" theme={chartTheme}>
                        <ChartPrimaryXAxis valueType="DateTime" interval={3}>
                            <ChartAxisLabel format='hh:mm:ss a' />
                            <ChartAxisTitle text='Time' />
                        </ChartPrimaryXAxis>
                        <ChartPrimaryYAxis valueType="Double" minimum={0} maximum={100} interval={25}>
                            <ChartAxisTitle text='Percents' />
                        </ChartPrimaryYAxis>
                        <ChartSeriesCollection>
                            <ChartSeries
                                dataSource={cpuData}
                                xField="x"
                                yField="y"
                                type="Spline"
                                opacity={0.8}
                                border={{ color: '#9fff9c', width: 2 }}
                                animation={{ enable: true, duration: 600 }}
                            >
                                <ChartMarker visible={true} width={2} height={2}></ChartMarker>
                            </ChartSeries>
                        </ChartSeriesCollection>
                    </Chart>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: Browser.isDevice ? 'stretch' : 'center', flexDirection: Browser.isDevice ? 'column' : 'row', }}>
                <div style={{ background: boxColor, width: Browser.isDevice ? '100%' : '50%', height: '345px', borderRadius: '8px', padding: '16px', marginRight: '8px', marginBottom: Browser.isDevice ? '10px' : '0' }}>
                    <span style={{ fontSize: '13px', color: textColor, fontWeight: '500', margin: '0 0 10px 0' }}>Network</span>
                    <Chart ref={networkChartRef} height="300px" theme={chartTheme}>
                        <ChartPrimaryXAxis valueType="DateTime" interval={3}>
                            <ChartAxisLabel format='hh:mm:ss a' />
                        </ChartPrimaryXAxis>
                        <ChartPrimaryYAxis valueType="Double" minimum={0} maximum={100} interval={25}>
                            <ChartAxisTitle text='Bytes' />
                        </ChartPrimaryYAxis>
                        <ChartLegend visible={true} />
                        <ChartSeriesCollection>
                            <ChartSeries dataSource={netWorkInData} xField="x" yField="networkIn" type="Spline" width={2} name="Network In" opacity={0.8} border={{ color: '#CDDE1F', width: 2 }} animation={{ enable: true, duration: 600 }}>
                                <ChartMarker visible={true} shape='Circle' width={3} height={3}></ChartMarker>
                            </ChartSeries>
                            <ChartSeries dataSource={netWorkOutData} xField="x" yField="networkOut" type="Spline" width={2} name="Network Out" opacity={0.8} border={{ color: '#FF477E', width: 2 }} animation={{ enable: true, duration: 600 }}>
                                <ChartMarker visible={true} shape='Circle' width={3} height={3}></ChartMarker>
                            </ChartSeries>
                        </ChartSeriesCollection>
                    </Chart>
                </div>

                <div style={{ background: boxColor, width: Browser.isDevice ? '100%' : '50%', height: '345px', borderRadius: '8px', padding: '16px' }}>
                    <span style={{ fontSize: '13px', color: textColor, fontWeight: '500', margin: '0 0 10px 0' }}>Disk Operations</span>
                    <Chart ref={diskOperationsChartRef} height="300px" theme={chartTheme}>
                        <ChartPrimaryXAxis valueType="DateTime" interval={3}>
                            <ChartAxisLabel format='hh:mm:ss a' />
                        </ChartPrimaryXAxis>
                        <ChartPrimaryYAxis minimum={0} maximum={100} interval={25}>
                            <ChartAxisTitle text='Operations' />
                        </ChartPrimaryYAxis>
                        <ChartLegend visible={true} />
                        <ChartSeriesCollection>
                            <ChartSeries dataSource={readData} xField="x" yField="read" type="Column" name="Read" fill="#2196F3" opacity={0.8} animation={{ enable: true, duration: 600 }} cornerRadius={{ bottomRight: 1.5, topRight: 1.5, bottomLeft: 1.5, topLeft: 1.5 }} />
                            <ChartSeries dataSource={writeData} xField="x" yField="write" type="Column" name="Write" fill="#8854D9" opacity={0.8} animation={{ enable: true, duration: 600 }} cornerRadius={{ bottomRight: 1.5, topRight: 1.5, bottomLeft: 1.5, topLeft: 1.5 }} />
                        </ChartSeriesCollection>
                    </Chart>
                </div>
            </div>
        </div>
    );
}