import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartTooltip, ChartSeries, ChartSeriesCollection, ChartMajorTickLines, ChartMinorTickLines, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts"
import { smartAxisLabelData } from './label-position-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Population by Country 2024' />            
            <ChartTooltip enable={true} headerText="${point.x}"  format='Population : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType="Category" minorTicksPerInterval={2}>                
                <ChartMajorTickLines width={3} height={20} />
                <ChartMinorTickLines width={2} height={10} />
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis minorTicksPerInterval={2} interval={0.3}>
                <ChartMajorTickLines width={3} height={20} />
                <ChartMinorTickLines width={2} height={10} />
                <ChartAxisLabel format='{value}B' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={smartAxisLabelData} xField="x" yField="y" type="Column" fill="#88B04B" columnWidth={0.4} cornerRadius={{ topLeft: 5, topRight: 5 }} />
            </ChartSeriesCollection>
        </Chart>
    );
}