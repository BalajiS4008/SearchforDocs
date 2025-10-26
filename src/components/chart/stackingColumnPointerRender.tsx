import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisTitle, ChartAxisLabel, ChartTitle, ChartLegend, ChartMarker } from '@syncfusion/react-charts'
import { stackingColumnData } from './stacking-column-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Global Cotton Production by Country (2019–2024)' />            
            <ChartPrimaryXAxis valueType={'Category'} interval={1}>
                <ChartAxisLabel intersectAction='Rotate45' />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={20}>                
                <ChartAxisLabel format='{value}M' />
                <ChartAxisTitle text='Production (60KG Bags)' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={stackingColumnData} xField='x' yField='y1' name='India' fill='#FFA24C' columnWidth={0.4} type='StackingColumn' legendShape='Rectangle'>
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
                <ChartSeries dataSource={stackingColumnData} xField='x' yField='y2' name='China' fill='#FF77B7' columnWidth={0.4} type='StackingColumn' legendShape='Rectangle'>
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
                <ChartSeries dataSource={stackingColumnData} xField='x' yField='y3' name='United States' fill='#219C90' columnWidth={0.4} type='StackingColumn' legendShape='Rectangle' cornerRadius={{ topLeft: 5, topRight: 5 }}>
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartLegend visible={true} />
            <ChartTooltip enable={true} headerText='${point.x}'  format='${series.name} : <b>${point.y}</b>' />
        </Chart>
    )
}