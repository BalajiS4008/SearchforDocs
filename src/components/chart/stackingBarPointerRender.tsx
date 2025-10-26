import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisLabel, ChartTitle, ChartMarker } from '@syncfusion/react-charts'
import { stackingBarData } from './annual-energy-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Annual Renewable Energy Generation in China (2020–2023) by Source' />            
            <ChartPrimaryXAxis valueType={'Category'}/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={1000}>
                <ChartAxisLabel format='{value}TWh' rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y1' columnWidth={0.4} name='Wind' type='StackingBar' fill="#689B8A" legendShape='Rectangle' >
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y2' columnWidth={0.4} name='Solar' type='StackingBar' fill="#B2CD9C" legendShape='Rectangle' >
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y3' columnWidth={0.4} name='Hydro' type='StackingBar' fill="#8D8D87" legendShape='Rectangle' cornerRadius={{ bottomRight: 4, topRight: 4 }} >
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='Renewable Energy Generation'  format='${series.name} : <b>${point.y}</b>' />
        </Chart>
    )
}