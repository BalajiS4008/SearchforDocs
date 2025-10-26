import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisLabel, ChartTitle, ChartMarker, ChartDataLabel, ChartMajorGridLines } from '@syncfusion/react-charts'
import { stackingColumnData } from './stacking-column-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Global Cotton Production by Country (2019–2024)' />            
            <ChartPrimaryXAxis valueType={'Category'} interval={1}>
                <ChartAxisLabel intersectAction='Rotate45' />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>       
                <ChartAxisLabel format='{value}M' fontSize='0px' />
                <ChartMajorGridLines width={0} />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={stackingColumnData} xField='x' yField='y1' name='India' fill='#5C6BC0' columnWidth={0.4} type='StackingColumn' legendShape='Rectangle' tooltipField='total' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} >
                    <ChartMarker visible={false} shape='Rectangle'>
                        <ChartDataLabel visible={true} enableRotation={Browser.isDevice} rotationAngle={Browser.isDevice ? 90 : 0} />
                    </ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={stackingColumnData} xField='x' yField='y2' name='China' fill='#00796B' columnWidth={0.4} type='StackingColumn' legendShape='Rectangle' tooltipField='total' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} >
                    <ChartMarker visible={false} shape='Rectangle'>
                        <ChartDataLabel visible={true} enableRotation={Browser.isDevice} rotationAngle={Browser.isDevice ? 90 : 0} />
                    </ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={stackingColumnData} xField='x' yField='y3' name='United States' fill='#B71C1C' columnWidth={0.4} type='StackingColumn' legendShape='Rectangle' cornerRadius={{ topLeft: 5, topRight: 5 }} tooltipField='total' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} >
                    <ChartMarker visible={false} shape='Rectangle'>
                        <ChartDataLabel visible={true} enableRotation={Browser.isDevice} rotationAngle={Browser.isDevice ? 90 : 0} />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${point.x}'  format='${series.name} : <b>${point.y}</b><br/> Total: <b>${point.tooltip}M</b>' />
        </Chart>
    )
}