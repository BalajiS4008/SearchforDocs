import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, EmptyPointMode } from '@syncfusion/react-charts'
import { bubbleEmpty } from './data-source';
import { useState } from 'react';
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    const [emptyPointMode, setEmptyPointMode] = useState<EmptyPointMode>("Gap");
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ marginRight: '10px' }}>Empty Point Mode:</label>
                <select value={emptyPointMode} onChange={(e) => setEmptyPointMode(e.target.value as EmptyPointMode)} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', fontSize: '16px', color: chartTheme.includes('Dark') ? 'white' : 'black', backgroundColor: chartTheme.includes('Dark') ? '#333' : 'white' }}>
                    <option value="Gap">Gap</option>
                    <option value="Zero">Zero</option>
                    <option value="Average">Average</option>
                    <option value="Drop">Drop</option>
                </select>
            </div>
            <Chart theme={chartTheme}>
                <ChartTooltip enable={true} />
                <ChartPrimaryXAxis minimum={60} maximum={100}>
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={4}>
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={bubbleEmpty} xField="x" yField="y" type="Bubble" sizeField='size' emptyPointSettings={{ mode: emptyPointMode, fill: "red" }} />
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}