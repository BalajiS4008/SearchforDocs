import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisTitle, ChartLegend, ChartArea, ChartStripLine, ChartStripLines } from '@syncfusion/react-charts'
import { bubbleFirstSeriesCustomData, bubbleSecondSeriesCustomData, bubbleThirdSeriesCustomData, bubbleFourthSeriesCustomData } from './growth-population-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}> 
        <ChartArea border={{width: 1, color:'#E7E3F0'}}/>           
            <ChartTooltip enable={true} headerText=''  format='Literacy rate : <b>${point.x}%</b> <br/>GDP growth rate : <b>${point.y}</b><br/>Population : <b>${point.size}B</b>' showMarker={false} />
            <ChartPrimaryXAxis minimum={60} maximum={101}>
                <ChartAxisTitle text='Literacy Rate'/>
                <ChartStripLines>
                    <ChartStripLine visible={true} range={{ start:65, end: 65.1 }} style={{ color: 'Gray', dashArray: '3,10', opacity: 0.8 }} />
                </ChartStripLines>
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={-1} maximum={10} >
                <ChartAxisTitle text='GDP Growth Rate'/>
                <ChartStripLines>
                    <ChartStripLine visible={true} range={{ start:1.5, end: 1.6 }} style={{ color: 'Gray', dashArray: '3,10', opacity: 0.8 }} />
                </ChartStripLines>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={bubbleFirstSeriesCustomData} xField="xValue" yField="y" type="Bubble" sizeField='size' fill="#F7CAC9" opacity={0.7} name='North America'/>
                <ChartSeries dataSource={bubbleSecondSeriesCustomData} xField="xValue" yField="y" type="Bubble" sizeField='size' fill="#88B04B" opacity={0.7} name='Europe' />
                <ChartSeries dataSource={bubbleThirdSeriesCustomData} xField="xValue" yField="y" type="Bubble" sizeField='size' fill="#6B5B95" opacity={0.7} name='Asia' />
                <ChartSeries dataSource={bubbleFourthSeriesCustomData} xField="xValue" yField="y" type="Bubble" sizeField='size' fill="#FF6F61" opacity={0.7} name='Africa' />
            </ChartSeriesCollection>
            <ChartLegend visible={true} position={'Auto'}/>
        </Chart>
    );
}