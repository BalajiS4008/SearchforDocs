import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel } from '@syncfusion/react-charts'
import { legendData } from './olympic-medal-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Paris 2024 Olympics: Medal Count by Country" />
            <ChartPrimaryXAxis valueType={'Category'}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={10}/>
            <ChartSeriesCollection>
                <ChartSeries dataSource={legendData} xField="x" yField="gold" fill='#83A2FF' name="Gold" type="Column" columnWidth={0.6} cornerRadius={{ topRight: 15, topLeft: 15 }} columnSpacing={0.1} legendShape="Rectangle" />
                <ChartSeries dataSource={legendData} xField="x" yField="sliver" fill='#FFB823' name="Sliver" type="Column" columnWidth={0.6} cornerRadius={{ topRight: 15, topLeft: 15 }} columnSpacing={0.1} legendShape="Rectangle" />
                <ChartSeries dataSource={legendData} xField="x" yField="bronze" fill='#B6F500' name="Bronze" type="Column" columnWidth={0.6} cornerRadius={{ topRight: 15, topLeft: 15 }} columnSpacing={0.1} legendShape="Rectangle" />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}"  format='${series.name} : <b>${point.y}</b>' />
            <ChartLegend visible={true} position={"Custom"} location={{ x: Browser.isDevice ? 90 : 300, y: 100 }} />
        </Chart>
    )
}