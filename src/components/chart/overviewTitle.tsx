import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartDataLabel, ChartTitle, ChartAxisLabel } from "@syncfusion/react-charts";
import { saleData } from './sale-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Sales Analysis" />
            <ChartTooltip enable={true} headerText="${point.x}"  format="Sales : <b>${point.y}</b>" />
            <ChartPrimaryXAxis lineStyle={{ width: 0 }} valueType="Category" interval={1}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={25}>
                <ChartAxisLabel format='${value}K' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={saleData} xField="month" yField="sales" type="Column" fill="#C5A9ED" cornerRadius={{ topLeft: Browser.isDevice ? 8 : 10, topRight: Browser.isDevice ? 8 : 10 }}>
                    <ChartMarker visible={false}>
                        <ChartDataLabel visible={!Browser.isDevice} />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}