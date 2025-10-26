import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartZoomSettings, ChartAxisTitle, ChartTitle, ChartAxisLabel
} from "@syncfusion/react-charts";
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
        <Chart theme={chartTheme}>
            <ChartTitle text='Global Warming: Monthly Temperature Anomalies'/>
            <ChartZoomSettings mouseWheelZoom={true} mode='X' />
            <ChartPrimaryXAxis valueType="DateTime"/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={0.3}>                
                <ChartAxisLabel format="{value}°C" />
                <ChartAxisTitle text="Temperature Anomaly (°C)"/>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={data1} xField="x" yField="y" type="Line" fill="#2B95C9"/>
            </ChartSeriesCollection>
        </Chart>
    );
}