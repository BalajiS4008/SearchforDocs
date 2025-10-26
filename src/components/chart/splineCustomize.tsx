import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts";
import { temperatureData } from './temperature-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="2024 US Temperature Trends with Minimum Records" />
            <ChartTooltip enable={true} headerText="${point.x}" format='Temperature : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType="Category">
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={20} maximum={90}>
                <ChartAxisLabel format='{value}°F' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={temperatureData} xField="x" yField="min" width={2} type="Spline" opacity={0.4} fill="#ED5707" border={{ width: 2, color: '#71AD01' }} dashArray="5,5">
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}