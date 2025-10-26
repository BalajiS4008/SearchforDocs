import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, LegendShape, ChartMarker, ChartAxisLabel } from '@syncfusion/react-charts';
import { indiaLegendData, chinaLegendData } from './emission-data';
import { useState } from 'react';
import { useChartTheme } from './theme';
import { DropDownList } from '@syncfusion/react-dropdowns';
import { Browser } from '@syncfusion/react-base';
const dropdownFields = { text: 'text', value: 'value' };
const legendShapes: { [key: string]: unknown }[] = [
    { text: "Series Type", value: "SeriesType" },
    { text: "Circle", value: "Circle" },
    { text: "Rectangle", value: "Rectangle" },
    { text: "Cross", value: "Cross" },
    { text: "Diamond", value: "Diamond" },
    { text: "Horizontal Line", value: "HorizontalLine" },
    { text: "Vertical Line", value: "VerticalLine" },
    { text: "Triangle", value: "Triangle" },
    { text: "Pentagon", value: "Pentagon" },
    { text: "Inverted Triangle", value: "InvertedTriangle" }
];
export default function App() {
    const { chartTheme } = useChartTheme();
    const [legendShape, setLegendShape] = useState<LegendShape>("SeriesType");
    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '246px' }}>
                <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Legend Shape</label>
                <DropDownList width={170} dataSource={legendShapes as { [key: string]: object }[]} value={legendShape} fields={dropdownFields} onChange={(e) => {
                    if (e && e.value !== undefined) {
                        setLegendShape(e.value as LegendShape);
                    }
                }} />
            </div>
            <Chart theme={chartTheme}>
                <ChartTitle text="Global CO2 Emissions: A Comparative Analysis of India and China" />
                <ChartPrimaryXAxis valueType={'Category'} />
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={10}>
                    <ChartAxisLabel format='{value}%' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={indiaLegendData} xField="x" yField="y" name="India" type="SplineArea" opacity={0.4} width={2} fill={chartTheme.includes('Dark') ? "#F57BB8" :"#F57BB8"} border={{ width: 2, color: '#C93D83' }} legendShape={legendShape}>
                        <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                    </ChartSeries>
                    <ChartSeries dataSource={chinaLegendData} xField="x" yField="y" name="China" type="SplineArea" opacity={0.4} width={2} fill={chartTheme.includes('Dark') ? "#9DACFF" :"#9DACFF"} border={{ width: 2, color: '#4F68F0' }} legendShape={legendShape} >
                        <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                    </ChartSeries>
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText="${point.x}" format='${series.name} : <b>${point.y}</b>' />
                <ChartLegend visible={true} />
            </Chart>
        </div>
    );
}
