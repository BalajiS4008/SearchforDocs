import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisLabel, ChartAxisTitle, ChartTitle, ChartLegend } from "@syncfusion/react-charts"
import { columnWithTrackData } from "./track-data";
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <div>
            <svg style={{ height: 0 }}>
                <defs>
                    <linearGradient id="gradient-fill-track" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8F94FB" />
                        <stop offset="100%" stopColor="#4E54C8" />
                    </linearGradient>
                </defs>
            </svg>
            <Chart theme={chartTheme} enableSideBySidePlacement={false} background={chartTheme.includes('Dark') ? "#1c1b1f" : "#f8f9fa"}>
                <ChartTitle text="Which Milk Is the Most Sustainable?" />
                <ChartPrimaryXAxis valueType={'Category'} interval={1}>
                    <ChartAxisLabel intersectAction="Trim" rotationAngle={Browser.isDevice ? -45 : 0} />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={200} minimum={0} maximum={1050}>
                    <ChartAxisTitle text="Water use [liters]" />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={columnWithTrackData} xField="milkType" yField="bottleEffect" type='Column' name='Bottle Effect' fill={chartTheme.includes('Dark') ? "#1c1b1f" : "#f0f0fd"} opacity={0.9} border={{ width: 1, color: "#c5d9b1" }} cornerRadius={{ topLeft: 5, topRight: 5 }} columnSpacing={0.6} columnWidth={0.5} enableTooltip={false} />
                    <ChartSeries dataSource={columnWithTrackData} xField="milkType" yField="bottleNeck" type='Column' name='Bottle Neck' fill={chartTheme.includes('Dark') ? "#1c1b1f" : "#f0f0fd"} opacity={0.9} border={{ width: 1, color: "#c5d9b1" }} cornerRadius={{ topLeft: 10, topRight: 10 }} columnSpacing={0.6} />
                    <ChartSeries dataSource={columnWithTrackData} xField="milkType" yField="waterUsage" type='Column' name='Water Usage' fill="url(#gradient-fill-track)" cornerRadius={{ topLeft: 5, topRight: 5 }} columnSpacing={0.6} />
                </ChartSeriesCollection>
                <ChartLegend visible={false} />
                <ChartTooltip enable={true} headerText='${point.x}'  format='${series.name}: <b>${point.y}</b>' />
            </Chart>
        </div>
    )
}