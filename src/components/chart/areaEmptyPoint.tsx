import { useState } from 'react';
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartTitle, EmptyPointMode } from '@syncfusion/react-charts';
import { areaEmptyData } from './area-empty-data';
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
                <DropDownList  width={170} dataSource={emptyPointModes as { [key: string]: object }[]} value={emptyPointMode} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setEmptyPointMode(e.value as EmptyPointMode);
                    }
                }} />
            </div>
            <Chart theme={chartTheme}>
                <ChartTitle text='Sales Analysis' />
                <ChartPrimaryXAxis valueType={"Category"} />
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={100} />
                <ChartSeriesCollection>
                    <ChartSeries dataSource={areaEmptyData} xField="x" yField="y" width={2} type="Area" opacity={0.5} border={{ width: 2, color: chartTheme.indexOf('Dark') > -1 ? "#3CFFD2" : '#008264' }} fill="#3CFFD2" emptyPointSettings={{ mode: emptyPointMode }}>
                        <ChartMarker visible={true} fill={chartTheme.indexOf('Dark') > -1 ? "#3CFFD2" : '#008264'} border={{ width: 2, color: chartTheme.indexOf('Dark') > -1 ? "#3CFFD2" : '#008264' }} />
                    </ChartSeries>
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText="${point.x}"  format='Sales : <b>${point.y} Units</b>' />
            </Chart>
        </div>
    );
}