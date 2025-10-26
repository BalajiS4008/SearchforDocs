import { useState, useContext } from "react";
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartRangePadding, ChartAxisTitle, ChartMarker, ChartTitle } from "@syncfusion/react-charts";
import { numericData } from './numeric-data';
import { ThemeContext } from '../../common/context';
import { DropDownList } from '@syncfusion/react-dropdowns';
const rangePaddingOptions: { [key: string]: unknown }[] = [
  { text: "None", value: "None" },
  { text: "Normal", value: "Normal" },
  { text: "Round", value: "Round" },
  { text: "Additional", value: "Additional" },
  { text: "Auto", value: "Auto" }
];
const dropdownFields = { text: 'text', value: 'value' };
export default function App() {
  const { themeName } = useContext(ThemeContext);
  const chartTheme = themeName === 'material3-dark' ? 'Material3Dark' : 'Material3';
  const [rangePadding, setRangePadding] = useState<ChartRangePadding>("None");
  return (
    <div>
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '206px' }}>
        <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Range Padding</label>
        <DropDownList width={170} dataSource={rangePaddingOptions as { [key: string]: object }[]} value={rangePadding} fields={dropdownFields} onChange={(e) => {
          if (e && e.value !== undefined) {
            setRangePadding(e.value as ChartRangePadding);
          }
        }} />
      </div>
      {/* Gradient Definition */}
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="gradient-fill-range" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#5433FF40" />
            <stop offset="100%" stopColor="#5433FF" />
          </linearGradient>
        </defs>
      </svg>
      <Chart id="numberic-axis-range-padding" theme={chartTheme}>
        <ChartTitle text="World Population by Year" />
        <ChartPrimaryXAxis valueType="Double" rangePadding={rangePadding}>
        </ChartPrimaryXAxis>
        <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={7.2} maximum={8.1} interval={0.2}>
          <ChartAxisTitle text="Population in Billions" />
        </ChartPrimaryYAxis>
        <ChartTooltip enable={true} headerText="${point.x}" format="Population : <b>${point.y}B</b>" />
        <ChartSeriesCollection>
          <ChartSeries dataSource={numericData} xField="x" yField="y1" type="SplineArea" width={2} border={{ width: 2, color: '#0066cc' }} fill="url(#gradient-fill-range)">
            <ChartMarker visible={true} />
          </ChartSeries>
        </ChartSeriesCollection>
      </Chart>
    </div>
  );
}