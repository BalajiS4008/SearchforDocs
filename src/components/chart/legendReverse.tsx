import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisTitle } from '@syncfusion/react-charts'
import { EnergyData } from './legend-energy-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Change in Energy Sources" />
            <ChartPrimaryXAxis valueType={'Category'} />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                <ChartAxisTitle text='Measure in Tons' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={EnergyData} xField="quarter" yField="coal" fill='#B4E50D' name="Coal" type="Column" columnWidth={0.6} columnSpacing={0.1} cornerRadius={{ topLeft: 10, topRight: 10 }} legendShape="Rectangle" />
                <ChartSeries dataSource={EnergyData} xField="quarter" yField="petroleum" fill='#FF90BB' name="Petroleum" type="Column" columnWidth={0.6} columnSpacing={0.1} cornerRadius={{ topLeft: 10, topRight: 10 }} legendShape="Rectangle" />
                <ChartSeries dataSource={EnergyData} xField="quarter" yField="naturalGas" fill='#60B5FF' name="NaturalGas" type="Column" columnWidth={0.6} columnSpacing={0.1} cornerRadius={{ topLeft: 10, topRight: 10 }} legendShape="Rectangle" />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}"  format='${series.name} : <b>${point.y}</b>' />
            <ChartLegend visible={true} inversed={true} />
        </Chart>
    )
}