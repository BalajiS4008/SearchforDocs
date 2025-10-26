import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisTitle, ChartAxisLabel, ChartStripLines, ChartStripLine, ChartZoomSettings } from '@syncfusion/react-charts'
import { firstQuarterData, secondQuarterData, thirdQuarterData, fourthQuarterData } from './keyboard-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} enableSideBySidePlacement={false}>
            <ChartTitle text="Quarterly Sales Chart" />
            <ChartPrimaryXAxis valueType={'Category'}>
                <ChartAxisLabel fontSize='0px' />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} maximum={120}>
                <ChartAxisTitle text='Sales in Percentage' />
                <ChartAxisLabel format='{value}%' />
                {!Browser.isDevice ?
                    (<ChartStripLines>
                        <ChartStripLine range={{ start: 33, end: 35.5 }} visible={true} segment={{ enable: true, start: 0, end: 5 }} style={{ color: '#98A1EA' }} />
                        <ChartStripLine range={{ start: 39, end: 39.2 }} visible={true} text={{ content: 'Jan - Mar' }} style={{ color: 'transparent' }} segment={{ enable: true, start: 0, end: 5 }} />
                        <ChartStripLine range={{ start: 65, end: 67.5 }} visible={true} segment={{ enable: true, start: 7, end: 12 }} style={{ color: '#FF8080' }} />
                        <ChartStripLine range={{ start: 70, end: 70.2 }} visible={true} text={{ content: 'Apr - Jun' }} style={{ color: 'transparent' }} segment={{ enable: true, start: 7, end: 12 }} />
                        <ChartStripLine range={{ start: 65, end: 67.5 }} visible={true} segment={{ enable: true, start: 14, end: 19 }} style={{ color: '#D3DE32' }} />
                        <ChartStripLine range={{ start: 70, end: 70.2 }} visible={true} text={{ content: 'Jul - Sep' }} style={{ color: 'transparent' }} segment={{ enable: true, start: 14, end: 19 }} />
                        <ChartStripLine range={{ start: 104, end: 106.5 }} visible={true} segment={{ enable: true, start: 21, end: 26 }} style={{ color: '#FEB5D3' }} />
                        <ChartStripLine range={{ start: 109, end: 109.2 }} visible={true} text={{ content: 'Oct - Dec' }} style={{ color: 'transparent' }} segment={{ enable: true, start: 21, end: 26 }} />
                    </ChartStripLines>) : <></>
                }
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={firstQuarterData} xField="Month" yField="Sales" name="Quarter 1" type="Column" fill='#98A1EA' cornerRadius={{ topLeft: 5, topRight: 5 }} legendShape="Rectangle" />
                <ChartSeries dataSource={secondQuarterData} xField="Month" yField="Sales" name="Quarter 2" type="Column" fill='#FF8080' cornerRadius={{ topLeft: 5, topRight: 5 }} legendShape="Rectangle" />
                <ChartSeries dataSource={thirdQuarterData} xField="Month" yField="Sales" name="Quarter 3" type="Column" fill='#D3DE32' cornerRadius={{ topLeft: 5, topRight: 5 }} legendShape="Rectangle" />
                <ChartSeries dataSource={fourthQuarterData} xField="Month" yField="Sales" name="Quarter 4" type="Column" fill='#FEB5D3' cornerRadius={{ topLeft: 5, topRight: 5 }} legendShape="Rectangle" />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}"  format='${series.name} : <b>${point.y}</b>' />
            <ChartZoomSettings selectionZoom={true} pan={true} />
        </Chart>
    )
}