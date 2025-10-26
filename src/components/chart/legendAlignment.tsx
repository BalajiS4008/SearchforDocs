import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel, ChartMarker } from '@syncfusion/react-charts';
import { useState } from 'react';
import { Browser, HorizontalAlignment } from '@syncfusion/react-base';
import { chinaLegendAlignData, FranceData, germanyData } from './hydro-power-data';
import { useChartTheme } from './theme';
import { DropDownList } from '@syncfusion/react-dropdowns';
const dropdownFields = { text: 'text', value: 'value' };
const legendAlignments: { [key: string]: unknown }[] = [
    { text: "Left", value: "Left" },
    { text: "Center", value: "Center" },
    { text: "Right", value: "Right" }
];
export default function App() {
    const { chartTheme } = useChartTheme();
    const [legendAlignment, setLegendAlignment] = useState<HorizontalAlignment>("Left");
    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '206px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Legend Alignment</label>
                <DropDownList width={170} dataSource={legendAlignments as { [key: string]: object }[]} value={legendAlignment} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setLegendAlignment(e.value as HorizontalAlignment);
                    }
                }} />
            </div>
            <Chart theme={chartTheme}>
                <ChartTitle text="Annual Change in Hydropower Generation" />
                <ChartPrimaryXAxis valueType={'Category'}>
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={200}>
                    <ChartAxisLabel format='{value}TWh' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={chinaLegendAlignData} xField="x" yField="y" fill='#5DB996' name="China" type="Line">
                        <ChartMarker visible={!Browser.isDevice} />
                    </ChartSeries>
                    <ChartSeries dataSource={FranceData} xField="x" yField="y" fill='#FF748B' name="France" type="Line">
                        <ChartMarker visible={!Browser.isDevice} />
                    </ChartSeries>
                    <ChartSeries dataSource={germanyData} xField="x" yField="y" fill='#60B5FF' name="Germany" type="Line">
                        <ChartMarker visible={!Browser.isDevice} />
                    </ChartSeries>
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText="${point.x}" format='${series.name} : <b>${point.y}</b>' />
                <ChartLegend visible={true} align={legendAlignment} />
            </Chart>
        </div>
    );
}
