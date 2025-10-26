import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartLegend, ChartTooltip, ChartMarker } from "@syncfusion/react-charts";

import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    const data1 = [
    { x: 'Sun', y: 15 }, 
    { x: 'Mon', y: 22 },
    { x: 'Tue', y: 32 },
    { x: 'Wed', y: 31 },
    { x: 'Thu', y: 29 }, 
    { x: 'Fri', y: 24 },
    { x: 'Sat', y: 18 }
];

const data2 = [
    { x: 'Sun', y: 10 }, 
    { x: 'Mon', y: 18 },
    { x: 'Tue', y: 28 },
    { x: 'Wed', y: 28 },
    { x: 'Thu', y: 26 }, 
    { x: 'Fri', y: 20 },
    { x: 'Sat', y: 15 }
];

const data3 = [
    { x: 'Sun', y: 2 }, 
    { x: 'Mon', y: 12 },
    { x: 'Tue', y: 22 },
    { x: 'Wed', y: 23 },
    { x: 'Thu', y: 19 }, 
    { x: 'Fri', y: 13 },
    { x: 'Sat', y: 8 }
];
    return (
        <Chart theme={chartTheme}>
            <ChartLegend visible={false} />
            <ChartTooltip enable={true} headerText="Unemployment"   format= '${point.x} : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType="Category" >
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}/>
            <ChartSeriesCollection>
                <ChartSeries dataSource={data1} xField="x" yField="y" width={2} name="Max Temp" type="Line">
                    <ChartMarker visible={true} />
                </ChartSeries>
                <ChartSeries dataSource={data2} xField="x" yField="y" width={2} name="Avg Temp" type="Line">
                    <ChartMarker visible={true} />
                </ChartSeries>
                <ChartSeries dataSource={data3} xField="x" yField="y" width={2} name="Min Temp" type="Line">
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}
