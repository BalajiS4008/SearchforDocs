import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts";
import { splineAreaData } from './inflation-rate-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Inflation Rate in Percentage"/>            
            <ChartTooltip enable={true} />
            <ChartPrimaryXAxis valueType="DateTime" intervalType="Years" minimum= {new Date(2001, 0, 1)} maximum= {new Date(2012, 0, 1)}>
                <ChartAxisLabel format="y" edgeLabelPlacement={"Shift"}/>
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} maximum={4} interval={1}>
                <ChartAxisLabel format="{value}%" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={splineAreaData} xField="x" yField="y1" type="SplineArea" opacity={0.4} width={2} name="US" fill="#D6FF89" border={{ width: 2, color: chartTheme.includes('Dark') ? "#A3E920" : "#71AD01"}}>
                    <ChartMarker visible={true} shape="Circle" fill={chartTheme.includes('Dark') ? "#A3E920" : "#71AD01"} border={{ width: 2, color: chartTheme.includes('Dark') ? "#A3E920" : "#71AD01"}}/>
                </ChartSeries>
                <ChartSeries dataSource={splineAreaData} xField="x" yField="y2" type="SplineArea" opacity={0.4} width={2} name="France" fill="#71C8EE" border={{ width: 2, color: '#0085BF'}}>
                    <ChartMarker visible={true} fill={chartTheme.includes('Dark') ? "#30C0FF" : "#0085BF"} shape="Circle" border={{ width: 2, color: chartTheme.includes('Dark') ? "#30C0FF" : "#0085BF"}}/>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}