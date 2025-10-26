import { useState } from 'react';
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartTitle, ChartAxisLabel, EmptyPointMode } from '@syncfusion/react-charts';
import { splineAreaEmptyData } from './splineArea-empty-data'
import { useChartTheme } from './theme';
import { DropDownList } from '@syncfusion/react-dropdowns';
export default function App() {
    const { chartTheme } = useChartTheme();
    const [emptyPointMode, setEmptyPointMode] = useState<EmptyPointMode>("Gap");
    const emptyPointModes: { [key: string]: unknown }[] = [
        { text: 'Gap', value: 'Gap' },
        { text: 'Zero', value: 'Zero' },
        { text: 'Average', value: 'Average' },
        { text: 'Drop', value: 'Drop' }
    ];
    const dropdownFields = { text: 'text', value: 'value' };
    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '236px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Empty Point Mode:</label>
                <DropDownList width={170} dataSource={emptyPointModes as { [key: string]: object }[]} value={emptyPointMode} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setEmptyPointMode(e.value as EmptyPointMode);
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
                    <ChartSeries dataSource={splineAreaEmptyData} xField="x" yField="y" type="SplineArea" opacity={0.4} fill="#D6FF89" width={2} border={{ width: 2, color: chartTheme.includes('Dark') ? "#A3E920" : "#71AD01" }} emptyPointSettings={{ mode: emptyPointMode }}>
                        <ChartMarker visible={true} fill={chartTheme.includes('Dark') ? "#A3E920" : "#71AD01"} border={{ width: 2, color: chartTheme.includes('Dark') ? "#A3E920" : "#71AD01" }} />
                    </ChartSeries>
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}