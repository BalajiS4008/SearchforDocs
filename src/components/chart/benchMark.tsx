import {
    Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTitle, ChartAxisLabel, ChartMarker, ChartTooltip
} from '@syncfusion/react-charts'
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    const generateLargeData = (count: number) => {
        const series1 = [];
        let point1: object;
        let value = 0;
        for (let pts = 0; pts < count; pts++) {
            // Create more pronounced waves by increasing the sine amplitude
            // and adding additional wave components
            if (pts % 3 == 0) {
                value -= (Math.random() * (100) / 3) * 4;
            }
            else if (pts % 2 == 0) {
                value += (Math.random() * (100) / 3) * 4;
            }
            if (value < 0) {
                value = value * -1;
            }
            if (value >= 12000) {
                value = Math.floor(Math.random() * 11000) + 1000;
            }
            point1 = { x: new Date(2005, 1, 1).setHours(pts), y: value };
            series1.push(point1);
        }
        return series1;
    };
    const largeData = generateLargeData(1000000);
    return (
        <div>
            <Chart id="bench-mark" theme={chartTheme} border={{ width: 0, color: 'gray' }} >
                <ChartTitle text="Chart with 1000K data"/>                
                <ChartTooltip enable={true} headerText="" />
                <ChartPrimaryXAxis intervalType={'Years'} valueType='DateTime'>
                    <ChartAxisLabel />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis visible={true}>
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={largeData} xField="x" yField="y" type="Line" name='Vietnam'>
                        <ChartMarker visible={true} width={8} height={8} filled={true} />
                    </ChartSeries>
                </ChartSeriesCollection>
                <ChartLegend visible={false}/>
            </Chart>
        </div>
    )
}