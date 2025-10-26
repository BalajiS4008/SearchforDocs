import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisLabel, ChartAxisTitle, ChartTitle } from "@syncfusion/react-charts"
import { columnData } from "./production-data";
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <>
            {/* Gradient Definition */}
            <svg style={{ height: 0 }}>
                <defs>
                    <linearGradient id="gradient-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8C3BC8" />
                        <stop offset="100%" stopColor="#CE59FF" />
                    </linearGradient>
                </defs>
            </svg>
            <svg style={{ height: 0 }}>
                <defs>
                    <linearGradient id="gradient-fill-index" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#45AF20" />
                        <stop offset="100%" stopColor="#80C76D" />
                    </linearGradient>
                </defs>
            </svg>
            <Chart theme={chartTheme}>
                <ChartTitle text="Walnuts and Almonds Estimated Production for 2023" />
                <ChartPrimaryXAxis valueType={'Category'} interval={1}>
                    <ChartAxisLabel intersectAction="Trim" rotationAngle={Browser.isDevice ? -45 : 0} />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                    <ChartAxisTitle text="Metric Tons" />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={columnData} xField="country" yField="walnuts" type='Column' name='Walnuts' fill="url(#gradient-fill)" opacity={0.8} cornerRadius={{ topLeft: 14, topRight: 14 }} columnSpacing={0.15} columnWidth={0.5} legendShape="Rectangle" />
                    <ChartSeries dataSource={columnData} xField="country" yField="almonds" type='Column' name='Almonds' fill="url(#gradient-fill-index)" opacity={1} cornerRadius={{ topLeft: 14, topRight: 14 }} columnSpacing={0.15} columnWidth={0.5} legendShape="Rectangle" />
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText='${point.x}'  format='${series.name}: <b>${point.y}K</b>' />
            </Chart>
        </>
    )
}