import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle } from '@syncfusion/react-charts'
import { indiaGDPData, japanGDPData, usaGDPData } from './gdp-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='GDP Growth rate (from 1960 - 2024)' />
            <ChartPrimaryXAxis valueType={'Double'} />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={5} minimum={-10} maximum={15} />
            <ChartSeriesCollection>
                <ChartSeries dataSource={indiaGDPData} xField="x" yField="y" width={3} type="Line" name="India" >
                </ChartSeries>
                <ChartSeries dataSource={japanGDPData} xField="x" yField="y" width={1} type="Line" name="Japan">
                </ChartSeries>
                <ChartSeries dataSource={usaGDPData} xField="x" yField="y" width={1} type="Line" name='USA'>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} shared={true} headerText='${point.x}'  format='${series.name} : <b>${point.y}%</b>' />
        </Chart>
    )
}