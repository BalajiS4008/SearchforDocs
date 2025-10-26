import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartAxisLabel, ChartTitle, ChartAxisTitle} from "@syncfusion/react-charts";
import { temperatureData } from './temperature-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="2024 US Temperature Trends with Hottest, Coldest, and Average Records" />
            <ChartTooltip enable={true} shared={true} headerText='${point.x}'  format='${series.name} : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType="Category" interval={1}>
                <ChartAxisLabel intersectAction={"Rotate90"} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0} maximum={120}>
                <ChartAxisLabel format='{value}°F' />
                <ChartAxisTitle text="Temperature (°F)" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={temperatureData} xField='x' yField='min' name='Max Temp' width={2} type='Spline'>
                    <ChartMarker visible={true} shape='Pentagon' height={8} width={8} />
                </ChartSeries>
                <ChartSeries dataSource={temperatureData} xField='x' yField='avg' name='Avg Temp' width={2} type='Spline'>
                    <ChartMarker visible={true} shape='Star' height={12} width={12} />
                </ChartSeries>
                <ChartSeries dataSource={temperatureData} xField='x' yField='max' name='Min Temp' width={2} type='Spline'>
                    <ChartMarker visible={true} shape="InvertedTriangle" height={6} width={6} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}