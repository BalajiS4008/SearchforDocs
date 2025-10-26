import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisLabel, ChartTitle, ChartMarker } from '@syncfusion/react-charts'
import { stackingBarData } from './annual-energy-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
import { useState } from 'react';
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
            <ChartTitle text='Annual Renewable Energy Generation in China (2020–2023) by Source' />
            <ChartPrimaryXAxis valueType={'Category'}/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={1000}>
                <ChartAxisLabel format='{value}TWh' rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y1' columnSpacing={columnSpacing} columnWidth={columnWidth} name='Wind' type='StackingBar' legendShape='Rectangle' fill="#689B8A" tooltipField='total' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}}>
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y2' columnSpacing={columnSpacing} columnWidth={columnWidth} name='Solar' type='StackingBar' legendShape='Rectangle' fill="#B2CD9C" tooltipField='total' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}}>
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
                <ChartSeries dataSource={stackingBarData} xField='x' yField='y3' columnSpacing={columnSpacing} columnWidth={columnWidth} name='Hydro' type='StackingBar' legendShape='Rectangle' fill="#8D8D87" cornerRadius={{ bottomRight: 4, topRight: 4 }} tooltipField='total' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}}>
                    <ChartMarker visible={false} shape='Rectangle' />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='Renewable Energy Generation' format='${series.name} : <b>${point.y}</b><br/>Total : <b>${point.tooltip}TWh<b/>' />
        </Chart>
        </div>
    )
}