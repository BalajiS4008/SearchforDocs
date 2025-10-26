import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartTitle } from "@syncfusion/react-charts";
import { tooltipHeaderData } from './tooltip-header-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Household Consumption Expenditure Per Capita" />
            <ChartPrimaryXAxis valueType="DateTime" interval={5}/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} maximum={15}/>
            <ChartSeriesCollection>
                <ChartSeries type="Spline" dataSource={tooltipHeaderData} xField="x" yField="United States" name="United States" fill="#99CC00"  />
                <ChartSeries type="Spline" dataSource={tooltipHeaderData} xField="x" yField="Italy" name="Italy" fill="#66CCFF"  />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} showHeaderLine={true}  format="${point.x} : <b>${point.y}%</b>"/>
        </Chart>
    );
}
