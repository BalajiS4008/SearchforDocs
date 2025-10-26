import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel } from '@syncfusion/react-charts'
import { solarConsumeData, coalConsumeData, gasConsumeData, windConsumeData, nuclearConsumeData } from './data-source'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Year-to-Year Change in Primary Energy Consumption by Source, Asia (2022 - 2024)" />
            <ChartPrimaryXAxis valueType={'Category'}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={300}>
                <ChartAxisLabel format='{value}TWh' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={solarConsumeData} xField="x" yField="y" name="Solar" fill='#FFB823' type="Column" columnWidth={0.6} cornerRadius={{ topRight: 15, topLeft: 15 }} columnSpacing={0.1} legendShape="Rectangle" />
                <ChartSeries dataSource={coalConsumeData} xField="x" yField="y" name="Coal" fill='#799EFF' type="Column" columnWidth={0.6} cornerRadius={{ topRight: 15, topLeft: 15 }} columnSpacing={0.1} legendShape="Rectangle" />
                <ChartSeries dataSource={gasConsumeData} xField="x" yField="y" name="Gas" fill='#B4E50D' type="Column" columnWidth={0.6} cornerRadius={{ topRight: 15, topLeft: 15 }} columnSpacing={0.1} legendShape="Rectangle" />
                <ChartSeries dataSource={windConsumeData} xField="x" yField="y" name="Wind" fill='#FF9874' type="Column" columnWidth={0.6} cornerRadius={{ topRight: 15, topLeft: 15 }} columnSpacing={0.1} legendShape="Rectangle" />
                <ChartSeries dataSource={nuclearConsumeData} xField="x" yField="y" name="Nuclar" fill='#D2649A' type="Column" columnWidth={0.6} cornerRadius={{ topRight: 15, topLeft: 15 }} columnSpacing={0.1} legendShape="Rectangle" />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}"  format='${series.name} : <b>${point.y}</b>' />
            <ChartLegend visible={true} />
        </Chart>
    )
}