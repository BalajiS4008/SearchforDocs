import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartMarker, ChartDataLabel, ChartTitle, ChartAxisLabel, ChartTooltip } from "@syncfusion/react-charts";
import { dataLabelRotationData } from './label-rotation-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Total Renewable Surface Water" />
            <ChartPrimaryXAxis valueType="Category">
                <ChartAxisLabel rotationAngle={-45} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={dataLabelRotationData} xField="x" yField="y" type="Column" fill="#A0D683" cornerRadius={{ topRight: 5, topLeft: 5 }}>
                    <ChartMarker>
                        <ChartDataLabel visible={true}  format="{value}k" enableRotation={true} position='Top' rotationAngle={270} intersectMode="None" />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} showHeaderLine={true} showMarker={false}  format="<b>${point.y}k</b> Billion cubic meter per year" />
        </Chart>
    );
}