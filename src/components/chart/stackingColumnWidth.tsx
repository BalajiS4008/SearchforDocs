import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisTitle, ChartAxisLabel, ChartTitle, ChartMarker } from '@syncfusion/react-charts'
import { stackingColumnData } from './stacking-column-data'
import { useChartTheme } from './theme';
import { useState } from 'react';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    const [columnSpacing, setColumnSpacing] = useState(0.15);
    const [columnWidth, setColumnWidth] = useState(0.49);
    return (
        <div>
            <div style={{ display: 'flex', alignItems: Browser.isDevice ? 'stretch' : 'center', flexDirection: Browser.isDevice ? 'column' : 'row', gap: '20px', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                <div style={{ minWidth: '160px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Column Spacing: {columnSpacing.toFixed(2)}
                    </label>
                    <input type="range" min="0.1" max="1" step="0.01" value={columnSpacing} onChange={(e) => setColumnSpacing(parseFloat(e.target.value))} style={{ width: '150px', height: '6px' }} />
                </div>
                <div style={{ minWidth: '160px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Column Width: {columnWidth.toFixed(2)}
                    </label>
                    <input type="range" min="0.1" max="1" step="0.01" value={columnWidth} onChange={(e) => setColumnWidth(parseFloat(e.target.value))} style={{ width: '150px', height: '6px' }} />
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
                    <ChartSeries dataSource={stackingColumnData} xField='x' yField='y1' name='India' fill='#F9CB99' columnSpacing={columnSpacing} columnWidth={columnWidth} type='StackingColumn' legendShape='Rectangle' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} tooltipField='total' >
                        <ChartMarker visible={false} shape='Rectangle' />
                    </ChartSeries>
                    <ChartSeries dataSource={stackingColumnData} xField='x' yField='y2' name='China' fill='#689B8A' columnSpacing={columnSpacing} columnWidth={columnWidth} type='StackingColumn' legendShape='Rectangle' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} tooltipField='total' >
                        <ChartMarker visible={false} shape='Rectangle' />
                    </ChartSeries>
                    <ChartSeries dataSource={stackingColumnData} xField='x' yField='y3' name='United States' fill='#FF6868' columnSpacing={columnSpacing} columnWidth={columnWidth} type='StackingColumn' legendShape='Rectangle' cornerRadius={{ topLeft: 5, topRight: 5 }} border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}}  tooltipField='total' >
                        <ChartMarker visible={false} shape='Rectangle' />
                    </ChartSeries>
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText='${point.x}' format='${series.name} : <b>${point.y}</b><br/> Total: <b>${point.tooltip}M</b>' />
            </Chart>
        </div>
    )
}