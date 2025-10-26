import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartDataLabel, ChartAxisTitle, ChartTitle } from "@syncfusion/react-charts"
import { scatterLabelData } from './scatter-label-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTooltip enable={true} headerText="${point.tooltip}" format="Height: <b>${point.x} in</b><br/>Weight: <b>${point.y} kg</b>" />
            <ChartTitle text="Weight by Height" />
            <ChartPrimaryXAxis valueType="Double" minimum={50} maximum={75} interval={5} >
                <ChartAxisTitle text="Height (inches)" />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={50} maximum={160} interval={20}>
                <ChartAxisTitle text="Weight (kg)" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={scatterLabelData} xField="height" yField="weight" fill={chartTheme.includes('Dark') ? "#807BFF" : "#5853C6"} type="Scatter" tooltipField="name">
                    <ChartMarker visible={true} shape="Star" height={15} width={15}>
                        <ChartDataLabel visible={true} labelField="name" />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}
