import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartTooltip, ChartSeries, ChartSeriesCollection, ChartTitle, ChartAxisLabel } from "@syncfusion/react-charts"
import { synchronizedData } from './date-time-data';
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="USD to INR Performance" />
            <ChartPrimaryXAxis valueType={"DateTime"} intervalType="Months" >
                <ChartAxisLabel format="y MMM" />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={79} maximum={85} interval={1.5}>
                <ChartAxisLabel format="₹{value}" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={synchronizedData} xField="USD" yField="INR" type="Line" fill={chartTheme.includes('Dark') ? "#338BFF" : "#5433FF"} width={2}>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true}  format='${point.x}: <b>${point.y}</b>' />
        </Chart>
    )
}