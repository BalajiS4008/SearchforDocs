import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisTitle, ChartAxisLabel, ChartTitle, ChartMarker } from '@syncfusion/react-charts'
import { stackingBarNegativeData } from './stacking-negative-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Belize Demographic Breakdown by Age and Gender (2024)' />            
            <ChartPrimaryXAxis valueType={'Category'} interval={3}>
                <ChartAxisTitle text="Population by Age Range" />
                <ChartAxisLabel intersectAction='Rotate45' />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={3} rangePadding='Round' >                
                <ChartAxisLabel format='{value}%' edgeLabelPlacement='Shift' />
                <ChartAxisTitle text='Share of Total Population (%)' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={stackingBarNegativeData} xField='age' yField='femalePercentValue' name='Female' type='StackingBar' legendShape='Rectangle' cornerRadius={{ topRight: 6, bottomRight: 6 }} fill="#F87A53" border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}}>
                <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
                <ChartSeries dataSource={stackingBarNegativeData} xField='age' yField='malePercentValue' name='Male' type='StackingBar' legendShape='Rectangle' cornerRadius={{ topRight: 6, bottomRight: 6 }} fill="#87A2FF" border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}}>
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='<b>${point.x}</b>' format={'${series.name} Population: <b>${point.y}</b>'} />
        </Chart>
    )
}