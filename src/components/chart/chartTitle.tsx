import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartTitle, ChartAxisLabel } from "@syncfusion/react-charts";
import { appearanceData } from './appearance-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Sales Analysis" />
            <ChartTooltip enable={true} headerText="${point.x}"  format="Sales : <b>${point.y}</b>" />
            <ChartPrimaryXAxis lineStyle={{ width: 0 }} valueType="Category" interval={1}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -90 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={10}>
                <ChartAxisLabel format='${value}K' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={appearanceData} xField="month" yField="sales" fill="#39FF14" width={2} type="Spline">
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}