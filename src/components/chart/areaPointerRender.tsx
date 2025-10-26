import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartAxisTitle, ChartTitle, ChartMarker, ChartTooltip
} from '@syncfusion/react-charts'
import { areaPointerData } from './data-source';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='US Music Sales By Cassette' />
            <ChartTooltip enable={true} headerText='${point.x}'  format='Sales : <b>${point.y}B</b>' />
            <ChartPrimaryXAxis valueType="DateTime" minimum={new Date(1984, 1, 1)} maximum={new Date(2001, 1, 1)} >
                <ChartAxisLabel format='y' />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0} maximum={12} interval={3} >
                <ChartAxisTitle text='In Billions (USD)' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={areaPointerData} xField="x" yField="y" type="Area" opacity={0.5} fill="#3CFFD2" border={{ width: 2, color: chartTheme.indexOf('Dark') > -1 ? '#3CFFD2' : '#008264' }}>
                    <ChartMarker visible={true} fill={chartTheme.indexOf('Dark') > -1 ? '#3CFFD2' : '#008264'} border={{ width: chartTheme.indexOf('Dark') > -1 ? 1 : 2, color: chartTheme.indexOf('Dark') > -1 ? '#3CFFD2' : '#008264' }} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}