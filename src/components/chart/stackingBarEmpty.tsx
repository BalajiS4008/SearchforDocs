import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, EmptyPointMode } from '@syncfusion/react-charts'
import { stackigBarEmptyData } from './data-source'
import { useState } from 'react';
import { useChartTheme } from './theme';
export default function App() {

    const { chartTheme } = useChartTheme();
    const [emptyPointMode, setEmptyPointMode] = useState<EmptyPointMode>("Gap");

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ marginRight: '10px' }}>Empty Point Mode:</label>
                <select
                    value={emptyPointMode}
                    onChange={(e) => setEmptyPointMode(e.target.value as EmptyPointMode)}
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        fontSize: '16px',
                        color: chartTheme.includes('Dark') ? 'white': 'black'
                    }}>
                    <option value="Gap">Gap</option>
                    <option value="Zero">Zero</option>
                    <option value="Average">Average</option>
                    <option value="Drop">Drop</option>
                </select>
            </div>
            <Chart theme={chartTheme}>
                
                <ChartPrimaryXAxis valueType={'Category'}>
                    
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={stackigBarEmptyData} xField="x" yField="y" type="StackingBar" emptyPointSettings={{ mode: emptyPointMode }} border={{ width: 1, color: "white" }} />
                    <ChartSeries dataSource={stackigBarEmptyData} xField="x" yField="y1" type="StackingBar" emptyPointSettings={{ mode: emptyPointMode }} border={{ width: 1, color: "white" }} />
                    <ChartSeries dataSource={stackigBarEmptyData} xField="x" yField="y2" type="StackingBar" emptyPointSettings={{ mode: emptyPointMode }} border={{ width: 1, color: "white" }} />
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText='' />
            </Chart>
        </div>
    )
}