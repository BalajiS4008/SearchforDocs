import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartTooltip, ChartSeries, ChartSeriesCollection, ChartMajorGridLines, ChartMarker, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts"
import { logAxisData } from './log-axis-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Product X Growth [1995-2005]" />
            <ChartPrimaryXAxis valueType={"DateTime"}>
                <ChartAxisLabel format="y" />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis valueType="Logarithmic" lineStyle={{ width: 0 }} minorTicksPerInterval={5} minimum={0} maximum={100000} interval={1}>
                <ChartMajorGridLines width={1.5} />
                <ChartAxisLabel format="${value}" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={logAxisData} xField="x" yField="y" type="Line" width={2} fill="#FF2DF1">
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${point.x}'  format='Growth : <b>${point.y}</b>' />
        </Chart>
    )
}