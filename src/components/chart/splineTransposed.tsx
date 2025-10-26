import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartAxisLabel, ChartTitle } from '@syncfusion/react-charts'
import { lineTransposdData } from './climate-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} transposed={true}>
            <ChartTitle text='Climate Graph in 2024' />            
            <ChartPrimaryXAxis valueType={'Category'} lineStyle={{ width: 0 }} />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                <ChartAxisLabel format='{value}°C' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={lineTransposdData} xField="x" yField="y1" width={2} type="Spline" name='London' fill={"#66CCFF"}>
                    <ChartMarker visible={true} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={lineTransposdData} xField="x" yField="y2" width={2} type="Spline" name="France" fill={"#99CC00"}>
                    <ChartMarker visible={true} shape='Circle' />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${series.name}' />
        </Chart>
    )
}