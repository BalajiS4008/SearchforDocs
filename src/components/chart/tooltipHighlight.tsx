import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartLegend, ChartTooltip, ChartMarker } from "@syncfusion/react-charts";

import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    const data = [
        { x: new Date(1975, 0, 1), y: 16, y1: 10, y2: 4.5 },
        { x: new Date(1980, 0, 1), y: 12.5, y1: 7.5, y2: 5 },
        { x: new Date(1985, 0, 1), y: 19, y1: 11, y2: 6.5 },
        { x: new Date(1990, 0, 1), y: 14.4, y1: 7, y2: 4.4 },
        { x: new Date(1995, 0, 1), y: 11.5, y1: 8, y2: 5 },
        { x: new Date(2000, 0, 1), y: 14, y1: 6, y2: 1.5 },
        { x: new Date(2005, 0, 1), y: 10, y1: 3.5, y2: 2.5 },
        { x: new Date(2010, 0, 1), y: 16, y1: 7, y2: 3.7 }
    ];
    return (
        <Chart theme={chartTheme}>
            <ChartLegend visible={false} />
            <ChartTooltip enable={true} />
            <ChartPrimaryXAxis valueType="DateTime" >
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}/>
            <ChartSeriesCollection>
                <ChartSeries dataSource={data} xField="x" yField="y" width={2} name="China" type="Line">
                    <ChartMarker visible={true} />
                </ChartSeries>
                <ChartSeries dataSource={data} xField="x" yField="y1" width={2} name="Australia" type="Line">
                    <ChartMarker visible={true} />
                </ChartSeries>
                <ChartSeries dataSource={data} xField="x" yField="y2" width={2} name="Japan" type="Line">
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}
