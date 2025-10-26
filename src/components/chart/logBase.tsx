import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartTooltip, ChartSeries, ChartSeriesCollection, ChartMajorGridLines, ChartMarker, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts"
import { logRangeData } from './log-range-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Product X Growth [1995-2005]" />
            <ChartPrimaryXAxis valueType={"DateTime"}>
                <ChartAxisLabel format="y" />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis valueType="Logarithmic" logBase={5} lineStyle={{ width: 0 }} minimum={100} maximum={100000}>
                <ChartMajorGridLines width={1.5} />
                <ChartAxisLabel format="${value}" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={logRangeData} xField="x" yField="y" type="Line" width={2} fill="#9929EA">
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${point.x}'  format='Growth : <b>${point.y}</b>' />
        </Chart>
    )
}