import { useState } from 'react';
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisLabel, ChartAxisTitle, ChartTitle } from "@syncfusion/react-charts";
import { columnData } from './production-data';
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    const [columnWidthInPixel, setColumnWidthInPixel] = useState(Browser.isDevice ? 30 : 60); // Initial value for column width
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
                <ChartTitle text="Walnuts Estimated Production for 2023" />
                <ChartPrimaryXAxis valueType={'Category'} interval={1}>                    
                    <ChartAxisLabel intersectAction="Trim" rotationAngle={Browser.isDevice ? -45 : 0} />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={40}>                    
                    <ChartAxisTitle text="Metric Tons" />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>                    
                    <ChartSeries dataSource={columnData} xField="country" legendShape="Rectangle" yField="walnuts" type='Column' fill="#00C5BC" cornerRadius={{ topLeft: 6, topRight: 6 }} columnWidthInPixel={columnWidthInPixel} />
                </ChartSeriesCollection>
                <ChartTooltip enable={true} format='${point.x} : <b>${point.y}K</b>' />
            </Chart>
        </div>
    );
}