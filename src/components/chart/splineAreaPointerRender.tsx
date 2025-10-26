import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries,  ChartTooltip, ChartMarker, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts";
import { splineAreaData } from './inflation-rate-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="France's Inflation Rate (%) Over Time" />            
            <ChartTooltip enable={true} headerText="<b>France</b>" />
            <ChartPrimaryXAxis valueType="DateTime" intervalType="Years" minimum={new Date(2002, 0, 1)} maximum={new Date(2011, 0, 1)}>                
                <ChartAxisLabel format="y" edgeLabelPlacement={"Shift"} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} maximum={4} interval={1}>                
                <ChartAxisLabel format="{value}%" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={splineAreaData} xField="x" yField="y2" type="SplineArea" opacity={0.4} fill="#D6FF89" width={2} border={{ width: 2, color: chartTheme.includes('Dark') ? "#A3E920" : "#71AD01"}}>
                    <ChartMarker visible={true} width={14} height={14} fill={chartTheme.includes('Dark') ? "#A3E920" : "#71AD01"} border={{width: 2, color: chartTheme.includes('Dark') ? "#A3E920" : "#71AD01"}} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}
