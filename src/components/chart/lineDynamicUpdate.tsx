import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartMajorGridLines, ChartTitle, ChartMarker } from '@syncfusion/react-charts'
import { generateInitialData } from './generate-data'
import { useState, useRef, useEffect } from 'react';
import { useChartTheme } from './theme';
interface ChartData { x: number; y: number; }
export default function App() {
    const { chartTheme } = useChartTheme();
    const [initialData, setInitialData] = useState<ChartData[]>(generateInitialData());
    const timerRef = useRef<number | null>(null);
    useEffect(() => {
        setInitialData(generateInitialData());
        timerRef.current = window.setInterval(() => {
            setInitialData(prevData => prevData.map(point => ({ x: point.x, y: 10 + Math.random() * (95 - 10) })));
        }, 2000);
        return () => {
            if (timerRef.current !== null) {
                window.clearInterval(timerRef.current);
            }
        };
    }, []);
    const seriesColor = chartTheme.indexOf('Dark') > -1 ? '#77E4D4' : '#0A97B0';
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Auto-Updating Line Chart' />
            <ChartPrimaryXAxis minimum={1} maximum={7} interval={1} />
            <ChartPrimaryYAxis minimum={0} maximum={100} lineStyle={{ width: 0 }} interval={20}>
                <ChartMajorGridLines width={1} />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={initialData} type='Line' xField='x' yField='y' fill={seriesColor} animation={{ enable: true, duration: 1500 }}>
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}