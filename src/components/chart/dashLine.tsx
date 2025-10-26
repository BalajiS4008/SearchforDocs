import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel, ChartMarker } from '@syncfusion/react-charts'
import { dashedLineData } from './investment.data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Capital Investment as a Share of Exports' />
            <ChartPrimaryXAxis valueType={'Double'} interval={1}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis minimum={3} maximum={21} interval={3} lineStyle={{ width: 0 }}>
                <ChartAxisLabel format='{value}%' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={dashedLineData} xField="x" yField="y" type="Line" name="Singapore" fill={chartTheme.indexOf('Dark') > -1 ? "#77E4D4" : "#92AD20"} dashArray='4,4'>
                    <ChartMarker visible={true} />
                </ChartSeries>
                <ChartSeries dataSource={dashedLineData} xField="x" yField="y1" type="Line" name="Saudi Arabia" fill={chartTheme.indexOf('Dark') > -1 ? "#F6FA70" : "#474E93"} dashArray='4,4'>
                    <ChartMarker visible={true} />
                </ChartSeries>
                <ChartSeries dataSource={dashedLineData} xField="x" yField="y2" type="Line" name="Spain" fill={chartTheme.indexOf('Dark') > -1 ? "#EF507F" : "#FF204E"} dashArray='4,4'>
                    <ChartMarker visible={true} />
                </ChartSeries>
                <ChartSeries dataSource={dashedLineData} xField="x" yField="y3" type="Line" name="Portugal" fill={chartTheme.indexOf('Dark') > -1 ? "#37AFE1" : "#0A97B0"} dashArray='4,4'>
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} />
        </Chart>
    )
}