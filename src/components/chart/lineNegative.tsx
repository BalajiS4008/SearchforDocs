import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartTitle, ChartAxisTitle, ChartStripLines, ChartStripLine } from '@syncfusion/react-charts';
import { lineNegativeData } from './gold-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    const seriesColor = chartTheme.indexOf('Dark') > -1 ? '#77E4D4' : '#0A97B0';
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text={`Annual Gold Price (2009-2023) in USD`} />
            <ChartPrimaryXAxis valueType={'Double'} />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                <ChartAxisTitle text='% Annual Exchange Rate' />
                <ChartStripLines>
                    <ChartStripLine range={{ start: 20, end: 20.5, size: 1 }} visible={true} style={{ dashArray: '10,10' }} />
                    <ChartStripLine range={{ start: 21, end: 21.5, size: 1 }} style={{ color: 'transparent', dashArray: '4,4' }} visible={true} text={{ content: 'Highest Annual Growth', hAlign: 'Right', rotation: 0, font: { color: chartTheme.includes('Dark') ? '#50C812' : '#337D0E' } }} />
                    <ChartStripLine range={{ start: -25, end: -24.5, size: 1 }} visible={true} style={{ dashArray: '10,10' }} />
                    <ChartStripLine range={{ start: -28.5, end: -28, size: 1 }} style={{ color: 'transparent', dashArray: '4,4' }} visible={true} text={{ content: 'Lowest Annual Growth', hAlign: 'Right', rotation: 0, font: { color: chartTheme.includes('Dark') ? '#F5463C' : '#E02F25' } }} />
                </ChartStripLines>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={lineNegativeData} xField="x" yField="USD" type="Line" fill={seriesColor}>
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${point.x}' format={`Annual Growth : <b>${'${point.y}'}</b>`} />
        </Chart>
    );
}
