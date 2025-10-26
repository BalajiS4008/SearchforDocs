import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisLabel, ChartTitle, ChartMarker } from '@syncfusion/react-charts'
import { stackingBarData } from './annual-energy-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
import { useState } from 'react';
export default function App() {
    const { chartTheme } = useChartTheme();
    const [columnWidthInPixel, setColumnWidthInPixel] = useState(39); // Initial value for column width
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
            <ChartTitle text='Annual Renewable Energy Generation in China (2020–2023) by Source' />            
            <ChartPrimaryXAxis valueType={'Category'}/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={1000}>
                <ChartAxisLabel format='{value}TWh' rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y1' fill="#689B8A" columnWidthInPixel={columnWidthInPixel} name='Wind' type='StackingBar' legendShape='Rectangle' tooltipField='total' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}}>
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y2' fill="#B2CD9C" columnWidthInPixel={columnWidthInPixel} name='Solar' type='StackingBar' legendShape='Rectangle' tooltipField='total' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}}>
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y3' fill="#8D8D87" columnWidthInPixel={columnWidthInPixel} name='Hydro' type='StackingBar' legendShape='Rectangle' cornerRadius={{ bottomRight: 4, topRight: 4 }} tooltipField='total' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}}>
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='Renewable Energy Generation'  format='${series.name} : <b>${point.y}</b><br/>Total : <b>${point.tooltip}TWh<b/>' />
        </Chart>
        </div>
    )
}