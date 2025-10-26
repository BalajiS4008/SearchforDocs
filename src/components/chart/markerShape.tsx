import { useState } from 'react';
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartAxisLabel, ChartTitle, ChartMarkerShape } from "@syncfusion/react-charts";
import { markerShapeData } from './marker-shape-data'
import { useChartTheme } from './theme';
import { DropDownList } from '@syncfusion/react-dropdowns';
const dropdownFields = { text: 'text', value: 'value' };
export default function App() {
    const { chartTheme } = useChartTheme();
    const [selectedShape, setSelectedShape] = useState<ChartMarkerShape>('Circle');
    const shapes: { [key: string]: unknown }[] = [
        { text: 'Circle', value: 'Circle' },
        { text: 'Rectangle', value: 'Rectangle' },
        { text: 'Triangle', value: 'Triangle' },
        { text: 'Diamond', value: 'Diamond' },
        { text: 'Cross', value: 'Cross' },
        { text: 'Plus', value: 'Plus' },
        { text: 'HorizontalLine', value: 'HorizontalLine' },
        { text: 'VerticalLine', value: 'VerticalLine' },
        { text: 'Pentagon', value: 'Pentagon' },
        { text: 'InvertedTriangle', value: 'InvertedTriangle' },
        { text: 'Star', value: 'Star' }
    ];
    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '196px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Shape</label>
                <DropDownList width={170} dataSource={shapes as { [key: string]: object }[]} value={selectedShape} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setSelectedShape(e.value as ChartMarkerShape);
                    }
                }} />
            </div>
            <Chart theme={chartTheme}>
                <ChartTitle text="Population Coverage, at least 2G" />
                <ChartTooltip enable={true} shared={false} headerText='${point.x}' format='World : <b>${point.y}% of population</b>' />
                <ChartPrimaryXAxis valueType="Category" interval={4}>
                    <ChartAxisLabel intersectAction={"Rotate90"} />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={75} maximum={100} interval={5} />
                <ChartSeriesCollection>
                    <ChartSeries dataSource={markerShapeData} xField='x' yField='y' width={2} fill='#37A18B' type='Line'>
                        <ChartMarker visible={true} shape={selectedShape} />
                    </ChartSeries>
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}