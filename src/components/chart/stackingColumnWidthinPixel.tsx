import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisTitle, ChartAxisLabel, ChartTitle, ChartMarker } from '@syncfusion/react-charts'
import { stackingColumnData } from './stacking-column-data'
import { useChartTheme } from './theme';
import { useState } from 'react';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    const [columnWidthInPixel, setColumnWidthInPixel] = useState(Browser.isDevice ? 22 : 39); // Initial value for column width
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
                <ChartTitle text='Global Cotton Production by Country (2019–2024)' />
                <ChartPrimaryXAxis valueType={'Category'} interval={1}>
                    <ChartAxisLabel intersectAction='Rotate45' />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={20}>
                    <ChartAxisLabel format='{value}M' />
                    <ChartAxisTitle text='Production (60KG Bags)' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={stackingColumnData} xField='x' yField='y1' name='India' fill='#F9CB99' columnWidthInPixel={columnWidthInPixel} type='StackingColumn' legendShape='Rectangle' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white' }} tooltipField='total' >
                        <ChartMarker visible={false} shape='Rectangle' />
                    </ChartSeries>
                    <ChartSeries dataSource={stackingColumnData} xField='x' yField='y2' name='China' fill='#689B8A' columnWidthInPixel={columnWidthInPixel} type='StackingColumn' legendShape='Rectangle' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white' }} tooltipField='total' >
                        <ChartMarker visible={false} shape='Rectangle' />
                    </ChartSeries>
                    <ChartSeries dataSource={stackingColumnData} xField='x' yField='y3' name='United States' fill='#FF6868' columnWidthInPixel={columnWidthInPixel} type='StackingColumn' legendShape='Rectangle' cornerRadius={{ topLeft: 5, topRight: 5 }} border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white' }} tooltipField='total' >
                        <ChartMarker visible={false} shape='Rectangle' />
                    </ChartSeries>
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText='${point.x}' format='${series.name} : <b>${point.y}</b><br/> Total: <b>${point.tooltip}M</b>' />
            </Chart>
        </div>
    )
}