import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartMarker, ChartDataLabel, ChartTitle, ChartAxisTitle, ChartAxisLabel, ChartTooltip } from "@syncfusion/react-charts";
import { labelCustomData } from './label-custom-data';
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Day-wise Units Sold" />
            <ChartTooltip enable={true} headerText="${point.x}" format="Sales: <b>${point.y} Units</b>" />
            <ChartPrimaryXAxis valueType="Category">
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={20}>
                <ChartAxisTitle text="Units Sold" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={labelCustomData} xField="country" yField="gold" type="Column" fill="#A0D683" columnWidth={0.4} cornerRadius={{ topRight: 5, topLeft: 5 }}>
                    <ChartMarker>
                        <ChartDataLabel visible={true} margin={{ left: 10, top: 10, right: 10, bottom: 10 }} intersectMode="None" />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}