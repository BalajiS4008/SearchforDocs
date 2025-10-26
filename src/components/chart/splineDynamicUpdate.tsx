import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartMajorGridLines, ChartTitle, ChartMarker,ChartMajorTickLines } from '@syncfusion/react-charts'
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
    return (
        <Chart theme={chartTheme}>     
            <ChartTitle text='Auto-Updating Spline Chart'/>
            <ChartPrimaryXAxis minimum={1} maximum={7} interval={1}>  
                <ChartMajorTickLines width={1} />              
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis minimum={0} maximum={100} lineStyle={{ width: 0 }} interval={20}>                
                <ChartMajorGridLines width={1} />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={initialData} type='Spline' xField='x' yField='y' opacity={0.6} fill={"#BD33A4"} border={{width: 2}} animation={{ enable: true, duration: 1500 }}>
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}