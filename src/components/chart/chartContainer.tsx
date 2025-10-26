import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartAxisLabel, ChartTitle, ChartMarker, ChartArea } from "@syncfusion/react-charts";
import { appearanceData } from './appearance-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <div style={{ height: "350px", width: Browser.isDevice ? "300px" : "600px" }}>
            <Chart theme={chartTheme}>
                <ChartArea border={{ width: 2 }} />
                <ChartTitle text="Sales Analysis" />
                <ChartTooltip enable={true} headerText="${point.x}"  format="Sales : <b>${point.y}</b>" />
                <ChartPrimaryXAxis lineStyle={{ width: 0 }} valueType="Category">
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                    <ChartAxisLabel format='${value}K' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={appearanceData} xField="month" fill="#F4A261" yField="sales" width={2} type="Spline">
                        <ChartMarker visible={true} />
                    </ChartSeries>
                </ChartSeriesCollection>
            </Chart>
        </div>
    )
}