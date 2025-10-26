import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTitle, ChartAxisLabel, ChartTooltip } from "@syncfusion/react-charts";
import { appearanceData } from './appearance-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', }}>
            <Chart theme={chartTheme} width={Browser.isDevice ? "50%" : "100%"} margin={{ bottom: 20, top: 20, right: 20, left: 20 }} background={chartTheme.includes('Dark') ? "#242327" : "#f6f6f6"}>
                <ChartTitle text="Sales Analysis" />
                <ChartTooltip enable={true} headerText="${point.x}"  format="Sales : <b>${point.y}</b>" />
                <ChartPrimaryXAxis lineStyle={{ width: 0 }} valueType="Category" interval={1}>
                    <ChartAxisLabel rotationAngle={Browser.isDevice ? -90 : 0} />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={10}>
                    <ChartAxisLabel format='${value}K' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={appearanceData} xField="month" yField="sales" type="Column" cornerRadius={{ topLeft: 10, topRight: 10 }} />
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}