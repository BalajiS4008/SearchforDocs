import { Chart, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartTitle } from "@syncfusion/react-charts";
import { markerOverviewData } from './minimum-temperature-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Minimum of Daily Minimum Temperature (°C)" />            
            <ChartTooltip enable={true} shared={true} headerText='${point.x}'  format='${series.name} : <b>${point.y}°C</b>' />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={3}/>
            <ChartSeriesCollection>
                <ChartSeries dataSource={markerOverviewData} xField='year' yField='China' name="China" fill="#BA7DDA" width={3} type='Spline'>
                    <ChartMarker visible={true} />
                </ChartSeries>
                <ChartSeries dataSource={markerOverviewData} xField='year' yField='United States' name="United States" fill="#00C5BC" width={3} type='Spline'>
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}