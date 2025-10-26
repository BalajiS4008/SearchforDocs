import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisLabel, ChartAxisTitle, ChartTitle } from "@syncfusion/react-charts"
import { rectSeriesNegativeData } from "./ocean-temperature-data";
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>            
            <ChartTitle text="Global Ocean Temperature Anomalies (1880-2022)" />
            <ChartPrimaryXAxis valueType={'Double'} minimum={1880} maximum={2022} interval={20}>
                <ChartAxisTitle text="Year"/>
                <ChartAxisLabel intersectAction="Trim" format={"####"} rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={0.2} minimum={-0.5}  maximum={0.8}>
                <ChartAxisTitle text="Temperature Anomaly (°C)"/>                
                <ChartAxisLabel format="{value}°C"  />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries colorField="color" dataSource={rectSeriesNegativeData} xField="Year" yField="Anomaly" type='Column' cornerRadius={{ bottomRight: 0.5, topRight: 0.5 }} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${point.x}'  format='Anomaly: <b>${point.y}</b>' />
        </Chart>
    )
}