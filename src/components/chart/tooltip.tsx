import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartAxisLabel, ChartAxes, ChartAxis, ChartMarker, ChartAxisTitle } from "@syncfusion/react-charts";
import { evChargingData } from './ev-charging-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartPrimaryXAxis valueType="Category" lineStyle={{width: 1, color: 'black'}}/>
            <ChartPrimaryYAxis minimum={0} maximum={5.4} interval={Browser.isDevice ? 2 : 0.9} lineStyle={{width: 0}}>
                <ChartAxisLabel format="{value}" />
                <ChartAxisTitle text="kW of public charging per electric LDV"/>
            </ChartPrimaryYAxis>
            <ChartAxes>
                <ChartAxis opposedPosition={true} minimum={0} maximum={90} interval={Browser.isDevice ? 15 : 15} name="xAxis2"  lineStyle={{width: 0}}>
                    <ChartAxisLabel format="{value}" />
                    <ChartAxisTitle text="Number of Electric LDVs per charging point"/>
                </ChartAxis>
            </ChartAxes>
            <ChartSeriesCollection>
                <ChartSeries dataSource={evChargingData} type="Bar" xField="country" yField="publicChargingPerEV" tooltipFormat="EV/EVSE : <b>${point.y}</b>" fill={"#799EFF"} />
                <ChartSeries dataSource={evChargingData} fill={"#FF5850"} type="Scatter" xField="country" yField="evPerChargingPoint" yAxisName="xAxis2" tooltipFormat="kW/EV : <b>${point.y}</b>">
                    <ChartMarker visible={true} shape="Circle" height={10} width={10}></ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}" />
        </Chart>
    );
}