import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartZoomSettings } from "@syncfusion/react-charts";
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    const generateSeries = () => {
        const series: { x: Date; y: number }[] = [];
        for (let idx = 0; idx < 500; idx++) {
            series.push({
                y: Math.floor(Math.random() * 100) + 1,
                x: new Date(2000, 0, idx)
            });
        }
        return series;
    }
    const randomSeriesData = generateSeries();
    return (
        <Chart theme={chartTheme}>
            <ChartZoomSettings selectionZoom={true} pan={true} mode='X' />            
            <ChartTooltip enable={false} />
            <ChartPrimaryXAxis valueType="DateTime" intervalType='Months' zoomFactor={0.2} zoomPosition={0.5}/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={20}/>
            <ChartSeriesCollection>
                <ChartSeries dataSource={randomSeriesData} xField="x" yField="y" type="Column" fill="#2B95C9" />
            </ChartSeriesCollection>
        </Chart>
    );
}