import { Chart, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartAxisTitle, ChartMarker, ChartDataLabel, ChartTitle, ChartMajorTickLines, ChartAxisLabel } from "@syncfusion/react-charts"
import { barWithTrackData } from "./region-revenue-data";
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} enableSideBySidePlacement={false} height='450px' width='100%' >
            <ChartTitle text="Gross Revenue by Region" />
            <ChartPrimaryXAxis valueType='Category'>
                <ChartAxisTitle text="Region" />
                <ChartMajorTickLines width={1}/>
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis valueType='Double' minimum={0} maximum={12000000} interval={2000000} >
                <ChartAxisLabel format="${value}" rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={barWithTrackData} xField="region" yField="targetRevenue" type='Bar' fill="#B2CD9C" border={{ width: 1, color: "#689B8A" }} cornerRadius={{ topRight: 20, bottomRight: 20 }} opacity={0.9} columnWidth={0.4} enableTooltip={false} />
                <ChartSeries dataSource={barWithTrackData} xField="region" yField="revenue" type='Bar' fill="#689B8A" border={{ width: 1, color: "#B2CD9C" }} columnWidth={0.4}>
                    <ChartMarker>
                        <ChartDataLabel visible={true} format={"{value}%"} position="Bottom" font={{ color: '#ffffff' }} />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}"  format="Revenue: <b>${point.y}</b>" />
        </Chart>
    )
}