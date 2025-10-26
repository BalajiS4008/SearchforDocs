import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartMajorGridLines, ChartMajorTickLines, ChartAxisLabel, ChartTooltip, ChartTitle
} from '@syncfusion/react-charts'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';

export default function App() {
    const { chartTheme } = useChartTheme();
    const ChartPoints = [
        { x: "India", y: 1422000000 },
        { x: "China", y: 1416000000 },
        { x: "USA", y: 339000000 },
        { x: "Indonesia", y: 277000000 },
        { x: "Pakistan", y: 240000000 },
        { x: "Nigeria", y: 223000000 },
        { x: "Brazil", y: 215000000 },
        { x: "Bangladesh", y: 173000000 }
    ];

    return (
            <Chart theme={chartTheme}>
                <ChartTitle text='Population by Country 2024'/>
                <ChartTooltip enable={true} headerText="${point.x}"  format='Population : <b>${point.y}</b>'/>
                <ChartPrimaryXAxis valueType={'Category'}>
                    <ChartMajorGridLines width={0}/>
                    <ChartMajorTickLines width={0}/>
                    <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0}/>
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={300000000}>
                    <ChartAxisLabel format='{value}'/>
                    <ChartMajorTickLines width={0}/>
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={ChartPoints} xField="x" yField="y" type="Column" fill='#43CDFF' columnWidth={0.4} cornerRadius={{ topLeft: 5, topRight: 5}}/>
                </ChartSeriesCollection>
            </Chart>
    );
}
