import { useState } from "react";
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartAxisLabel, SplineType, ChartTitle } from "@syncfusion/react-charts";
import { temperatureData } from './temperature-data';
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
                <ChartTitle text="2024 US Temperature Trends with Average Records" />
                <ChartTooltip enable={true} headerText="${point.x}" format="Temperature : <b>${point.y}</b>" />
                <ChartPrimaryXAxis valueType="Category">
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={20} maximum={80} interval={10}>
                    <ChartAxisLabel format='{value}°C' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={temperatureData} xField="x" yField="avg" type="Spline" splineType={splineType} width={2} fill={"#6F00FF"}>
                        <ChartMarker visible={true} />
                    </ChartSeries>
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}