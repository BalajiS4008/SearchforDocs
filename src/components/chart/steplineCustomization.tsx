import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTitle, ChartTooltip, ChartAxisTitle } from "@syncfusion/react-charts"
import { stepLineData } from './album-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Worldwide Best-Selling Albums by Year" />            
            <ChartTooltip enable={true} headerText="${point.x}"  format='Sales : <b>${point.y}M</b>' />
            <ChartPrimaryXAxis valueType="Double" minimum={2006} maximum={2025} interval={3}/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={4} minimum={0} maximum={20}>                
                <ChartAxisTitle text="Sales in million" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={stepLineData} xField="x" yField="y" width={3} type="StepLine" step="Right" fill={ chartTheme.indexOf('Dark') > - 1 ? "#F44F80": "#D71D55"} dashArray="5,6" opacity={0.7}/>
            </ChartSeriesCollection>
        </Chart>
    );
}