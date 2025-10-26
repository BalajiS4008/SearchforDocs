import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartAxisLabel, ChartTitle} from "@syncfusion/react-charts";
import { temperatureData } from './temperature-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="2024 US Temperature Trends with Minimum Records" />
            <ChartTooltip enable={true} headerText="${point.x}"  format='Temperature : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType="Category">
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={10}>
                <ChartAxisLabel format='{value}°F' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={temperatureData} xField="x" yField="min" width={2} type="Spline" fill={"#F4C430"}>
                    <ChartMarker visible={true} width={12} height={12} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}