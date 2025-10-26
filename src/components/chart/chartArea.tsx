import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartArea, ChartTooltip, ChartMarker, ChartTitle, ChartAxisLabel } from "@syncfusion/react-charts";
import { appearanceData } from './appearance-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Sales Analysis" />
            <ChartTooltip enable={true} headerText="${point.x}"  format="Sales : <b>${point.y}</b>" />
            <ChartArea margin={{ bottom: 20, top: 20, right: 20, left: 20 }} background={chartTheme.includes('Dark') ? "#242327" : "#f6f6f6"} />
            <ChartPrimaryXAxis lineStyle={{ width: 0 }} valueType="Category" interval={1}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -90 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={10}>
                <ChartAxisLabel format='${value}K' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={appearanceData} xField="month" yField="sales" width={2} fill={"#FF3A65"} type="Line">
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}