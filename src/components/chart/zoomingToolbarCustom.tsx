import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartZoomSettings, ChartTooltip, ChartAxisTitle, ChartTitle, ChartAxisLabel } from "@syncfusion/react-charts";
import { zoomData } from './zoom-data';
import { Browser, HorizontalAlignment, VerticalAlignment } from "@syncfusion/react-base";
import { useState } from 'react';
import { useChartTheme } from "./theme";
import { DropDownList } from '@syncfusion/react-dropdowns';
const dropdownFields = { text: 'text', value: 'value' };
export default function App() {
    const { chartTheme } = useChartTheme();
    const [horizontalAlignment, setHorizontalAlignment] = useState<HorizontalAlignment>("Left");
    const [verticalAlignment, setVerticalAlignment] = useState<VerticalAlignment>("Center");
    const series1: object[] = [];
    const horizontalAlignments: { [key: string]: unknown }[] = [
        { text: "Left", value: "Left" },
        { text: "Center", value: "Center" },
        { text: "Right", value: "Right" }
    ];
    const verticalAlignments: { [key: string]: unknown }[] = [
        { text: "Top", value: "Top" },
        { text: "Center", value: "Center" },
        { text: "Bottom", value: "Bottom" }
    ];
    let point1: object;
    for (let i: number = 1; i < zoomData.length; i++) {
        point1 = { x: new Date(1941, i + 2, i), y: zoomData[i as number] / 1000 - 0.5 };
        series1.push(point1);
    }
    const data1 = series1;
    return (
        <div>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1E88E5" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#1E88E5" stopOpacity="0.4" />
                    </linearGradient>
                </defs>
            </svg>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: Browser.isDevice ? 'stretch' : 'center', flexDirection: Browser.isDevice ? 'column' : 'row', gap: '10px', width: Browser.isDevice ? '200px' : '456px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Horizontal Alignment</label>
                <DropDownList width={170} dataSource={horizontalAlignments as { [key: string]: object }[]} value={horizontalAlignment} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setHorizontalAlignment(e.value as HorizontalAlignment);
                    }
                }} />
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Vertical Alignment</label>
                <DropDownList width={170} dataSource={verticalAlignments as { [key: string]: object }[]} value={verticalAlignment} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setVerticalAlignment(e.value as VerticalAlignment);
                    }
                }} />
            </div>
            <Chart theme={chartTheme}>
                <ChartTitle text='Global Warming: Monthly Temperature Anomalies' />
                <ChartZoomSettings selectionZoom={true} toolbar={{ visible: true, position: { hAlign: horizontalAlignment, vAlign: verticalAlignment, x: 5, y: 20 } }} />
                <ChartTooltip enable={true} headerText="${point.x}" format="Temperature: <b>${point.y}</b>" />
                <ChartPrimaryXAxis valueType="DateTime" />
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={0.3}>
                    <ChartAxisLabel format="{value}°C" />
                    <ChartAxisTitle text="Temperature Anomaly (°C)" />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={data1} xField="x" yField="y" type="Area" fill="#2B95C9" opacity={0.8} />
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}