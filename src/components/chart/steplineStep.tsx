import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartArea, ChartAxisTitle, ChartTooltip, ChartTitle, StepPosition, ChartMarker } from "@syncfusion/react-charts";
import { useState } from 'react';
import { stepLineData } from './album-data'
import { useChartTheme } from "./theme";
import { DropDownList } from '@syncfusion/react-dropdowns';
const dropdownFields = { text: 'text', value: 'value' };
const stepPosition: { [key: string]: unknown }[] = [
    { text: "Left", value: "Left" },
    { text: "Center", value: "Center" },
    { text: "Right", value: "Right" }
];
export default function App() {
    const { chartTheme } = useChartTheme();
    const [stepType, setStepType] = useState<StepPosition>("Left");
    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '176px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Step Position</label>
                <DropDownList width={170} dataSource={stepPosition as { [key: string]: object }[]} value={stepType} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setStepType(e.value as StepPosition);
                    }
                }} />
            </div>
            <Chart theme={chartTheme}>
                <ChartTitle text="Worldwide Best-Selling Albums by Year" />
                <ChartArea border={{ width: 0 }} />
                <ChartTooltip enable={true} headerText="${point.x}" format='Sales : <b>${point.y}M</b>' />
                <ChartPrimaryXAxis valueType="Double" minimum={2006} maximum={2025} interval={3} />
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={4} minimum={0} maximum={20}>
                    <ChartAxisTitle text="Sales in million" />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={stepLineData} xField="x" yField="y" width={3} type="StepLine" step={stepType} fill={"#0FAF9C"}>
                        <ChartMarker visible={true} />
                    </ChartSeries>
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}
