import { useState } from "react";
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartTooltip, ChartSeries, ChartSeriesCollection, ChartAxisLabel, IntervalType, ChartRangePadding, ChartTitle } from "@syncfusion/react-charts";
import { synchronizedData } from './date-time-data';
import { useChartTheme } from "./theme";
import { DropDownList } from '@syncfusion/react-dropdowns';
const dropdownFields = { text: 'text', value: 'value' };
const intervalTypes: { [key: string]: unknown }[] = [
    { text: "Auto", value: "Auto" },
    { text: "Years", value: "Years" },
    { text: "Months", value: "Months" },
    { text: "Days", value: "Days" },
    { text: "Hours", value: "Hours" },
    { text: "Minutes", value: "Minutes" },
    { text: "Seconds", value: "Seconds" }
];
const rangePaddings: { [key: string]: unknown }[] = [
    { text: "None", value: "None" },
    { text: "Round", value: "Round" },
    { text: "Additional", value: "Additional" }
];
export default function App() {
    const { chartTheme } = useChartTheme();
    const [intervalType, setIntervalType] = useState<IntervalType>("Months");
    const [rangePadding, setRangePadding] = useState<ChartRangePadding>("None");
    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '430px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Interval Type</label>
                <DropDownList width={170} dataSource={intervalTypes as { [key: string]: object }[]} value={intervalType} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setIntervalType(e.value as IntervalType);
                    }
                }} />
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Range Padding</label>
                <DropDownList width={170} dataSource={rangePaddings as { [key: string]: object }[]} value={rangePadding} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setRangePadding(e.value as ChartRangePadding);
                    }
                }} />
            </div>
            <Chart theme={chartTheme}>
                <ChartTitle text="USD vs Yen Performance" />
                <ChartPrimaryXAxis valueType={"DateTime"} intervalType={intervalType} rangePadding={rangePadding} />
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={120} maximum={152}>
                    <ChartAxisLabel format="¥{value}" />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={synchronizedData} xField="USD" yField="JPY" type="Line" width={2} fill="#8B5DFF" />
                </ChartSeriesCollection>
                <ChartTooltip enable={true} format='${point.x}: <b>${point.y}</b>' />
            </Chart>
        </div>
    );
}
