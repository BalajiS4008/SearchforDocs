import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTooltip, ChartTitle } from '@syncfusion/react-charts'
import { smartAxisLabelData } from './label-position-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Population by Country 2024' />
            <ChartTooltip enable={true} headerText="${point.x}" format='Population : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType={'Category'}>
                <ChartAxisLabel color='red' fontWeight="400" fontSize="12px" rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={0.3}>
                <ChartAxisLabel format='{value}B' fontWeight="400" fontSize="12px" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={smartAxisLabelData} xField="x" yField="y" type="Column" fill='#43CDFF' columnWidth={0.4} cornerRadius={{ topLeft: 5, topRight: 5 }} />
            </ChartSeriesCollection>
        </Chart>
    );
}