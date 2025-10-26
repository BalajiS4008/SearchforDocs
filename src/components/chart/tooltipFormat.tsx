import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartArea, ChartTooltip, ChartAxisLabel, ChartTitle, ChartAxisTitle } from "@syncfusion/react-charts";
import { exportData, importData } from './import-data'
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="U.S. Agricultural Trade" />
            <ChartArea border={{ width: 0 }} />
            <ChartTooltip enable={true} showMarker={false} headerText=""
                 format='Trade Type : <b>${series.name}</b><br/>Calender Year : <b>${point.x}</b><br/>Amount : <b>$${point.y}</b>' />
            <ChartPrimaryXAxis minimum={1990} maximum={2020}/>
            <ChartPrimaryYAxis minimum={0} maximum={180} interval={30}>
                <ChartAxisLabel format='{value}B'/>
                <ChartAxisTitle text="USD"/>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries type="Line" width={3} fill={"#FF8225"} dataSource={exportData} xField="x" yField="y" name="Exports" />
                <ChartSeries type="Line" width={3} fill={"#0A97B080"} dataSource={importData} xField="x" yField="y" name="Imports" />
            </ChartSeriesCollection>
        </Chart>
    );
}
