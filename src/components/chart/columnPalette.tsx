import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel, ChartAxisTitle } from '@syncfusion/react-charts'
import { pointColorData } from './trade-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} height='500'>
            <ChartTitle text='U.S Trade with India in 2024' />
            <ChartPrimaryXAxis valueType={'Category'} interval={1}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -90 : -45} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={0.3} maximum={1.5}>
                <ChartAxisLabel format='{value}B' />
                <ChartAxisTitle text='Billion USD' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={pointColorData} colorField='color' xField="x" yField="y" type="Column" columnSpacing={0.2} cornerRadius={{ topLeft: 8, topRight: 8 }} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='Export to India'  format='${point.x} : <b>${point.y}</b>' />
        </Chart>
    )
}