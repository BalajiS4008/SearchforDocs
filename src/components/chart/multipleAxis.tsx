import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxes, ChartAxis, ChartAxisLabel, ChartMarker, ChartTitle } from '@syncfusion/react-charts'
import { multipleAxisData } from './multiple-axes-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='C & F Temperature Overview Across Cities' />
            <ChartPrimaryXAxis valueType={'Category'} interval={1}>
                <ChartAxisLabel intersectAction='Rotate90' />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis minimum={0} maximum={100} interval={20} lineStyle={{ width: 0 }}>
                <ChartAxisLabel format='{value}°F' />
            </ChartPrimaryYAxis>
            <ChartAxes>
                <ChartAxis minimum={24} maximum={36} interval={2} opposedPosition={true} rowIndex={0} name='yAxis2' lineStyle={{ width: 0 }}>
                    <ChartAxisLabel format='{value}°C' />
                </ChartAxis>
            </ChartAxes>
            <ChartSeriesCollection>
                <ChartSeries dataSource={multipleAxisData} xField="x" yField="y1" type="Column" fill='#856EEBE5' columnWidth={0.4} cornerRadius={{ topLeft: 6, topRight: 6 }} name='Temperature in °F' />
                <ChartSeries dataSource={multipleAxisData} yAxisName="yAxis2" xField="x" yField="y2" fill="#DF4E6D" width={2} type="Spline" name='Temperature in °C'>
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}" format='Temperature : <b>${point.y}</b>' />
        </Chart>
    )
}