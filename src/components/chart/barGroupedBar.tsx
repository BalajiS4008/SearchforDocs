import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTitle, ChartTooltip, ChartAxisTitle, ChartDataLabel, ChartMarker } from "@syncfusion/react-charts"
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
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} >
                <ChartAxisTitle text="Number of Medals Won" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={combinedData} xField="x" yField="y1" name="USA Total Medals" type="Bar" groupName="USA" fill="#748DAE" columnWidth={0.7} columnSpacing={0.2} cornerRadius={{ bottomRight: 4, topRight: 4 }} legendShape='Rectangle'>
                    <ChartMarker><ChartDataLabel visible={!Browser.isDevice} position='Top'></ChartDataLabel></ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={combinedData} xField="x" yField="y2" name="USA Gold Medals" type="Bar" groupName="USA" fill="#8DB6ED" columnWidth={0.5} columnSpacing={0.2} cornerRadius={{ bottomRight: 4, topRight: 4 }} legendShape='Rectangle' >
                    <ChartMarker><ChartDataLabel visible={!Browser.isDevice} position='Top'></ChartDataLabel></ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={combinedData} xField="x" yField="y3" name="UK Total Medals" type="Bar" groupName="UK" fill="#8D8D87" columnWidth={0.7} columnSpacing={0.2} cornerRadius={{ bottomRight: 4, topRight: 4 }} legendShape='Rectangle'>
                    <ChartMarker><ChartDataLabel visible={!Browser.isDevice} position='Top'></ChartDataLabel></ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={combinedData} xField="x" yField="y4" name="UK Gold Medals" type="Bar" groupName="UK" fill="#DDDAD0" columnWidth={0.5} columnSpacing={0.2} cornerRadius={{ bottomRight: 4, topRight: 4 }} legendShape='Rectangle' >
                    <ChartMarker><ChartDataLabel visible={!Browser.isDevice} position='Top'></ChartDataLabel></ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={combinedData} xField="x" yField="y5" name="China Total Medals" type="Bar" groupName="China" fill="#689B8A" columnWidth={0.7} columnSpacing={0.2} cornerRadius={{ bottomRight: 4, topRight: 4 }} legendShape='Rectangle'>
                    <ChartMarker><ChartDataLabel visible={!Browser.isDevice} position='Top'></ChartDataLabel></ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={combinedData} xField="x" yField="y6" name="China Gold Medals" type="Bar" groupName="China" fill="#B2CD9C" columnWidth={0.5} columnSpacing={0.2} cornerRadius={{ bottomRight: 4, topRight: 4 }} legendShape='Rectangle' >
                    <ChartMarker><ChartDataLabel visible={!Browser.isDevice} position='Top'></ChartDataLabel></ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}