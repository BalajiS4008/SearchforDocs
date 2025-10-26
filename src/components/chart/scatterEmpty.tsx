import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, EmptyPointMode
} from "@syncfusion/react-charts"
import { scatterEmptyData } from './data-source';
import { ThemeContext } from '../../common/context';
import { useState, useContext } from 'react';
export default function App() {
    const { themeName } = useContext(ThemeContext);
    const [emptyPointMode, setEmptyPointMode] = useState<EmptyPointMode>("Gap");
    const chartTheme = themeName === 'material3-dark' ? 'Material3Dark' : 'Material3';
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ marginRight: '10px' }}>Empty Point Mode:</label>
                <select
                    value={emptyPointMode}
                    onChange={(e) => setEmptyPointMode(e.target.value as EmptyPointMode)}
                    style={{
                        padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', fontSize: '16px'
                    }}>
                    <option value="Gap">Gap</option>
                    <option value="Zero">Zero</option>
                    <option value="Average">Average</option>
                    <option value="Drop">Drop</option>
                </select>
            </div>
            <Chart theme={chartTheme}>                
                <ChartTooltip enable={true} />
                <ChartPrimaryXAxis valueType="Double" minimum={12} maximum={365} >                    
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={100}>                    
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={scatterEmptyData} xField="x1" yField="y2" type="Scatter" emptyPointSettings={{ mode: emptyPointMode }}>
                        <ChartMarker visible={true} shape="Diamond" height={10} width={10}/>
                    </ChartSeries>
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}