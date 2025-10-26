import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartTooltip, ChartSeries, ChartSeriesCollection, ChartMajorGridLines, ChartMinorGridLines, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts"
import { smartAxisLabelData } from './label-position-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Population by Country 2024' />            
            <ChartTooltip enable={true} headerText="${point.x}"  format='Population : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType="Category" minorTicksPerInterval={3}>
                <ChartMajorGridLines width={2} dashArray="5,3" />
                <ChartMinorGridLines width={2} dashArray="5,3" />
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minorTicksPerInterval={3} interval={0.3}>
                <ChartMajorGridLines width={2} dashArray="5,3" />
                <ChartMinorGridLines width={2} dashArray="5,3" />
                <ChartAxisLabel format='{value}B' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={smartAxisLabelData} xField="x" yField="y" type="Column" fill="#57A8EB" columnWidth={0.4} cornerRadius={{ topLeft: 5, topRight: 5 }} />
            </ChartSeriesCollection>
        </Chart>
    );
}