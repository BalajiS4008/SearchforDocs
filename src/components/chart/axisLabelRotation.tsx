import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel, ChartAxisTitle} from '@syncfusion/react-charts'
import { pointColorData } from './trade-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='U.S Trade with India in 2024' />
            <ChartPrimaryXAxis valueType={'Category'}>
                <ChartAxisLabel rotationAngle={-45} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={0.3}>
                <ChartAxisLabel format='{value}B' />
                <ChartAxisTitle text='Billion USD' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={pointColorData} fill={chartTheme.includes('Dark') ? "#ba7dda" : "#87ceeb"} xField="x" yField="y" type="Column" columnWidth={0.5} cornerRadius={{ topLeft: 8, topRight: 8 }} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='Export to India'  format='${point.x} : <b>${point.y}</b>' />
        </Chart>
    )
}