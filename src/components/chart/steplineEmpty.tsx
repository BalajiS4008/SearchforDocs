import { useState } from 'react';
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartTitle, ChartAxisTitle, EmptyPointMode } from '@syncfusion/react-charts';
import { steplineEmptyData } from './stepline-empty-data';
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
                <ChartTitle text="Worldwide Best-Selling Albums by Year" />
                <ChartTooltip enable={true} headerText="${point.x}" format='Sales : <b>${point.y}M</b>' />
                <ChartPrimaryXAxis valueType="Double" minimum={2006} maximum={2025} interval={3} />
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={4} minimum={0} maximum={20}>
                    <ChartAxisTitle text="Sales in million" />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={steplineEmptyData} xField="x" yField="y" width={3} type="StepLine" fill={"#0FAF9C"} emptyPointSettings={{ mode: emptyPointMode }}>
                        <ChartMarker visible={true} />
                    </ChartSeries>
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}