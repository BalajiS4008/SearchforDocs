import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartMarker, ChartDataLabel, ChartTitle, ChartAxisLabel, ChartTooltip } from "@syncfusion/react-charts";
import { dataLabelCustmizationData } from './data-source';
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="GDP Growth (annual %)" />
            <ChartPrimaryXAxis >
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={-5} maximum={8} interval={2}>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={dataLabelCustmizationData} xField="x" yField="y" type="Column" fill="#A0D683" cornerRadius={{ topRight: 5, topLeft: 5 }}>
                    <ChartMarker>
                        <ChartDataLabel visible={true} format="{value}%" enableRotation={Browser.isDevice} rotationAngle={Browser.isDevice ? -90 : 0} />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true}  format="${point.x} : <b>${point.y}%<b/>" showMarker={false} />
        </Chart>
    );
}