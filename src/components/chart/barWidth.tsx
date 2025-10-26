import { useState } from 'react';
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisTitle, ChartAxisLabel } from '@syncfusion/react-charts';
import { paletteData } from './phone-palette';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';

export default function App() {
    const { chartTheme } = useChartTheme();
    const [columnSpacing, setColumnSpacing] = useState(0.15); // Initial value for column spacing
    const [columnWidth, setColumnWidth] = useState(0.5); // Initial value for column width
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
                <ChartTitle text='Global Smartphone Sales Trends by Brand (2021-2023)' />
                <ChartPrimaryXAxis valueType={'Category'} />
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} maximum={300}>
                    <ChartAxisLabel format='{value}M' />
                    <ChartAxisTitle text='Units Sold (in Millions)' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={paletteData} xField="year" yField="apple" type="Bar" fill='#8AA624' columnSpacing={columnSpacing} columnWidth={columnWidth} name="Apple" cornerRadius={{ bottomRight: 4, topRight: 4 }} legendShape='Rectangle' />
                    <ChartSeries dataSource={paletteData} xField="year" yField="xiaomi" type="Bar" fill='#D25D5D' columnSpacing={columnSpacing} columnWidth={columnWidth} name="Xiaomi" cornerRadius={{ bottomRight: 4, topRight: 4 }} legendShape='Rectangle' />
                    <ChartSeries dataSource={paletteData} xField="year" yField="oppo" type="Bar" fill='#239BA7' columnSpacing={columnSpacing} columnWidth={columnWidth} name="Oppo" cornerRadius={{ bottomRight: 4, topRight: 4 }} legendShape='Rectangle' />
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText='<b>${series.name}</b>'  format='${point.x} : <b>${point.y}</b>' />
            </Chart>
        </div>
    );
}