import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartDataLabel, ChartAxisTitle, ChartTitle } from "@syncfusion/react-charts"
import { scatterLabelData } from './scatter-label-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTooltip enable={true} headerText="${point.tooltip}"  format="Height: <b>${point.x} in</b><br/>Weight: <b>${point.y} kg</b>" />
            <ChartTitle text="Weight by Height"/>
            <ChartPrimaryXAxis valueType="Double" minimum={50} maximum={75} interval={5} >
                <ChartAxisTitle text="Height (inches)"/>
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={50} maximum={160} interval={20}>
                <ChartAxisTitle text="Weight (kg)"/>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={scatterLabelData} fill={chartTheme.includes('Dark') ? "#635DE5" : "#5853C6"} xField="height" yField="weight" type="Scatter" tooltipField="name">
                    <ChartMarker visible={true} shape="Star" height={12} width={12}>
                        <ChartDataLabel visible={true} labelField="name" />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}