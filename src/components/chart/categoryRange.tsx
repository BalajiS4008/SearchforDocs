import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTooltip, ChartTitle, ChartAxisTitle } from '@syncfusion/react-charts'
import { categoryAxisData } from './category-axis-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Population by Country 2024' />
            <ChartTooltip enable={true} headerText="${point.x}" format='Population : <b>${point.y}B</b>' />
            <ChartPrimaryXAxis valueType={'Category'} minimum={2} maximum={6} interval={1}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={0.1} maximum={0.4}>
                <ChartAxisTitle text='Population in Billions' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={categoryAxisData} xField="x" yField="y" type="Column" fill='#179BAE' columnWidth={0.4} cornerRadius={{ topLeft: 5, topRight: 5 }} />
            </ChartSeriesCollection>
        </Chart>
    )
}