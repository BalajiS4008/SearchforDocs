import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartMarker, ChartDataLabel, ChartAxisTitle, ChartStripLines, ChartStripLine, ChartArea, ChartAxisLabel } from '@syncfusion/react-charts'
import { bubbleData } from './bubble-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartArea border={{ width: 1, color: '#E7E3F0' }} />
            <ChartTitle text='World Countries Details' />
            <ChartTooltip enable={true} headerText="${point.tooltip}" format="Literacy Rate : <b>${point.x}%</b> <br/>GDP Annual Growth Rate : <b>${point.y}</b><br/>Population : <b>${point.size} Billion</b>" />
            <ChartPrimaryXAxis minimum={65} maximum={102} interval={5}>
                <ChartAxisTitle text='Literacy Rate' />
                <ChartStripLines>
                    <ChartStripLine visible={true} range={{ start: 70, end: 70.1 }} style={{ color: 'Gray', dashArray: '3,10', opacity: 0.8 }} />
                </ChartStripLines>
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis minimum={-1} maximum={10} interval={2.5}>
                <ChartAxisTitle text='GDP Annual Growth Rate' />
                <ChartAxisLabel format='n1' />
                <ChartStripLines>
                    <ChartStripLine visible={true} range={{ start: 1.5, end: 1.6 }} style={{ color: 'Gray', dashArray: '3,10', opacity: 0.8 }} />
                </ChartStripLines>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={bubbleData} type='Bubble' minRadius={3} maxRadius={6} tooltipField='toolTipMappingName' fill="#7F3FBF80" border={{ width: 2 }} xField='x' yField='y' sizeField='size' opacity={0.5}>
                    <ChartMarker>
                        <ChartDataLabel visible={true} labelField='text' position='Middle' />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}