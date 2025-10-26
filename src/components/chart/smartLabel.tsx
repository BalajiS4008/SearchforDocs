import { useState } from "react";
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTooltip, ChartTitle, ChartMarker, ChartDataLabel, ChartArea, LabelIntersectMode } from '@syncfusion/react-charts';
import { smartLabel } from './smart-label-data';
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";
import { DropDownList } from '@syncfusion/react-dropdowns';
const dropdownFields = { text: 'text', value: 'value' };
const intersectActions: { [key: string]: unknown }[] = [
    { text: "None", value: "None" },
    { text: "Hide", value: "Hide" },
    { text: "Trim", value: "Trim" },
    { text: "Wrap", value: "Wrap" },
    { text: "Multiple Rows", value: "MultipleRows" },
    { text: "Rotate 45", value: "Rotate45" },
    { text: "Rotate 90", value: "Rotate90" }
];
export default function App() {
    const { chartTheme } = useChartTheme();
    const [intersectAction, setintersectAction] = useState<LabelIntersectMode>("Hide");
    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '246px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Intersect Mode</label>
                <DropDownList width={170} dataSource={intersectActions as { [key: string]: object }[]} value={intersectAction} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setintersectAction(e.value as LabelIntersectMode);
                    }
                }} />
            </div>
            <Chart theme={chartTheme} width={Browser.isDevice ? "100%" : "75%"} border={{ width: 2 }}>
                <ChartArea border={{ width: 2 }} />
                <ChartTitle text='Internet Users in Millions' />
                <ChartTooltip enable={true} headerText="${point.x}" format='Internet Users : <b>${point.y}</b>' />
                <ChartPrimaryXAxis valueType={'Category'}>
                    <ChartAxisLabel intersectAction={intersectAction} />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                    <ChartAxisLabel format='{value}' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={smartLabel} xField="x" yField="y" type="Column" fill="#43CDFF" columnWidth={0.6} cornerRadius={{ topLeft: 5, topRight: 5 }}>
                        <ChartMarker>
                            <ChartDataLabel visible={!Browser.isDevice} format={"{value}M"} position="Top" enableRotation={Browser.isDevice} rotationAngle={Browser.isDevice ? -90 : 0} />
                        </ChartMarker>
                    </ChartSeries>
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}
