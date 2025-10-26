import { useState } from 'react';
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisTitle, ChartAxisLabel } from '@syncfusion/react-charts';
import { paletteData } from './phone-palette';
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    const [columnWidthInPixel, setColumnWidthInPixel] = useState(45);
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                <div style={{ minWidth: '160px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Column Width (Pixels): {columnWidthInPixel}
                    </label>
                    <input type="range" min="5" max="100" step="1" value={columnWidthInPixel} onChange={(e) => setColumnWidthInPixel(parseInt(e.target.value))} style={{ width: '150px', height: '6px' }} />
                </div>
            </div>
            <Chart theme={chartTheme}>
                <ChartTitle text='Global Smartphone Sales Trends by Apple (2021-2023)' />                
                <ChartPrimaryXAxis valueType={'Category'}/>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} maximum={300}>                    
                    <ChartAxisLabel format='{value}M' />
                    <ChartAxisTitle text='Units Sold (in Millions)' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={paletteData} xField="year" yField="apple" type="Bar" fill='#239BA7' columnWidthInPixel={columnWidthInPixel} cornerRadius={{ bottomRight: 4, topRight: 4 }} />
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText='Apple'  format='${point.x} : <b>${point.y}</b>' />
            </Chart>
        </div>
    );
}
