import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartMarker, ChartTooltip, ChartAxisTitle, ChartTitle, ChartAxisLabel, ChartStripLines, ChartStripLine } from '@syncfusion/react-charts'
import { weeklySalesData } from './weekly-sales-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    const seriesColor = chartTheme.indexOf('Dark') > -1 ? '#77E4D4' : '#0A97B0';
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Weekly sales vs. target' />
            <ChartPrimaryXAxis valueType={'DateTime'} minimum={new Date(2024, 2, 27)} maximum={new Date(2024, 5, 26)} lineStyle={{ width: 0, color: '#e0e0e0' }}>
                <ChartAxisLabel format='MMM dd, yyyy' rotationAngle={Browser.isDevice ? -45 : -45} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} rangePadding='None' minimum={0}>
                <ChartAxisTitle text='Sales' />
                <ChartAxisLabel format='{value}K' />
                <ChartStripLines>
                    <ChartStripLine range={{ start:12, end:12.1}} visible={true} segment={{ enable: true, start: new Date(2024, 2, 27), end: new Date(2024, 5, 26),axisName:'primaryXAxis' }}
                        style={{ color:"#79747E", dashArray:'10,10', zIndex: 'Over'}} />
                    <ChartStripLine range={{ start:12.5, end:12.6}} visible={true}
                        segment={{ enable: true, start:new Date(2024, 2, 27), end: new Date(2024, 5, 26), axisName:'primaryXAxis'}}
                        text={{ content: "Weekly sales target", rotation:0, hAlign:'Left',
                        font:{ color: chartTheme.includes('Dark') ? "#E6E1E5" : "#1C1B1F", fontSize: "14px", fontWeight: "400" }}} style={{ zIndex:'Over', color:"transparent"}} />
                </ChartStripLines>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={weeklySalesData} xField="x" yField="sales" type="Line" fill={seriesColor}>
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${point.x}' format='Sales : <b>${point.y}</b>' />
        </Chart>
    )
}