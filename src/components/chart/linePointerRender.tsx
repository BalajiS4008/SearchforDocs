import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartTitle, ChartAxisTitle, ChartAxisLabel } from '@syncfusion/react-charts'
import { vietnamData } from './steel-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    const seriesColor = chartTheme.indexOf('Dark') > -1 ? '#77E4D4' : '#0A97B0';
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Vietnam Annual Crude Steel Production (2016–2024)' />
            <ChartPrimaryXAxis interval={1}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={5} minimum={4} maximum={25}>
                <ChartAxisTitle text='Production in Millions' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={vietnamData} xField="x" yField="y" type="Line" fill={seriesColor} >
                    <ChartMarker visible={true} width={10} height={10} />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="Vietnam"  format='${point.x} : <b>${point.y} M</b>' />
        </Chart>
    )
}