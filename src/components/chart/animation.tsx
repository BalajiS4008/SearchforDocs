import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisTitle, ChartAxisLabel, ChartLegend
} from '@syncfusion/react-charts'
import { animationData } from './animation-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Almond Yield Comparison Across Countries (2010–2022)'/>
            <ChartPrimaryXAxis valueType={'DateTime'}>
                <ChartAxisLabel format='y' edgeLabelPlacement='Shift' />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis maximum={8} interval={2} lineStyle={{ width: 0 }}>
                <ChartAxisTitle text='Yield (In Tons per Hectare)'/>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={animationData} xField="x" yField="y1" type="Spline" name="United States" width={3} animation={{ enable: true, duration: 1500 }} />
                <ChartSeries dataSource={animationData} xField="x" yField="y2" type="Spline" name="China" width={3} animation={{ enable: true, delay: 1600, duration: 1500 }} />
                <ChartSeries dataSource={animationData} xField="x" yField="y3" type="Spline" name="Afghanistan" width={3} animation={{ enable: true, delay: 3200, duration: 1500 }} />
                <ChartSeries dataSource={animationData} xField="x" yField="y4" type="Spline" name="Yemen" width={3} animation={{ enable: true, delay: 4800, duration: 1500 }} />
                <ChartSeries dataSource={animationData} xField="x" yField="y" type="Spline" name="Australia" width={3} animation={{ enable: true, delay: 6400, duration: 1500 }} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='Almond Yield - ${point.x}'  format='${series.name}: <b>${point.y}</b>' showNearestTooltip={true} />
            <ChartLegend visible={true} />
        </Chart>
    )
}
