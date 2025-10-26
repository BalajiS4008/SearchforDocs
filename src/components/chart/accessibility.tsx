import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTitle, ChartTooltip, ChartMarker, ChartLegend    
} from '@syncfusion/react-charts';
import { energyConsumptionData } from './energy-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} focusOutline={{ color: '#FF0000', width: 3, offset:5}}
            accessibility={{ ariaLabel: 'A line chart displaying global primary energy consumption by source.', role: 'chart' }}>
            <ChartTitle text='Global Primary Energy Consumption by Source' accessibility={{ ariaLabel: 'This chart shows the global primary energy consumption categorized by different sources.', role: 'heading' }} />
            <ChartTooltip enable={true} shared={true} headerText='${point.x}'  format='${series.name} : <b>${point.y}</b>' />
            <ChartLegend visible={true} accessibility={{ ariaLabel: 'Legend displaying the different energy sources represented in the chart.', role: 'presentation' }} />
            <ChartPrimaryXAxis valueType="Category" interval={Browser.isDevice ? 8 : 6}/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={2000} >
                <ChartAxisLabel format='{value}TWh' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={energyConsumptionData} xField="x" yField="y1" type="Line" opacity={Browser.isDevice ? 1 : 0.5} name="Other Renewable" dashArray='5,5'
                    accessibility={{ ariaLabel: 'This series represents the energy consumption from other renewable sources.', role: 'series'}}>
                    <ChartMarker visible={!Browser.isDevice} width={4} height={4} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={energyConsumptionData} xField="x" yField="y2" type="Line" opacity={Browser.isDevice ? 1 : 0.5} name="Modern biofuels" dashArray='5,5'
                    accessibility={{ ariaLabel: 'This series represents the energy consumption from modern biofuels.', role: 'series' }}>
                    <ChartMarker visible={!Browser.isDevice} width={4} height={4} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={energyConsumptionData} xField="x" yField="y3" type="Line" opacity={Browser.isDevice ? 1 : 0.5} name="Solar" dashArray='5,5'
                    accessibility={{ ariaLabel: 'This series represents the energy consumption from solar energy.', role: 'series' }}>
                    <ChartMarker visible={!Browser.isDevice} width={4} height={4} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={energyConsumptionData} xField="x" yField="y4" type="Line" opacity={Browser.isDevice ? 1 : 0.5} name="Wind" dashArray='5,5'
                    accessibility={{ ariaLabel: 'This series represents the energy consumption from wind energy.', role: 'series' }}>
                    <ChartMarker visible={!Browser.isDevice} width={4} height={4} shape='Circle' />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}