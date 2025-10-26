import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartTooltip, ChartSeries, ChartSeriesCollection, ChartAxisTitle, ChartAxisLabel } from "@syncfusion/react-charts"
import { numericData } from './numeric-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartPrimaryXAxis valueType="Double" interval={1}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={7} maximum={8.2} interval={0.2}>
                <ChartAxisTitle text="Population in Billions" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={numericData} xField="x" yField="y1" type="Column" colorField="color" columnWidth={0.5} cornerRadius={{ topLeft: 5, topRight: 5 }} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}" format='Population : <b>${point.y}B</b>' />
        </Chart>
    )
}