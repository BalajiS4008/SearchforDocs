
import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel } from '@syncfusion/react-charts'
import { legendOverviewData } from './legend-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} >
            <ChartTitle text="GDP Growth (2015 - 2024)" />
            <ChartPrimaryXAxis valueType={'Category'}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={5}>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={legendOverviewData} xField="x" yField="y1" fill='#689B8A' columnSpacing={0.1} name='USA' type="Column" cornerRadius={{ topRight: 2, topLeft: 2 }} legendShape="Rectangle" />
                <ChartSeries dataSource={legendOverviewData} xField="x" yField="y2" fill='#8E7AB5' columnSpacing={0.1} name="India" type="Column" cornerRadius={{ topRight: 2, topLeft: 2 }} legendShape="Rectangle" />
                <ChartSeries dataSource={legendOverviewData} xField="x" yField="y3" fill='#FF6868' name='Japan' columnSpacing={0.1} type="Column" cornerRadius={{ topRight: 2, topLeft: 2 }} legendShape="Rectangle" />
                <ChartSeries dataSource={legendOverviewData} xField="x" yField="y4" fill='#6897D4' columnSpacing={0.1} name="Russia" type="Column" cornerRadius={{ topRight: 2, topLeft: 2 }} legendShape="Rectangle" />
                <ChartSeries dataSource={legendOverviewData} xField="x" yField="y5" fill='#D2A953' name='France' columnSpacing={0.1} type="Column" cornerRadius={{ topRight: 2, topLeft: 2 }} legendShape="Rectangle" />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="<b>${point.x}</b>"  format='${series.name} : <b>${point.y}%</b>' />
            <ChartLegend visible={true} />
        </Chart>
    )
}