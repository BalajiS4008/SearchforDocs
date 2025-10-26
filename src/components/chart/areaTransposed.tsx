import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTitle, ChartTooltip, ChartMarker, ChartMajorGridLines
} from '@syncfusion/react-charts'
import { useChartTheme } from './theme';
import { amazonData, tencentData } from './revenue-data';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} transposed={true}>
            <ChartTitle text='Amazon and Tencent Annual Revenue' />
            <ChartTooltip enable={true} headerText='${point.x}'  format='${series.name} : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType="Category" interval={3}>
                <ChartMajorGridLines width={1} dashArray='10,10' />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis>
                <ChartAxisLabel format='${value}M' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={amazonData} xField="x" yField="y" type="Area" opacity={0.5} fill={"#3CFFD2"} name="Amazon" border={{ width: 2, color: chartTheme.indexOf('Dark') > -1 ? "#30EDC1" : '#008264' }}>
                    <ChartMarker visible={true} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={tencentData} xField="x" yField="y" type="Area" opacity={0.5} fill='#DCFF89' name="Tencent" border={{ width: 2, color: chartTheme.indexOf('Dark') > -1 ? "#DCFF89" : '#5A8100' }} >
                    <ChartMarker visible={true} shape='Circle' />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}