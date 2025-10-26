import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisTitle, ChartMarker, ChartTooltip
} from "@syncfusion/react-charts"
import { cluster2Value, cluster3Value } from './circumference-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>            
            <ChartTooltip enable={true} headerText="${series.name}"  format="Shoulder Breadth: <b>${point.x} cm</b><br/>Bust Chest Circumference: <b>${point.y} cm</b>" />
            <ChartPrimaryXAxis valueType="Double" minimum={45} maximum={50}>
                <ChartAxisTitle text="Shoulder Breadth (cm)" />                
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={70} maximum={140} interval={20} rangePadding="None">                
                <ChartAxisTitle text="Bust Chest Circumference (cm)" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={cluster2Value} xField="Breadth" yField="Circumference" fill={chartTheme.includes('Dark') ? "#635DE5" : "#5853C6"} name="21-25 Years" type="Scatter" legendShape={"Circle"} opacity={0.4}>
                    <ChartMarker visible={true} width={18} height={18} shape="Circle" />
                </ChartSeries>
                <ChartSeries dataSource={cluster3Value} xField="Breadth" yField="Circumference" fill={chartTheme.includes('Dark') ? "#FFA330" : "#FF9B1D"} name="26-30 Years" type="Scatter" legendShape={"Circle"} opacity={0.4}>
                    <ChartMarker visible={true} width={8} height={8} shape="Circle" />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}