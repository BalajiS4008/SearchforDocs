import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisTitle, ChartAxisLabel } from '@syncfusion/react-charts'
import { barAppleData, barXiaomiData, barOppoData } from './smart-phone-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Global Smartphone Sales Trends by Brand (2021-2023)' />            
            <ChartPrimaryXAxis valueType={'Category'}/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} maximum={300}>                
                <ChartAxisLabel format='{value}M' />
                <ChartAxisTitle text='Units Sold (in Millions)' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={barAppleData} xField="year" yField="count" type="Bar" fill='#8AA624' columnSpacing={0.3} name="Apple" cornerRadius={{ bottomRight: 8, topRight: 8 }} legendShape='Rectangle' />
                <ChartSeries dataSource={barXiaomiData} xField="year" yField="count" type="Bar" fill='#D25D5D' columnSpacing={0.3} name="Xiaomi" cornerRadius={{ bottomRight: 8, topRight: 8 }} legendShape='Rectangle' />
                <ChartSeries dataSource={barOppoData} xField="year" yField="count" type="Bar" fill='#239BA7' columnSpacing={0.3} name="Oppo" cornerRadius={{ bottomRight: 8, topRight: 8 }} legendShape='Rectangle' />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='<b>${series.name}</b>'  format='${point.x} : <b>${point.y}</b>' />
        </Chart>
    )
}