import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartAxisLabel, ChartAxisTitle, ChartTitle } from "@syncfusion/react-charts";
import { numericData } from './numeric-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Annual Sales Revenue (in Billions USD)" fontSize={Browser.isDevice ? '16px' : '18px'} />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={7} maximum={8.2} interval={0.2}>
                <ChartAxisLabel format="c" />
                <ChartAxisTitle text="Sales in Dollars" />
            </ChartPrimaryYAxis>
            <ChartPrimaryXAxis valueType="Double" interval={1}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartTooltip enable={true} headerText="${point.x}" format='Sales : <b>${point.y}B</b>' />
            <ChartSeriesCollection>
                <ChartSeries dataSource={numericData} xField="x" yField="y1" type="Column" colorField="color" columnWidth={0.5} cornerRadius={{ topLeft: 5, topRight: 5 }} />
            </ChartSeriesCollection>
        </Chart>

    );
}