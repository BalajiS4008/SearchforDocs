import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel } from '@syncfusion/react-charts'
import { toggleData } from './legend-toggle-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Apple Quartely Revenue by Product Category" />
            <ChartPrimaryXAxis valueType={'Category'}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                <ChartAxisLabel format='${value}B' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={toggleData} xField="x" yField="y1" fill='#A2C579' name="Jun 29, 2024" type="Column" columnWidth={0.6} cornerRadius={{ topRight: 15, topLeft: 15 }} columnSpacing={0.1} legendShape="Rectangle" />
                <ChartSeries dataSource={toggleData} xField="x" yField="y2" fill='#8E7AB5' name="Jun 29, 2025" type="Column" columnWidth={0.6} cornerRadius={{ topRight: 15, topLeft: 15 }} columnSpacing={0.1} legendShape="Rectangle" />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}"  format='${series.name} : <b>${point.y}</b>' />
            <ChartLegend visible={true} toggleVisibility={true} />
        </Chart>
    )
}