import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts";
import { temperatureData } from './temperature-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="2024 US Temperature Trends with Average Records" />            
            <ChartTooltip enable={true} showMarker={false} headerText='Average'  format='${point.x} : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType="Category" interval={1}>                
                <ChartAxisLabel intersectAction={"Rotate90"} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0} maximum={120}>                
                <ChartAxisLabel format='{value}°F' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={temperatureData} xField='x' yField='avg' width={2} fill="#37A18B" type='Spline'>
                    <ChartMarker visible={true} width={35} height={35} filled={true} shape='Image' imageUrl={"/images/chart/cloudy.png"} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    )
}