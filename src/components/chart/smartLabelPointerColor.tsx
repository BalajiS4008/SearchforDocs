import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip
} from '@syncfusion/react-charts'
import { pointData } from './data-source'
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            
            <ChartTooltip enable={true} headerText="${point.x}"  format="Sales : <b>${point.y} M</b>"/>
            <ChartPrimaryXAxis valueType="Category">
                
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={5}>
                
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={pointData} xField="x" yField="y" type="Column" columnWidth={0.2} colorField='color' />
            </ChartSeriesCollection>
        </Chart>
    );
}
