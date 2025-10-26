import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartAxes, ChartAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartColumns, ChartColumn, ChartMarker } from "@syncfusion/react-charts"
import { multipleColumnData } from './data-source'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartPrimaryXAxis valueType={"Category"} >
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0} maximum={90} interval={20}>
                <ChartAxisLabel format="{value}°F" />
            </ChartPrimaryYAxis>
            <ChartColumns>
                <ChartColumn width='50%' />
                <ChartColumn width='50%' />
            </ChartColumns>
            <ChartAxes>
                <ChartAxis columnIndex={1} name='xAxis1' opposedPosition={true} valueType='Category' lineStyle={{ width: 0 }} />
            </ChartAxes>
            <ChartSeriesCollection>
                <ChartSeries dataSource={multipleColumnData} xField="x" yField="y" name='Germany' type='Column' width={2} />
                <ChartSeries dataSource={multipleColumnData} xField='x' yField='y1' name='Japan' type='Line' xAxisName='xAxis1' width={2}>
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    )
}