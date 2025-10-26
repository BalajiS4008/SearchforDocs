import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartZoomSettings, ChartTooltip, ChartAxisTitle, ChartTitle, ChartAxisLabel } from "@syncfusion/react-charts";
import { zoomData } from './zoom-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    const series1: object[] = [];
    let point1: object;
    for (let i: number = 1; i < zoomData.length; i++) {
        point1 = { x: new Date(1941, i + 2, i), y: zoomData[i as number] / 1000 - 0.5 };
        series1.push(point1);
    }
    const data1 = series1;
    return (
        <div>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1E88E5" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#1E88E5" stopOpacity="0.4" />
                    </linearGradient>
                </defs>
            </svg>
            <Chart theme={chartTheme}>
                <ChartTitle text='Global Warming: Monthly Temperature Anomalies' />
                <ChartZoomSettings selectionZoom={true} toolbar={{visible: true}} />                
                <ChartTooltip enable={true} headerText="${point.x}"  format="Temperature: <b>${point.y}</b>" />
                <ChartPrimaryXAxis valueType="DateTime"/>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={0.3}>                    
                    <ChartAxisLabel format="{value}°C" />
                    <ChartAxisTitle text="Temperature Anomaly (°C)"/>
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={data1} xField="x" yField="y" type="Area" fill="#2B95C9" opacity={0.8}/>
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}