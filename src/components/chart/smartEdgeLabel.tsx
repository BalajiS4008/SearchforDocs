import { useState } from "react";
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTooltip, ChartTitle, EdgeLabelPlacement, ChartMarker } from '@syncfusion/react-charts';
import { smartAxisLabelData } from './label-position-data';
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";
import { DropDownList } from '@syncfusion/react-dropdowns';
const dropdownFields = { text: 'text', value: 'value' };
const edgeLabelPlacements: { [key: string]: unknown }[] = [
    { text: "Hide", value: "Hide" },
    { text: "None", value: "None" },
    { text: "Shift", value: "Shift" }
];

export default function App() {
    const { chartTheme } = useChartTheme();
    const [edgeLabelPlacement, setEdgeLabelPlacement] = useState<EdgeLabelPlacement>("Shift");
    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '236px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> edgeLabelPlacement</label>
                <DropDownList width={170} dataSource={edgeLabelPlacements as { [key: string]: object }[]} value={edgeLabelPlacement} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setEdgeLabelPlacement(e.value as EdgeLabelPlacement);
                    }
                }} />
            </div>
            <Chart theme={chartTheme}>
                <ChartTitle text='Population by Country 2024' />
                <ChartTooltip enable={true} headerText="${point.x}" format='Population : <b>${point.y}</b>' />
                <ChartPrimaryXAxis valueType={'Category'}>
                    <ChartAxisLabel edgeLabelPlacement={edgeLabelPlacement} placement="OnTicks" rotationAngle={Browser.isDevice ? -45 : 0} />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={0.3}>
                    <ChartAxisLabel format='{value}B' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={smartAxisLabelData} xField="x" yField="y" type="Line" fill={chartTheme.includes('Dark') ? "#35C9FF" : "#089ED4"}>
                        <ChartMarker visible={true} filled={false} />
                    </ChartSeries>
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}
