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
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis minimum={0} maximum={30} interval={10} lineStyle={{ width: 0 }} rangePadding='None'>
                <ChartAxisTitle text='Wind Speed and Gust (km/h)' />
                <ChartStripLines>
                    <ChartStripLine range={{ start: 0, end: 5 }} text={{ content: 'Calm', hAlign: 'Left', vAlign: 'Center' }} style={{ color: 'rgba(68, 170, 213, 0.1)', border: { width: 0 } }} visible={true} />
                    <ChartStripLine range={{ start: 5, end: 8 }} text={{ content: 'Light Air', hAlign: 'Center', vAlign: 'Top' }} style={{ color: 'rgba(0, 0, 0, 0)', border: { width: 0 } }} visible={true} />
                    <ChartStripLine range={{ start: 8, end: 11 }} text={{ content: 'Light Breeze', hAlign: 'Right', vAlign: 'Center' }} style={{ color: 'rgba(68, 170, 213, 0.1)', border: { width: 0 } }} visible={true} />
                    <ChartStripLine range={{ start: 11, end: 18 }} text={{ content: 'Gentle Breeze', hAlign: 'Center', vAlign: 'Bottom' }} style={{ color: 'rgba(0, 0, 0, 0)', border: { width: 0 } }} visible={true} />
                    <ChartStripLine range={{ start: 18, end: 28 }} text={{ content: 'Moderate Breeze', hAlign: 'Right', vAlign: 'Top' }} style={{ color: 'rgba(68, 170, 213, 0.1)', border: { width: 0 } }} visible={true} />
                    <ChartStripLine range={{ start: 28, end: 30 }} text={{ content: 'Fresh Breeze', hAlign: 'Left', vAlign: 'Bottom' }} style={{ color: 'rgba(0, 0, 0, 0)', border: { width: 0 } }} visible={true} />
                </ChartStripLines>
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