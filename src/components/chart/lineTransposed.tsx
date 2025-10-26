import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartAxisLabel, ChartTitle } from '@syncfusion/react-charts'
import { lineTransposdData } from './climate-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    const seriesColor = chartTheme.indexOf('Dark') > -1 ? ['#7F9CFE', '#FD963B'] : ['#0A30AE', '#E3651D'];
    return (
        <Chart theme={chartTheme} transposed={true}>
            <ChartTitle text='Climate Graph in 2024' />
            <ChartPrimaryXAxis valueType={'Category'} lineStyle={{ width: 0 }} />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                <ChartAxisLabel format='{value}°C' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={lineTransposdData} xField="x" yField="y1" type="Line" name='London' fill={seriesColor[0]}>
                    <ChartMarker visible={true} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={lineTransposdData} xField="x" yField="y2" type="Line" name="France" fill={seriesColor[1]}>
                    <ChartMarker visible={true} shape='Circle' />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${series.name}' />
        </Chart>
    )
}