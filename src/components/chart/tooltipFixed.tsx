import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartAxisLabel, ChartTitle
} from "@syncfusion/react-charts";
import { tooltipData } from './tooltip-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Sales - Yearly Performance" />            
            <ChartTooltip enable={true} location={{ x: 75, y: 40 }} />
            <ChartPrimaryXAxis valueType="Category" >                
                <ChartAxisLabel fontSize="11px" />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0} maximum={100} >                
                <ChartAxisLabel format='{value}%' fontSize="11px" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries type="Column" dataSource={tooltipData} name="Online" xField="Period" columnWidth={0.45} fill="#799EFF" yField="Percentage1" columnSpacing={0.1} cornerRadius={{ topLeft: 4, topRight: 4 }} legendShape="Rectangle" />
                <ChartSeries type="Column" dataSource={tooltipData} name="Retail" xField="Period" columnWidth={0.45} fill="#FF79C3" yField="Percentage2" columnSpacing={0.1} cornerRadius={{ topLeft: 4, topRight: 4 }} legendShape="Rectangle" />
            </ChartSeriesCollection>
        </Chart>
    );
}