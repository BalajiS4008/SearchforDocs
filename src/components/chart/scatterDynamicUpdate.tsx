import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTitle, ChartMarker
} from "@syncfusion/react-charts"
import { useRef, useState, useEffect } from "react";
import { generateInitialScatterData } from './generate-scatter-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    const [data, setData] = useState(generateInitialScatterData());
    const timerRef = useRef<number | null>(null);
    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            setData(prev =>
                prev.map(point => ({
                    x: point.x,
                    y: Math.random() * 20
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
            <ChartTitle text='Auto-Updating Scatter Chart' />
            <ChartPrimaryXAxis valueType={'Double'} />
            <ChartPrimaryYAxis valueType={'Double'} interval={10} />
            <ChartSeriesCollection>
                <ChartSeries dataSource={data} xField="x" yField="y" fill={chartTheme.includes('Dark') ? "#635DE5" : "#5853C6"} type="Scatter" animation={{ enable: true, duration: 1000 }}>
                    <ChartMarker visible={true} width={10} height={10} shape="Circle" />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}
