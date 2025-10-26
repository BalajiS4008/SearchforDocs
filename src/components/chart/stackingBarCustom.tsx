import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisLabel, ChartTitle, ChartLegend } from '@syncfusion/react-charts'
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
                <ChartAxisLabel format='{value}TWh' rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y1' fill="#507687" opacity={0.8} columnWidth={0.4} name='Wind' type='StackingBar' legendShape='Rectangle' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} tooltipField='total'/>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y2' fill="#8967B3" opacity={0.8} columnWidth={0.4} name='Solar' type='StackingBar' legendShape='Rectangle' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} tooltipField='total'/>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y3' fill="#FF885B" opacity={0.8} columnWidth={0.4} name='Hydro' type='StackingBar' legendShape='Rectangle' cornerRadius={{ bottomRight: 4, topRight: 4 }} border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} tooltipField='total'/>
            </ChartSeriesCollection>
            <ChartLegend visible={false} />
            <ChartTooltip enable={true} headerText='Renewable Energy Generation' format='${series.name} : <b>${point.y}TWh</b><br/> Total: <b>${point.tooltip}TWh</b>' />
        </Chart>
    )
}