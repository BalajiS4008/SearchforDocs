import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartTooltip, ChartSeries, ChartSeriesCollection, ChartArea, ChartAxisLabel
} from "@syncfusion/react-charts"
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    const data1 = [
    { x: 'Egg',    y: 106 },
    { x: 'Fish',   y: 103 },
    { x: 'Misc',   y: 198 },
    { x: 'Tea',    y: 189 },
    { x: 'Fruits', y: 250 }
];
    return (
        <Chart theme={chartTheme}>
            <ChartArea border={{ width: 0 }}  />
            <ChartPrimaryXAxis valueType="Category">
                <ChartAxisLabel color="#ffffff" position="Inside" />
                
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} >
                
            </ChartPrimaryYAxis>
            <ChartTooltip enable={true} headerText="" />
            <ChartSeriesCollection>
                <ChartSeries dataSource={data1} type="Column" xField="x" yField="y" />
            </ChartSeriesCollection>
        </Chart>
    );
}
