import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartAxisLabel, ChartTitle } from '@syncfusion/react-charts'
import { stackingBarData } from './annual-energy-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();    
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Annual Renewable Energy Generation in China (2020–2023) by Source' />            
            <ChartPrimaryXAxis valueType={'Category'}/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={1000}>
                <ChartAxisLabel format='{value}TWh' rotationAngle={ Browser.isDevice ? -45 : 0 } />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y1' fill="#689B8A" columnWidth={0.6} name='Wind' type='StackingBar' legendShape='Rectangle'  border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} tooltipField='total'>
                    <ChartMarker visible={false} shape='Rectangle'/>
                </ChartSeries>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y2' fill="#B2CD9C" columnWidth={0.6} name='Solar' type='StackingBar' legendShape='Rectangle'  border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} tooltipField='total'>
                    <ChartMarker visible={false} shape='Rectangle'/>
                </ChartSeries>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y3' fill="#8D8D87" columnWidth={0.6} name='Hydro' type='StackingBar' legendShape='Rectangle' cornerRadius={{ bottomRight: 4, topRight: 4 }}  border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} tooltipField='total'> 
                    <ChartMarker visible={false} shape='Rectangle'/>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='Renewable Energy Generation' format='${series.name} : <b>${point.y}</b><br/> Total: <b>${point.tooltip}TWh</b>' />
        </Chart>
    )
}