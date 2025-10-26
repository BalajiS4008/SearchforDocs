import { useState } from "react";
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartTooltip, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts";
import { synchronizedData } from './date-time-data';
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";
import { DropDownList } from '@syncfusion/react-dropdowns';
const dropdownFields = { text: 'text', value: 'value' };
const labelFormats: { [key: string]: unknown }[] = [
  { text: "EEEE", value: "EEEE" },
  { text: "y/M/d", value: "y/M/d" },
  { text: "MMM", value: "MMM" },
  { text: "h:mm", value: "h:mm" },
  { text: "h:mm:ss", value: "h:mm:ss" },
  { text: "y MMM", value: "y MMM" }
];
export default function App() {
  const { chartTheme } = useChartTheme();
  const [labelFormat, setLabelFormat] = useState("y MMM");
  return (
    <div>
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '186px' }}>
        <label style={{ fontWeight: 700, whiteSpace: 'nowrap' }}> Label Format</label>
        <DropDownList width={170} dataSource={labelFormats as { [key: string]: object }[]} value={labelFormat} fields={dropdownFields} onChange={(e) => {
          if (e && e.value !== undefined) {
            setLabelFormat(e.value as string);
          }
        }} />
      </div>
      <Chart theme={chartTheme}>
        <ChartTitle text="USD to SGD Performance" />
        <ChartPrimaryXAxis valueType={"DateTime"} minimum={new Date(2023, 1, 18)} maximum={new Date(2023, 7, 18)}>
          <ChartAxisLabel format={labelFormat} rotationAngle={Browser.isDevice ? -45 : 0} />
        </ChartPrimaryXAxis>
        <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={1.30} maximum={1.37} interval={0.0175}>
          <ChartAxisLabel format="${value}" />
        </ChartPrimaryYAxis>
        <ChartSeriesCollection>
          <ChartSeries dataSource={synchronizedData} xField="USD" yField="SGD" type="Line" width={2} fill="#E82561" />
        </ChartSeriesCollection>
        <ChartTooltip enable={true} format='${point.x}: <b>${point.y}</b>' />
      </Chart>
    </div>
  );
}
