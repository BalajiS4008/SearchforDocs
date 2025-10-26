import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartMajorTickLines, ChartAxisLabel, ChartTooltip, ChartTitle, LabelPlacement, ChartAxisTitle, ChartMarker } from '@syncfusion/react-charts';
import { labelPlacementData } from './category-label-data';
import { useState } from 'react';
import { useChartTheme } from './theme';
import { DropDownList } from '@syncfusion/react-dropdowns';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    const [tickPlacement, setTickPlacement] = useState<LabelPlacement>('OnTicks');
    const tickPlacementOptions: { [key: string]: unknown }[] = [
        { text: 'On Ticks', value: 'OnTicks' },
        { text: 'Between Ticks', value: 'BetweenTicks' }
    ];
    const dropdownFields = { text: 'text', value: 'value' };
    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '236px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Tick Placement</label>
                <DropDownList width={170} dataSource={tickPlacementOptions as { [key: string]: object }[]} value={tickPlacement} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setTickPlacement(e.value as LabelPlacement);
                    }
                }} />
            </div>
            <Chart theme={chartTheme}>
                <ChartTitle text='Stock Market Capitalization as a Percentage of GDP by Country' />
                <ChartTooltip enable={true} headerText="Stock Market Cap" format='${point.x} : <b>${point.y}B</b>' />
                <ChartPrimaryXAxis valueType={'Category'}>
                    <ChartAxisLabel placement={tickPlacement} rotationAngle={Browser.isDevice ? -45 : 0} />
                    <ChartMajorTickLines width={1} />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis visible={true} lineStyle={{ width: 0 }} interval={50}>
                    <ChartAxisLabel format='{value}' placement={tickPlacement} />
                    <ChartAxisTitle text='Capitalization Ratio (% of GDP)' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={labelPlacementData} xField="country" yField="y" width={2} opacity={0.4} type="SplineArea" fill="#D6FF89" border={{ width: 2, color: chartTheme.includes('Dark') ? "#A3E920" : "#71AD01" }}>
                        <ChartMarker visible={true} shape="Circle" fill={chartTheme.includes('Dark') ? "#A3E920" : "#71AD01"} border={{ width: 2, color: chartTheme.includes('Dark') ? "#A3E920" : "#71AD01" }} />
                    </ChartSeries>
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}
