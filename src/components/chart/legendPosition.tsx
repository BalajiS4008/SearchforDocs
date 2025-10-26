import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, LegendPosition, ChartAxisLabel } from '@syncfusion/react-charts';
import { legendPositionData } from './fossil-fuel-data';
import { useState } from 'react';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
import { DropDownList } from '@syncfusion/react-dropdowns';
const dropdownFields = { text: 'text', value: 'value' };
const legendPositions: { [key: string]: unknown }[] = [
    { text: "Top", value: "Top" },
    { text: "Bottom", value: "Bottom" },
    { text: "Right", value: "Right" },
    { text: "Left", value: "Left" },
    { text: "Auto", value: "Auto" }
];
export default function App() {
    const { chartTheme } = useChartTheme();
    const [legendPosition, setLegendPosition] = useState<LegendPosition>("Top");
    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '206px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Legend Position</label>
                <DropDownList width={170} dataSource={legendPositions as { [key: string]: object }[]} value={legendPosition} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setLegendPosition(e.value as LegendPosition);
                    }
                }} />
            </div>
            <Chart theme={chartTheme}>
                <ChartTitle text="Annual percentage change in fossil fuel consumption (2023 - 2024)" />
                <ChartPrimaryXAxis valueType={'Category'}>
                    <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={2}>
                    <ChartAxisLabel format='{value}%' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={legendPositionData} fill='#FF6868' xField="x" yField="y" name="2024" width={2} type="Bar" columnSpacing={0.1} cornerRadius={{ bottomRight: 6, topRight: 6 }} />
                    <ChartSeries dataSource={legendPositionData} fill='#689B8A' xField="x" yField="y1" name="2023" width={2} type="Bar" columnSpacing={0.1} cornerRadius={{ bottomRight: 6, topRight: 6 }} />
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText="${point.x}" format='${series.name} : <b>${point.y}</b>' />
                <ChartLegend visible={true} position={legendPosition} />
            </Chart>
        </div>
    );
}
