import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisTitle, ChartAxisLabel, ChartMarker, ChartDataLabel } from '@syncfusion/react-charts'
import { paletteData } from './phone-palette'
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Global Smartphone Sales Trends by Brand (2021-2023)' />            
            <ChartPrimaryXAxis valueType={'Category'} />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} maximum={300}>                
                <ChartAxisLabel format='{value}M' />
                <ChartAxisTitle text='Units Sold (in Millions)' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={paletteData} xField="year" yField="apple" type="Bar" fill='#8AA624' columnSpacing={0.3} name="Apple" cornerRadius={{ bottomRight: 8, topRight: 8 }} legendShape='Rectangle'>
                    <ChartMarker>
                        <ChartDataLabel visible={true} intersectMode="None"/>
                    </ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={paletteData} xField="year" yField="xiaomi" type="Bar" fill='#D25D5D' columnSpacing={0.3} name="Xiaomi" cornerRadius={{ bottomRight: 8, topRight: 8 }} legendShape='Rectangle' >
                    <ChartMarker>
                        <ChartDataLabel visible={true} intersectMode="None" />
                    </ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={paletteData} xField="year" yField="oppo" type="Bar" fill='#239BA7' columnSpacing={0.3} name="Oppo" cornerRadius={{ bottomRight: 8, topRight: 8 }} legendShape='Rectangle' >
                    <ChartMarker>
                        <ChartDataLabel visible={true} intersectMode="None"/>
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${series.name}'  format='${point.x} : <b>${point.y}</b>' />
        </Chart>
    )
}