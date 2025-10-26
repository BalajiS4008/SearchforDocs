import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartDataLabel, ChartAxisLabel, ChartTitle, ChartMajorGridLines } from '@syncfusion/react-charts'
import { stackingBarData } from './annual-energy-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Annual Renewable Energy Generation in China (2020–2023) by Source' />            
            <ChartPrimaryXAxis valueType={'Category'}/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={1000}>
                <ChartAxisLabel fontSize='0px' />
                <ChartMajorGridLines width={0} />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y1' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} fill="#689B8A" columnWidth={0.6} name='Wind' type='StackingBar' legendShape='Rectangle' tooltipField='total'>
                    <ChartMarker>
                        <ChartDataLabel visible={true}  />
                    </ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y2' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} fill="#B2CD9C" columnWidth={0.6} name='Solar' type='StackingBar' legendShape='Rectangle' tooltipField='total'>
                    <ChartMarker>
                        <ChartDataLabel visible={true}  />
                    </ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y3' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} fill="#8D8D87" columnWidth={0.6} name='Hydro' type='StackingBar' legendShape='Rectangle' cornerRadius={{ bottomRight: 4, topRight: 4 }} tooltipField='total'>
                    <ChartMarker>
                        <ChartDataLabel visible={true}  />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='Renewable Energy Generation'  format='${series.name} : <b>${point.y}TWh</b><br/>Total : <b>${point.tooltip}TWh<b/>' />
        </Chart>
    )
}