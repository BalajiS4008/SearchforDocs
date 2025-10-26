import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisTitle, ChartAxisLabel, ChartTitle, ChartMarker } from '@syncfusion/react-charts'
import { stackColumnNegativeData } from './column-negative-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Belize Demographic Breakdown by Age and Gender (2024)' />            
            <ChartPrimaryXAxis valueType={'Category'} interval={3}>
                <ChartAxisTitle text="Population by Age Range" />
                <ChartAxisLabel intersectAction={Browser.isDevice ? 'Rotate90' : 'Rotate45'} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={3} rangePadding='Round' >                
                <ChartAxisLabel format='{value}%' edgeLabelPlacement='Shift' />
                <ChartAxisTitle text='Share of Total Population (%)' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={stackColumnNegativeData} xField='age' yField='femalePercentValue' name='Female' fill='#F06BAA' type='StackingColumn' legendShape='Rectangle' cornerRadius={{ topLeft: 4, topRight: 4 }} border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} >
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
                <ChartSeries dataSource={stackColumnNegativeData} xField='age' yField='malePercentValue' name='Male' fill='#3A8EDB' type='StackingColumn' legendShape='Rectangle' cornerRadius={{ topLeft: 4, topRight: 4 }} border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} >
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='<b>${point.x}</b>' format={'${series.name} Population: <b>${point.y}</b>'} />
        </Chart>
    )
}