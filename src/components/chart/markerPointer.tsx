import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts";
import { markerPointerData } from './data-source'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Total Water Withdrawal" />
            <ChartTooltip enable={true} shared={true} headerText='${point.x}' format='World : <b>${point.y}k cubic meters per day</b>' />
            <ChartPrimaryXAxis valueType="Category" interval={5}>
                <ChartAxisLabel intersectAction={"Rotate90"} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={3.5} maximum={4.1} interval={0.1}>
                <ChartAxisLabel format='n1' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={markerPointerData} xField='x' yField='y' width={2} type='Line' fill="#37A18B">
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}