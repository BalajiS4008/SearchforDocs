import { Chart, ChartArea, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTitle } from '@syncfusion/react-charts'
import { generateInitialData } from './generate-data';
import { useState, useRef, useEffect } from 'react';
import { useChartTheme } from './theme';
interface ChartData { x: number; y: number; size: number; }
export default function App() {
    const { chartTheme } = useChartTheme();
    const [bubbleData, setBubbleData] = useState<ChartData[]>(generateInitialData());
    const timerRef = useRef<number | null>(null);
    useEffect(() => {
        setBubbleData(generateInitialData());
        timerRef.current = window.setInterval(() => {
            setBubbleData(prevData =>
                prevData.map(point => ({
                    x: point.x, y: Math.min(95, Math.floor(Math.random() * (80) + 15)),
                    size: Math.max(0.1, Math.min(0.4, point.size + (Math.random() - 0.1) * 1))
                }))
            );
        }, 2000);
        return () => {
            if (timerRef.current !== null) {
                window.clearInterval(timerRef.current);
            }
        };
    }, []);
    return (
        <Chart theme={chartTheme}>
            <ChartArea border={{ width: 1, color: '#E7E3F0' }}/>
            <ChartTitle text='Auto-Updating Bubble Chart'/>
            <ChartPrimaryXAxis minimum={0} maximum={8} interval={1}/>
            <ChartPrimaryYAxis interval={15}/>
            <ChartSeriesCollection>
                <ChartSeries dataSource={bubbleData} type='Bubble' minRadius={1} maxRadius={3} border={{ width: 1, color: '#ffffff' }} xField='x' yField='y' sizeField='size' fill="#00A8E899" opacity={0.7} animation={{ enable: true, duration: 1500 }}/>
            </ChartSeriesCollection>
        </Chart>
    );
}