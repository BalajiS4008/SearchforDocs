import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartTitle, ChartAxisLabel, ChartSubtitle } from "@syncfusion/react-charts";
import { appearanceData } from './appearance-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Sales Analysis" />
            <ChartSubtitle text="Monthly Sales Data for 2024" />
            <ChartTooltip enable={true} headerText="${point.x}"  format="Sales : <b>${point.y}</b>" />
            <ChartPrimaryXAxis lineStyle={{ width: 0 }} valueType="Category">
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={Browser.isDevice ? 20 : 10}>
                <ChartAxisLabel format='${value}K' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={appearanceData} xField="month" fill="#00C5BC" yField="sales" width={2} type="Bar" cornerRadius={{topRight: 5, bottomRight: 5}}>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}