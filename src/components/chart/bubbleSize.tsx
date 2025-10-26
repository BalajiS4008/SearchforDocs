import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip } from '@syncfusion/react-charts'
import { bubbleSize } from './data-source'
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();    
    return (
        <Chart theme={chartTheme}>            
            <ChartTooltip enable={true} />
            <ChartPrimaryXAxis minimum={60} maximum={100}/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={4}/>
            <ChartSeriesCollection>
                <ChartSeries dataSource={bubbleSize} xField="x" yField="y" sizeField="size" type="Bubble" />
            </ChartSeriesCollection>
        </Chart>
    );
}