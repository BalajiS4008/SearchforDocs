import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel, ChartAxisTitle } from '@syncfusion/react-charts'
import { paletteData } from './phone-palette'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} palettes={["#87CEEB", "#F6B53F", "#6FAAB0", "#C4C24A"]}>
            <ChartTitle text='Global Smartphone Sales Trends by Brand (2021-2023)' />
            <ChartPrimaryXAxis valueType={'Category'}>
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={60}>
                <ChartAxisLabel format='{value}M' />
                <ChartAxisTitle text='Units Sold (in Millions)' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={paletteData} xField="year" yField="apple" name='Apple' type="Column" columnSpacing={0.2} legendShape="Rectangle" cornerRadius={{ topLeft: 5, topRight: 5 }} />
                <ChartSeries dataSource={paletteData} xField="year" yField="xiaomi" name="Xiaomi" type="Column" columnSpacing={0.2} legendShape="Rectangle" cornerRadius={{ topLeft: 5, topRight: 5 }} />
                <ChartSeries dataSource={paletteData} xField="year" yField="oppo" name="Oppo" type="Column" columnSpacing={0.2} legendShape="Rectangle" cornerRadius={{ topLeft: 5, topRight: 5 }} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${series.name}' format='${point.x} : <b>${point.y}</b>' />
        </Chart>
    )
}