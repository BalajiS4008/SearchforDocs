import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel } from '@syncfusion/react-charts'
import { franceBirthData } from './france-birth-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Life Expectancy for People of Different Ages, France" />
            <ChartPrimaryXAxis valueType={'Category'} />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={25} maximum={90}>
                <ChartAxisLabel format='{value} Years' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={franceBirthData} xField="x" yField="y1" fill='#0A97B0' name="At Birth" type="Line" />
                <ChartSeries dataSource={franceBirthData} xField="x" yField="y2" fill='#FF8225' name="10 Year old" type="Line" />
                <ChartSeries dataSource={franceBirthData} xField="x" yField="y3" fill='#006A71' name="25 Year old" type="Line" />
                <ChartSeries dataSource={franceBirthData} xField="x" yField="y4" fill='#AC1754' name="45 Year old" type="Line" />
                <ChartSeries dataSource={franceBirthData} xField="x" yField="y5" fill='#37AFE1' name="65 Year old" type="Line" />
                <ChartSeries dataSource={franceBirthData} xField="x" yField="y6" fill='#6A9C89' name="80 Year old" type="Line" />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}"  format='${series.name} : <b>${point.y}</b>' />
            <ChartLegend visible={true} maxLabelWidth={130} textStyle={{ fontSize: '20px', fontWeight: 'bold', color: '#1993c4ff' }} />
        </Chart>
    )
}