import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartZoomSettings, ChartTooltip, ZoomMode, ChartAxisTitle, ChartTitle, ChartAxisLabel } from "@syncfusion/react-charts";
import { zoomData } from './zoom-data';
import { useState } from 'react';
import { useChartTheme } from './theme';
import { DropDownList } from '@syncfusion/react-dropdowns';
const dropdownFields = { text: 'text', value: 'value' };
export default function App() {
    const { chartTheme } = useChartTheme();
    const [zoomMode, setZoomMode] = useState<ZoomMode>("X"); // State to hold the selected zoom mode
    const zoomModes: { [key: string]: unknown }[] = [
        { text: "X", value: "X" },
        { text: "Y", value: "Y" },
        { text: "XY", value: "XY" }
    ];
    const series1: object[] = [];
    let point1: object;
    for (let i: number = 1; i < zoomData.length; i++) {
        point1 = { x: new Date(1941, i + 2, i), y: zoomData[i as number] / 1000 - 0.5 };
        series1.push(point1);
    }
    const data1 = series1;
    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '136px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Mode</label>
                <DropDownList width={170} dataSource={zoomModes as { [key: string]: object }[]} value={zoomMode} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setZoomMode(e.value as ZoomMode);
                    }
                }} />
            </div>
            <Chart theme={chartTheme}>
                <ChartZoomSettings selectionZoom={true} mode={zoomMode} />
                <ChartTooltip enable={true} headerText="${point.x}" format="Temperature: <b>${point.y}</b>" />
                <ChartTitle text='Global Warming: Monthly Temperature Anomalies' />
                <ChartPrimaryXAxis valueType="DateTime" intervalType='Months' />
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={0.3}>
                    <ChartAxisLabel format="{value}°C" />
                    <ChartAxisTitle text="Temperature Anomaly (°C)" />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={data1} xField="x" yField="y" type="Area" opacity={0.5} fill="#2B95C9" />
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}