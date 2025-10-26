import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartMinorGridLines, ChartMarker, ChartAxisTitle, ChartTooltip, ChartTitle } from "@syncfusion/react-charts"
import { splineSaleData } from './data-source';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Worldwide Best-Selling Albums by Year" />            
            <ChartTooltip enable={true} headerText="${point.x}"  format='Sales : <b>${point.y}M</b>' />
            <ChartPrimaryXAxis valueType="Double" minimum={2007} maximum={2018} interval={2}/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={4} minimum={0} maximum={20}>                
                <ChartMinorGridLines width={0} />
                <ChartAxisTitle text="Sales in million" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={splineSaleData} xField="x" yField="y" width={3} type="StepLine" fill={"#0FAF9C"}>
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}