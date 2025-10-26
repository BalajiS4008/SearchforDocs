import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisLabel, ChartAxisTitle, ChartTitle } from "@syncfusion/react-charts"
import { columnData } from './production-data';
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Walnuts and Almonds Estimated Production for 2023" />
            <ChartPrimaryXAxis valueType={'Category'} interval={1}>
                <ChartAxisLabel intersectAction="Trim" rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                <ChartAxisTitle text="Metric Tons" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={columnData} xField="country" yField="walnuts" type='Column' name='Walnuts' fill="#00C5BC" columnWidth={0.5} cornerRadius={{ topLeft: 10, topRight: 10 }} columnSpacing={0.15} legendShape="Rectangle" />
                <ChartSeries dataSource={columnData} xField="country" yField="almonds" type='Column' name='Almonds' fill="#BA7DDA" columnWidth={0.5} cornerRadius={{ topLeft: 10, topRight: 10 }} columnSpacing={0.15} legendShape="Rectangle" />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${point.x}'  format='${series.name}: <b>${point.y}K</b>' />
        </Chart>
    )
}