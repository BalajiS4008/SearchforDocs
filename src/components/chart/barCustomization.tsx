import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisTitle, ChartAxisLabel } from '@syncfusion/react-charts'
import { paletteData } from './phone-palette'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <>
            {/* Gradient Definition */}
            <svg style={{ height: 0 }}>
                <defs>
                    <linearGradient id="gradient-fill" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8C3BC8" />
                        <stop offset="100%" stopColor="#CE59FF" />
                    </linearGradient>
                </defs>
            </svg>
            <svg style={{ height: 0 }}>
                <defs>
                    <linearGradient id="gradient-fill-index" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#45AF20" />
                        <stop offset="100%" stopColor="#80C76D" />
                    </linearGradient>
                </defs>
            </svg>
            <svg style={{ height: 0 }}>
                <defs>
                    <linearGradient id="gradient-fill-track" x1="1" y1="0" x2="0" y2="0">
                        <stop offset="0%" stopColor="#8F94FB" />
                        <stop offset="100%" stopColor="#4E54C8" />
                    </linearGradient>
                </defs>
            </svg>
            <Chart theme={chartTheme}>
                <ChartTitle text='Global Smartphone Sales Trends by Brand (2021-2023)' />
                <ChartPrimaryXAxis valueType={'Category'} />
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} maximum={300}>
                    <ChartAxisLabel format='{value}M' />
                    <ChartAxisTitle text='Units Sold (in Millions)' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={paletteData} xField="year" yField="apple" type="Bar" fill="url(#gradient-fill)" opacity={0.8} cornerRadius={{ topRight: 10, bottomRight: 10 }} columnSpacing={0.3} name="Apple" legendShape='Rectangle' />
                    <ChartSeries dataSource={paletteData} xField="year" yField="xiaomi" type="Bar" fill="url(#gradient-fill-index)" opacity={0.8} cornerRadius={{ topRight: 10, bottomRight: 10 }} columnSpacing={0.3} name="Xiaomi" legendShape='Rectangle' />
                    <ChartSeries dataSource={paletteData} xField="year" yField="oppo" type="Bar" fill="url(#gradient-fill-track)" opacity={0.8} cornerRadius={{ topRight: 10, bottomRight: 10 }} columnSpacing={0.3} name="Oppo" legendShape='Rectangle' />
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText='${series.name}'  format='${point.x} : <b>${point.y}</b>' />
            </Chart>
        </>
    )
}