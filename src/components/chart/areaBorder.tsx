import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTitle, ChartTooltip,
} from '@syncfusion/react-charts'
import { energyConsumptionData } from './energy-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Global Primary Energy Consumption by Source' />
            <ChartTooltip enable={true} headerText='${series.name}'  format='${point.x} : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType="Category" interval={6}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} maximum={2700} interval={800}>
                <ChartAxisLabel format='{value}TWh' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={energyConsumptionData} xField="x" yField="y1" type="Area" opacity={0.5} fill="#3CFFD2" border={{ width: 2, color: chartTheme.indexOf('Dark') > -1 ? '#3CFFD2' : '#008264', dashArray: "5,5" }} name="Other Renewable" />
                <ChartSeries dataSource={energyConsumptionData} xField="x" yField="y2" type="Area" opacity={0.5} fill="#DCFF89" border={{ width: 2, color: chartTheme.indexOf('Dark') > -1 ? '#DCFF89' : '#5A8100', dashArray: "5,5" }} name="Modern biofuels" />
            </ChartSeriesCollection>
        </Chart>
    );
}