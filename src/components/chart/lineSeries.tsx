import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartAxisTitle, ChartTitle } from '@syncfusion/react-charts'
import { vietnamData, indonesiaData, franceData, polandData, mexicoData } from './steel-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Annual Crude Steel Production by Country (2016–2024)' />
            <ChartPrimaryXAxis valueType={'Double'}/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} rangePadding='None' minimum={0} maximum={25} interval={5}>
                <ChartAxisTitle text='Volume in million metric tons' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={vietnamData} xField="x" yField="y" type="Line" name="Vietnam" fill={chartTheme.indexOf('Dark') > -1 ? "#9DACFF" : "#1A2A80"}>
                    <ChartMarker visible={true} />
                </ChartSeries>
                <ChartSeries dataSource={indonesiaData} xField="x" yField="y" type="Line" name="Indonesia" fill={chartTheme.indexOf('Dark') > -1 ? "#E34995" : "#D63384"}>
                    <ChartMarker visible={true} />
                </ChartSeries>
                <ChartSeries dataSource={franceData} xField="x" yField="y" type="Line" name="France" fill={chartTheme.indexOf('Dark') > -1 ? "#77E4D4" : "#0A97B0"}>
                    <ChartMarker visible={true} />
                </ChartSeries>
                <ChartSeries dataSource={polandData} xField="x" yField="y" type="Line" name="Poland" fill={chartTheme.indexOf('Dark') > -1 ? "#FF5733" : "#FF5733"}>
                    <ChartMarker visible={true} />
                </ChartSeries>
                <ChartSeries dataSource={mexicoData} xField="x" yField="y" type="Line" name="Mexico" fill={chartTheme.indexOf('Dark') > -1 ? "#9BB750" : "#84AA1D"}>
                    <ChartMarker visible={true}  />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${point.x}'  format='${series.name} : <b>${point.y}M</b>' />
        </Chart>
    )
}