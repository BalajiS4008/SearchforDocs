import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartAxisLabel, ChartAxisTitle, ChartTitle } from "@syncfusion/react-charts";
import { temperatureData } from './temperature-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="2024 US Temperature Trends with Hottest Coldest and Average Records" />            
            <ChartTooltip enable={true} shared={true} headerText='${point.x}'  format='${series.name} : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType="Category" interval={1}>                
                <ChartAxisLabel intersectAction={"Rotate90"} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0} maximum={120}>                
                <ChartAxisLabel format='{value}°F' />
                <ChartAxisTitle text="Temperature (°F)" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={temperatureData} xField='x' yField='max' name='Max Temp' width={2} type='Spline' fill={chartTheme.includes('Dark') ? "#6094FF" :"#6094FF"}>
                    <ChartMarker visible={true} filled={false} shape="Circle" />
                </ChartSeries>
                <ChartSeries dataSource={temperatureData} xField='x' yField='avg' name='Avg Temp' width={2} type='Spline' fill={"#FF6060"}>
                    <ChartMarker visible={true} filled={false} shape="Circle" />
                </ChartSeries>
                <ChartSeries dataSource={temperatureData} xField='x' yField='min' name='Min Temp' width={2} type='Spline' fill="#68FF60">
                    <ChartMarker visible={true} filled={false} shape="Circle" />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}