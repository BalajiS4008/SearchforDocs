import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMajorGridLines, ChartMinorGridLines, ChartTitle, ChartAxisTitle, ChartAxisLabel, ChartMarker, ChartAxes, ChartAxis } from '@syncfusion/react-charts'
import { electricVehicleData } from './electric-vehicle-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Electric Vechicle Performance' />
            <ChartPrimaryXAxis valueType={'Category'} interval={Browser.isDevice ? 4 : 1} lineStyle={{ width: 0 }}>
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis minimum={90} maximum={102} interval={3} lineStyle={{ width: 0 }}>
                <ChartMajorGridLines width={1} />
                <ChartMinorGridLines width={1} />
                <ChartAxisLabel format='{value}%' color='#1E88E5' />
                <ChartAxisTitle text='Battery Level' color='#1E88E5' />
            </ChartPrimaryYAxis>
            <ChartAxes>
                <ChartAxis minimum={50} maximum={80} interval={8} opposedPosition={true} rowIndex={0} name='yAxis1' lineStyle={{ width: 0 }}>
                    <ChartAxisLabel format='{value}' color='#F25087' />
                    <ChartAxisTitle text='Speed (km/h)' color='#F25087' />
                </ChartAxis>
                <ChartAxis minimum={15} maximum={16} interval={0.3} opposedPosition={true} rowIndex={0} name='yAxis2' lineStyle={{ width: 0 }}>
                    <ChartAxisLabel format='{value}' color='#FB8C00' />
                    <ChartAxisTitle text='Energy Consumption (kWh/100km)' color='#FB8C00' />
                </ChartAxis>
            </ChartAxes>
            <ChartSeriesCollection>
                <ChartSeries dataSource={electricVehicleData} xField="time" yField="batteryLevel" type="Column" name="Battery Level" width={2} columnWidth={0.5} cornerRadius={{ topLeft: 4, topRight: 4 }} legendShape="Rectangle">
                </ChartSeries>
                <ChartSeries dataSource={electricVehicleData} xField="time" yField="speed" type="Line" name="Speed" width={2} yAxisName='yAxis1'>
                    <ChartMarker visible={true} width={7} height={7} />
                </ChartSeries>
                <ChartSeries dataSource={electricVehicleData} xField="time" yField="energyConsumption" type="Line" name="Energy Consumption" width={2} dashArray='2,2' yAxisName='yAxis2'/>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} shared={true} showNearestTooltip={false} />
        </Chart>
    )
}