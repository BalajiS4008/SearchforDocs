import { useState } from "react";
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTooltip, ChartTitle, AxisLabelPosition } from '@syncfusion/react-charts';
import { smartAxisLabelData } from './label-position-data';
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";
import { DropDownList } from '@syncfusion/react-dropdowns';
const dropdownFields = { text: 'text', value: 'value' };
const labelPositions: { [key: string]: unknown }[] = [
    { text: "Inside", value: "Inside" },
    { text: "Outside", value: "Outside" }
];
export default function App() {
    const { chartTheme } = useChartTheme();
    const [labelPosition, setLabelPosition] = useState<AxisLabelPosition>("Outside");
    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '200px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Label Position</label>
                <DropDownList width={170} dataSource={labelPositions as { [key: string]: object }[]} value={labelPosition} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setLabelPosition(e.value as AxisLabelPosition);
                    }
                }} />
            </div>
            <Chart theme={chartTheme}>
                <ChartTitle text='Population by Country 2024' />
                <ChartTooltip enable={true} headerText="${point.x}" format='Population : <b>${point.y}</b>' />
                <ChartPrimaryXAxis valueType={'Category'}>
                    <ChartAxisLabel position={labelPosition} rotationAngle={Browser.isDevice ? -45 : 0} />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={0.3}>
                    <ChartAxisLabel format='{value}B' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={smartAxisLabelData} xField="x" yField="y" type="Column" fill="#43CDFF" columnWidth={0.5} cornerRadius={{ topLeft: 5, topRight: 5 }} />
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}