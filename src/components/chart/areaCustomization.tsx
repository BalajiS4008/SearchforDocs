import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartAxisTitle, ChartTitle, ChartMarker, ChartTooltip
} from '@syncfusion/react-charts'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';

export default function App() {
    const { chartTheme } = useChartTheme();
    const cassette = [
        { x: new Date(1984, 0, 1), y: 0.08 }, { x: new Date(1985, 0, 1), y: 1.85 }, { x: new Date(1986, 0, 1), y: 2.0 },
        { x: new Date(1987, 0, 1), y: 3.55 }, { x: new Date(1988, 0, 1), y: 5.4 }, { x: new Date(1989, 0, 1), y: 5.24 },
        { x: new Date(1990, 0, 1), y: 6.94 }, { x: new Date(1991, 0, 1), y: 5.85 }, { x: new Date(1992, 0, 1), y: 6.85 }, { x: new Date(1993, 0, 1), y: 7.02 },
        { x: new Date(1994, 0, 1), y: 5.81 }, { x: new Date(1995, 0, 1), y: 5.32 }, { x: new Date(1996, 0, 1), y: 4.03 },
        { x: new Date(1997, 0, 1), y: 2.25 }, { x: new Date(1998, 0, 1), y: 2.01 }, { x: new Date(1999, 0, 1), y: 0.8 },
        { x: new Date(2001, 0, 1), y: 0.4 }
    ];
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='US Music Sales By Cassette' />
            <ChartTooltip enable={true} headerText='${point.x}'  format='Sales : <b>${point.y}B</b>' />
            <ChartPrimaryXAxis valueType="DateTime" minimum={new Date(1984, 1, 1)} maximum={new Date(2001, 1, 1)} >
                <ChartAxisLabel format='y' rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0} maximum={12} interval={3} >
                <ChartAxisTitle text='In Billions (USD)' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={cassette} xField="x" yField="y" type="Area" fill="#69D2E7" opacity={0.5} border={{ width: 3, color: "#962D18", dashArray: "5,5" }}>
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}