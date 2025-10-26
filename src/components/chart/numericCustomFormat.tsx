import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts";
import { numericFormatData } from './numeric-format-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Yearly Temperature Readings (°F)" />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={50} maximum={57}>
                <ChartAxisLabel format="{value}°F" />
            </ChartPrimaryYAxis>
            <ChartPrimaryXAxis valueType="Double" interval={1}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartTooltip enable={true} headerText="${point.x}" format='Temperature : <b>${point.y}</b>' />
            <ChartSeriesCollection>
                <ChartSeries dataSource={numericFormatData} xField="x" yField="y" type="Column" fill="#7D8D86" columnWidth={0.5} cornerRadius={{ topLeft: 5, topRight: 5 }} />
            </ChartSeriesCollection>
        </Chart>
    );
}