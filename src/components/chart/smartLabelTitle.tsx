import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisTitle, ChartAxisLabel } from '@syncfusion/react-charts'
import { smartAxisLabelData } from './label-position-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Population by Country 2024' />            
            <ChartTooltip enable={true} headerText="${point.x}"  format='Population : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType={'Category'}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={0.3}>
                <ChartAxisLabel format='{value}B' />
                <ChartAxisTitle text="Population in Million" fontSize="16px" color="#7142FF" fontFamily="Segoe UI" fontWeight="bold" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={smartAxisLabelData} xField="x" yField="y" width={2} fill='#FF9FC7' type="Column" columnWidth={0.4} cornerRadius={{ topLeft: 5, topRight: 5 }} />
            </ChartSeriesCollection>
        </Chart>
    );
}