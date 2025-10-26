import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartDataLabel, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts";
import { splineMinimumData, splineData } from './average-temperature-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="2024 Temperature Trends with Average Records" />            
            <ChartTooltip enable={true} shared={true} headerText="Temperature"  format="${series.name} : <b>${point.y}</b>" />
            <ChartPrimaryXAxis valueType="Category"/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={-10} interval={10}>                
                <ChartAxisLabel format='{value}°F' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={splineMinimumData} xField="x" yField="y" width={2} type="Spline" name="Reggane" fill={"#FF7F50"}>
                    <ChartMarker visible={true}>
                        <ChartDataLabel visible={true} />
                    </ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={splineData} xField="x" yField="y" width={2} type="Spline" name="Tallinn" fill={"#19DA00"}>
                    <ChartMarker visible={true} >
                        <ChartDataLabel visible={true}  />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}
