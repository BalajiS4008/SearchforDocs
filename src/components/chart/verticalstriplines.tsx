import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisTitle, ChartAxisLabel, ChartLegend, ChartStripLines, ChartStripLine } from '@syncfusion/react-charts'
import { windSpeedData, windGustData } from './wind-speed-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Wind Speed and Gust (km/h)' />
            <ChartPrimaryXAxis valueType={'DateTime'}>
                <ChartAxisLabel format='E dd/MM' intersectAction="None" rotationAngle={-90} />
                <ChartStripLines>
                    <ChartStripLine range={{ start: new Date(2023, 4, 1), end: new Date(2023, 4, 5) }} text={{ content: 'Week 1', hAlign: 'Center', font: { fontSize: '13px' } }} style={{ color: 'rgba(68, 170, 213, 0.1)', border: { width: 0 } }} visible={true} />
                    <ChartStripLine range={{ start: new Date(2023, 4, 5), end: new Date(2023, 4, 10) }} text={{ content: 'Week 2', hAlign: 'Center', font: { fontSize: '13px' } }}
                        style={{ color: 'rgba(0, 0, 0, 0)', border: { width: 0 } }} visible={true} />
                    <ChartStripLine range={{ start: new Date(2023, 4, 10), end: new Date(2023, 4, 15) }}
                        text={{ content: 'Week 3', hAlign: 'Center', font: { fontSize: '13px' } }} style={{ color: 'rgba(68, 170, 213, 0.1)', border: { width: 0 } }} visible={true} />
                </ChartStripLines>
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis minimum={0} maximum={30} interval={10} lineStyle={{ width: 0 }} rangePadding='None'>
                <ChartAxisTitle text='Wind Speed and Gust (km/h)' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={windSpeedData} xField="x" yField="wind" type="Spline" fill='#01A725' name="Wind Speed (km/h)" width={2} legendShape='HorizontalLine' />
                <ChartSeries dataSource={windGustData} xField="x" yField="gust" type="Spline" fill='#FF8225' name="Wind Gust (km/h)" width={2} legendShape='HorizontalLine' />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='' format='${point.x} <br> ${series.name} : <b>${point.y}</b>' showMarker={false} showNearestTooltip={true} />
            <ChartLegend visible={true} shapeHeight={6} shapeWidth={15} />
        </Chart>
    )
}