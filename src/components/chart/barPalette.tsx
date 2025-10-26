import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel, ChartAxisTitle } from '@syncfusion/react-charts'
import { pointColorData } from './trading-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} palettes={["#87CEEB", "#F6B53F", "#6FAAB0", "#C4C24A"]}>
            <ChartTitle text='U.S Trade with India in 2024' />
            <ChartPrimaryXAxis valueType={'Category'} />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={Browser.isDevice ? 0.4 : 0.3}>
                <ChartAxisLabel format='{value}B' rotationAngle={Browser.isDevice ? -45 : 0}/>
                <ChartAxisTitle text='Billion USD' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={pointColorData} xField="x" yField="y" type="Bar" colorField='barColor' columnSpacing={0.2} cornerRadius={{ bottomRight: 8, topRight: 8 }} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='Export to India' format='${point.x} : <b>${point.y}</b>' />
        </Chart>
    )
}