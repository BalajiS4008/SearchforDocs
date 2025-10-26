import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTitle, ChartTooltip, ChartMarker, ChartDataLabel
} from '@syncfusion/react-charts'
import { useChartTheme } from './theme';
import { cornData } from './export-data';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Annual Corn Exports 2015 - 2024' />
            <ChartTooltip enable={true} headerText='Export of Corn'  format='${point.x} : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType="Category" interval={3}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} maximum={24} interval={8}>
                <ChartAxisLabel format='{value}B' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={cornData} xField="x" yField="y" type="Area" opacity={0.5} fill="#3CFFD2" border={{ width: 2, color: chartTheme.indexOf('Dark') > -1 ? "#3CFFD2" : '#008264' }}>
                    <ChartMarker>
                        <ChartDataLabel visible={true} position='Top' />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}