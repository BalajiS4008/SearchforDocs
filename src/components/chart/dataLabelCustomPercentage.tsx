import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries,
    ChartMarker,
    ChartDataLabel
} from "@syncfusion/react-charts";
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    const data1 = [
        { x: 'USA', y: 46 },
        { x: 'GBR', y: 27 },
        { x: 'CHN', y: 26 }
    ];
    const data2 = [
        { x: 'USA', y: 37 },
        { x: 'GBR', y: 23 },
        { x: 'CHN', y: 18 }
    ];
    const data3 = [
        { x: 'USA', y: 38 },
        { x: 'GBR', y: 17 },
        { x: 'CHN', y: 26 }
    ];
    return (
        <Chart id="label-percentage" theme={chartTheme}>
            <ChartPrimaryXAxis valueType="Category" />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} />
            <ChartSeriesCollection>
                <ChartSeries dataSource={data1} xField="x" yField="y" type="Column">
                    <ChartMarker>
                        <ChartDataLabel visible={true} />
                    </ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={data2} xField="x" yField="y" type="Column">
                    <ChartMarker>
                        <ChartDataLabel visible={true} />
                    </ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={data3} xField="x" yField="y" type="Column">
                    <ChartMarker>
                        <ChartDataLabel visible={true} />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}
