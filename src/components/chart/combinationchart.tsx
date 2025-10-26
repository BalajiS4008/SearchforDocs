import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMajorGridLines, ChartMinorGridLines, ChartTitle, ChartAxisTitle, ChartAxisLabel, ChartLegend, ChartMarker } from '@syncfusion/react-charts'
import { privateConsumptionData, governmentConsumptionData, investmentData, netForeignTradeData, gdpGrowthData } from './growth-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Annual Growth GDP in France' />            
            <ChartPrimaryXAxis valueType={'Category'} interval={Browser.isDevice ? 3 : 1} lineStyle={{ width: 0 }}>
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis minimum={-3} maximum={3} interval={1} lineStyle={{ width: 0 }}>
                <ChartMajorGridLines width={1} />                
                <ChartMinorGridLines width={1} />
                <ChartAxisLabel format='{value}B' />
                <ChartAxisTitle text='Growth (in Billion)' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={privateConsumptionData} xField="x" yField="y" type="StackingColumn" name="Private Consumption" fill='#EF476F' />
                <ChartSeries dataSource={governmentConsumptionData} xField="x" yField="y" type="StackingColumn" name="Government Consumption" fill='#FFD166' />
                <ChartSeries dataSource={investmentData} xField="x" yField="y" type="StackingColumn" name="Investment" fill='#06D6A0' />
                <ChartSeries dataSource={netForeignTradeData} xField="x" yField="y" type="StackingColumn" name="Net Foreign Trade" fill='#355F83' />
                <ChartSeries dataSource={gdpGrowthData} xField="x" yField="y" type="Line" name="GDP" width={2} fill='#7B9E29'>
                    <ChartMarker visible={true} width={7} height={7} shape='Circle' />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} />
            <ChartLegend visible={true} />
        </Chart>
    )
}