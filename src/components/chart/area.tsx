import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTitle, ChartTooltip
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
                <ChartSeries dataSource={energyConsumptionData} xField="x" yField="y1" type="Area" opacity={0.5} fill={"#3CFFD2"} name="Other Renewable" border={{ width: 2, color: chartTheme.indexOf('Dark') > -1 ? "#30EDC1" : '#008264' }} />
                <ChartSeries dataSource={energyConsumptionData} xField="x" yField="y2" type="Area" opacity={0.5} fill='#DCFF89' name="Modern biofuels" border={{ width: 2, color: chartTheme.indexOf('Dark') > -1 ? "#DCFF89" : '#5A8100' }} />
            </ChartSeriesCollection>
        </Chart>
    );
}