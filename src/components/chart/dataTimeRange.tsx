import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartTooltip, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts"
import { synchronizedData } from "./date-time-data";
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="USD to EURO Performance" />
            <ChartPrimaryXAxis valueType={"DateTime"} intervalType="Months" minimum={new Date(2023, 1, 18)} maximum={new Date(2023, 7, 18)}>
                <ChartAxisLabel format="y MMM" rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0.86} maximum={0.96} interval={0.025} >
                <ChartAxisLabel format="€{value}" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={synchronizedData} xField="USD" yField="EUR" type="Line" fill="#006BFF" width={2}>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true}  format='${point.x}: <b>${point.y}</b>' />
        </Chart>
    );
}
