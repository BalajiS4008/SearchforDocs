import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTitle
} from "@syncfusion/react-charts"
import { useRef } from "react";
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    const generateDataSource = (startYear: number, count: number) => {
        const data = [];
        for (let i = 0; i < count; i++) {
            data.push({ x: startYear + i, y: Math.random() * 50 });
        }
        return data;
    };
    const largeData = useRef<Array<{ x: number; y: number }>>(generateDataSource(2016, 100000));
    return (
        <Chart theme={chartTheme}>            
            <ChartTitle text="Chart with 100K points"/>
            <ChartPrimaryXAxis valueType="Double" >
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0} maximum={50}>                
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={largeData.current} xField="x" yField="y" type="Scatter" opacity={0.2}>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}
