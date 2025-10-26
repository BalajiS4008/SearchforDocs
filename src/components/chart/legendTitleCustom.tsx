import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel, ChartMarker } from '@syncfusion/react-charts'
import { africaTitleData, americaTitleData, asiaTitleData, europeTitleData } from './legend-title-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Understanding Period Life Expectancy: A Measure of Longevity" />
            <ChartPrimaryXAxis valueType={'Category'} interval={3}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={50}>
                <ChartAxisLabel format='{value} Years' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={africaTitleData} xField="x" yField="y" fill='#60B5FF' name="Africa" type="Line">
                    <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={americaTitleData} xField="x" yField="y" fill='#5DB996' name="America" type="Line">
                    <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={asiaTitleData} xField="x" yField="y" fill='#FF748B' name="Asia" type="Line">
                    <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={europeTitleData} xField="x" yField="y" fill='#B3C890' name="Europe" type="Line" >
                    <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}"  format='${series.name} : <b>${point.y}</b>' />
            <ChartLegend visible={true} title="Country" maxTitleWidth={20} titleStyle={{ color:chartTheme.includes('Dark') ? "white" : "#1040cfff", fontSize: "20px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", fontStyle: 'italy', opacity: 0.7 }} />
        </Chart>
    )
}