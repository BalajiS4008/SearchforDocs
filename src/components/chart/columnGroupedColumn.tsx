import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTitle, ChartTooltip, ChartAxisTitle, ChartMarker, ChartDataLabel } from "@syncfusion/react-charts"
import { combinedData } from "./olympic-data";
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Olympic Medal Trends by Country and Year" />
            <ChartTooltip enable={true} headerText='${point.x}' format='${series.groupName} : <b>${point.y} Gold</b>' />
            <ChartPrimaryXAxis valueType="Category" interval={1} />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                <ChartAxisTitle text="Number of Medals Won" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={combinedData} xField="x" yField="y1" fill="#689B8A" name="USA Total Medals" type="Column" groupName="USA" columnWidth={0.7} columnSpacing={0.2} cornerRadius={{ topLeft: 8, topRight: 8 }} legendShape="Rectangle" >
                    <ChartMarker><ChartDataLabel visible={!Browser.isDevice} position='Top'></ChartDataLabel></ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={combinedData} xField="x" yField="y2" fill="#F9CB99" name="USA Gold Medals" type="Column" groupName="USA" columnWidth={0.5} columnSpacing={0.2} cornerRadius={{ topLeft: 8, topRight: 8 }} legendShape="Rectangle">
                    <ChartMarker><ChartDataLabel visible={!Browser.isDevice} position='Top'></ChartDataLabel></ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={combinedData} xField="x" yField="y3" fill="#8E7AB5" name="UK Total Medals" type="Column" groupName="UK" columnWidth={0.7} columnSpacing={0.2} cornerRadius={{ topLeft: 8, topRight: 8 }} legendShape="Rectangle">
                    <ChartMarker><ChartDataLabel visible={!Browser.isDevice} position='Top'></ChartDataLabel></ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={combinedData} xField="x" yField="y4" fill="#EEA5A6" name="UK Gold Medals" type="Column" groupName="UK" columnWidth={0.5} columnSpacing={0.2} cornerRadius={{ topLeft: 8, topRight: 8 }} legendShape="Rectangle">
                    <ChartMarker><ChartDataLabel visible={!Browser.isDevice} position='Top'></ChartDataLabel></ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={combinedData} xField="x" yField="y5" fill="#FF6868" name="China Total Medals" type="Column" groupName="China" columnWidth={0.7} columnSpacing={0.2} cornerRadius={{ topLeft: 8, topRight: 8 }} legendShape="Rectangle">
                    <ChartMarker><ChartDataLabel visible={!Browser.isDevice} position='Top'></ChartDataLabel></ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={combinedData} xField="x" yField="y6" fill="#9BCDD2" name="China Gold Medals" type="Column" groupName="China" columnWidth={0.5} columnSpacing={0.2} cornerRadius={{ topLeft: 8, topRight: 8 }} legendShape="Rectangle">
                    <ChartMarker><ChartDataLabel visible={!Browser.isDevice} position='Top'></ChartDataLabel></ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}