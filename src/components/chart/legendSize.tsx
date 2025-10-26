import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel, ChartMarker } from '@syncfusion/react-charts'
import { chinaSizeData, germanySizeData, spainSizeData, UKSizeData, usaSizeData } from './fossil-consume-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Annual Percentage Change in Fossil Fuel Consumption" />
            <ChartPrimaryXAxis valueType={'Category'}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={10}>
                <ChartAxisLabel format='{value}%' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={chinaSizeData} xField="x" yField="y" fill='#898AC4' name="China" type="Line" columnWidth={0.6} cornerRadius={{ topRight: 5, topLeft: 5 }} columnSpacing={0.1}>
                    <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={germanySizeData} xField="x" yField="y" fill='#B3C890' name="Germany" type="Line" columnWidth={0.6} cornerRadius={{ topRight: 5, topLeft: 5 }} columnSpacing={0.1}>
                    <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={spainSizeData} xField="x" yField="y" fill='#CD8D7A' name="Spain" type="Line" columnWidth={0.6} cornerRadius={{ topRight: 5, topLeft: 5 }} columnSpacing={0.1}>
                    <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={UKSizeData} xField="x" yField="y" fill='#D7B26D' name="U.K" type="Line" columnWidth={0.6} cornerRadius={{ topRight: 5, topLeft: 5 }} columnSpacing={0.1}>
                    <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={usaSizeData} xField="x" yField="y" fill='#6A9C89' name="USA" type="Line" columnWidth={0.6} cornerRadius={{ topRight: 5, topLeft: 5 }} columnSpacing={0.1}>
                    <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}"  format='${series.name} : <b>${point.y}</b>' />
            <ChartLegend visible={true} border={{ width: 2, color: chartTheme.includes('Dark') ? "#4e4b53" : "black" }} background={chartTheme.includes('Dark') ? "#2b2831": '#D3D3D3'} />
        </Chart>
    )
}