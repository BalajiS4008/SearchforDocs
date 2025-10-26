import { useState } from 'react';
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisLabel, ChartAxisTitle, ChartTitle } from "@syncfusion/react-charts";
import { columnData } from './production-data';
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";

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
                <ChartTitle text="Walnuts and Almonds Estimated Production for 2023" />
                <ChartPrimaryXAxis valueType={'Category'} interval={1}>
                    <ChartAxisLabel intersectAction="Trim" rotationAngle={Browser.isDevice ? -45 : 0} />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                    <ChartAxisTitle text="Metric Tons" />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={columnData} xField="country" legendShape="Rectangle" yField="walnuts" type='Column' name='Walnuts' fill="#00C5BC" cornerRadius={{ topLeft: 10, topRight: 10 }} columnSpacing={columnSpacing} columnWidth={columnWidth} />
                    <ChartSeries dataSource={columnData} xField="country" legendShape="Rectangle" yField="almonds" type='Column' name='Almonds' fill="#BA7DDA" cornerRadius={{ topLeft: 10, topRight: 10 }} columnSpacing={columnSpacing} columnWidth={columnWidth} />
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText='${point.x}'  format='${series.name}: <b>${point.y}K</b>' />
            </Chart>
        </div>
    );
}