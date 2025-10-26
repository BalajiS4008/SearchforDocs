import { useState } from "react";
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartAxisLabel, SplineType, ChartTitle } from "@syncfusion/react-charts";
import { splineAreaData } from './inflation-rate-data';
import { useChartTheme } from './theme';
import { DropDownList } from '@syncfusion/react-dropdowns';
export default function App() {
    const { chartTheme } = useChartTheme();
    const [splineType, setSplineType] = useState<SplineType>("Natural");
    const splineTypes: { [key: string]: unknown }[] = [
        { text: "Natural", value: "Natural" },
        { text: "Monotonic", value: "Monotonic" },
        { text: "Cardinal", value: "Cardinal" },
        { text: "Clamped", value: "Clamped" }
    ];
    const dropdownFields = { text: 'text', value: 'value' };
    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '190px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Spline Type</label>
                <DropDownList width={170} dataSource={splineTypes as { [key: string]: object }[]} value={splineType} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setSplineType(e.value as SplineType);
                    }
                }} />
            </div>
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
                    <ChartSeries dataSource={splineAreaData} xField="x" yField="y2" type="SplineArea" opacity={0.4} fill="#D6FF89" width={2} border={{ width: 2, color: chartTheme.includes('Dark') ? "#A3E920" : "#71AD01" }} splineType={splineType}>
                        <ChartMarker visible={true} fill={chartTheme.includes('Dark') ? "#A3E920" : "#71AD01"} border={{ width: 2, color: chartTheme.includes('Dark') ? "#A3E920" : "#71AD01" }} />
                    </ChartSeries>
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}