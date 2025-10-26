import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTooltip, ChartTitle } from '@syncfusion/react-charts'
import { smartAxisLabelData } from './label-position-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Population by Country 2024' />            
            <ChartTooltip enable={true} headerText="${point.x}"  format='Population : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType={'Category'}>
                <ChartAxisLabel enableTrim={true} maxLabelWidth={34} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={0.3}>
                <ChartAxisLabel format='{value}B' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={smartAxisLabelData} xField="x" yField="y" type="Column" fill='#43CDFF' columnWidth={0.4} cornerRadius={{ topLeft: 5, topRight: 5 }} />
            </ChartSeriesCollection>
        </Chart>
    );
}