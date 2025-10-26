import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTitle, ChartTooltip, ChartMarker } from '@syncfusion/react-charts'
import { areaTransposedData } from './revenue-spline-data';
import { useChartTheme } from './theme';
export default function App() {    
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} transposed={true}>
            <ChartTitle text='Alibaba and Meta (Facebook) revenue' />
            <ChartTooltip enable={true} headerText='${point.x}'  format='${series.name} : <b>${point.y} Billions</b>' />
            <ChartPrimaryXAxis lineStyle={{ width: 0 }} valueType="Category" interval={2}>
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis minimum={12}>
                <ChartAxisLabel format='{value}B' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={areaTransposedData} xField="x" yField="y1" type="Area" opacity={0.5} fill={"#71AD01"} name="Alibaba" border={{ width: 2, color: chartTheme.indexOf('Dark') > -1 ? "#30EDC1" : '#008264' }}>
                    <ChartMarker visible={true} shape='Circle' fill={chartTheme.includes('Dark') ? "#D6FF89" : "#71AD01"} border={{ width: 2, color: chartTheme.includes('Dark') ? "#D6FF89" : "#71AD01"}} />
                </ChartSeries>
                <ChartSeries dataSource={areaTransposedData} xField="x" yField="y2" type="Area" opacity={0.5} fill='#71C8EE' name="Meta (Facebook)" border={{ width: 2, color: chartTheme.indexOf('Dark') > -1 ? "#DCFF89" : '#5A8100' }} >
                    <ChartMarker visible={true} fill={chartTheme.includes('Dark') ? "#30C0FF" : "#0085BF"} shape="Circle" border={{ width: 2, color: chartTheme.includes('Dark') ? "#30C0FF" : "#0085BF"}} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}