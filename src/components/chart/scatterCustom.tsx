import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartMajorGridLines, ChartAxisTitle, ChartMarker, ChartTooltip } from "@syncfusion/react-charts"
import {cluster1Value, cluster2Value, cluster3Value, cluster4Value, cluster5Value} from './circumference-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>            
            <ChartTooltip enable={true} headerText="${series.name}"  format="Shoulder Breadth: <b>${point.x} cm</b><br/>Bust Chest Circumference: <b>${point.y} cm</b>"/>
            <ChartPrimaryXAxis valueType="Double" minimum={40} maximum={56}>
                <ChartAxisTitle text="Shoulder Breadth (cm)"/>
                <ChartMajorGridLines width={0}/>
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={70} maximum={140} interval={20} rangePadding="None">                
                <ChartAxisTitle text="Bust Chest Circumference (cm)"/>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={cluster1Value} xField="Breadth" fill={"#2CAFFE"} yField="Circumference" name="18-20 Years" type="Scatter" opacity={0.5}>
                    <ChartMarker visible={true} width={10} height={10} opacity={0.4}/>
                </ChartSeries>
                <ChartSeries dataSource={cluster2Value} xField="Breadth" fill={chartTheme.includes('Dark') ? "#635DE5" :"#5853C6"}  yField="Circumference" name="21-25 Years" type="Scatter" opacity={0.5}>
                    <ChartMarker visible={true} width={10} height={10}/>
                </ChartSeries>
                <ChartSeries dataSource={cluster3Value} xField="Breadth" fill={chartTheme.includes('Dark') ? "#FFA330" : "#FF9B1D"} yField="Circumference" name="26-30 Years" type="Scatter" opacity={0.5}>
                    <ChartMarker visible={true} width={10} height={10}/>
                </ChartSeries>
                <ChartSeries dataSource={cluster4Value} xField="Breadth" fill={"#FE6C38"} yField="Circumference" name="31-35 years" type="Scatter">
                    <ChartMarker visible={true} width={10} height={10}/>
                </ChartSeries>
                <ChartSeries dataSource={cluster5Value} xField="Breadth" fill={"#7D9CCF"} yField="Circumference" name="36+ Years" type="Scatter">
                    <ChartMarker visible={true} width={10} height={10}/>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}