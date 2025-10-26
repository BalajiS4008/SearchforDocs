import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartTitle, ChartAxisLabel, ChartAxisTitle } from '@syncfusion/react-charts'
import { pagingData } from './legend-paging-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Renewable Sources Used to Generate Electricity for Transport Fuels' />
            <ChartPrimaryXAxis valueType={'Category'} intervalType='Years' />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                <ChartAxisLabel format='{value}' />
                <ChartAxisTitle text='Kilotonnes of Oil Equivalent (ktoe)' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={pagingData} xField="year" yField="Onshore wind" name="Onshore wind" width={2} type="Spline" animation={{ enable: false }} fill='#FF9874'>
                    <ChartMarker visible={!Browser.isDevice} />
                </ChartSeries>
                <ChartSeries dataSource={pagingData} xField="year" yField="Offshore wind" name="Offshore wind" width={2} type="Spline" animation={{ enable: false }} fill='#D2649A'>
                    <ChartMarker visible={!Browser.isDevice} />
                </ChartSeries>
                <ChartSeries dataSource={pagingData} xField="year" yField="Marine energy" name="Marine energy" width={2} type="Spline" animation={{ enable: false }} fill='#7D8ABC'>
                    <ChartMarker visible={!Browser.isDevice} />
                </ChartSeries>
                <ChartSeries dataSource={pagingData} xField="year" yField="Solar photovoltaics" name="Solar photovoltaics" width={2} type="Spline" animation={{ enable: false }} fill='#7695FF'>
                    <ChartMarker visible={!Browser.isDevice} />
                </ChartSeries>
                <ChartSeries dataSource={pagingData} xField="year" yField="Small scale Hydro" name="Small scale Hydro" width={2} type="Spline" animation={{ enable: false }} fill='#898AC4'>
                    <ChartMarker visible={!Browser.isDevice} />
                </ChartSeries>
                <ChartSeries dataSource={pagingData} xField="year" yField="Large scale Hydro" name="Large scale Hydro" width={2} type="Spline" animation={{ enable: false }} fill='#B3C890'>
                    <ChartMarker visible={!Browser.isDevice} />
                </ChartSeries>
                <ChartSeries dataSource={pagingData} xField="year" yField="Plant biomass" name="Plant biomass" width={2} type="Spline" animation={{ enable: false }} fill='#CD8D7A'>
                    <ChartMarker visible={!Browser.isDevice} />
                </ChartSeries>
                <ChartSeries dataSource={pagingData} xField="year" yField="Animal biomass" name="Animal biomass" width={2} type="Spline" animation={{ enable: false }} fill='#D7B26D'>
                    <ChartMarker visible={!Browser.isDevice} />
                </ChartSeries>
                <ChartSeries dataSource={pagingData} xField="year" yField="Landfill gas" name="Landfill gas" width={2} type="Spline" animation={{ enable: false }} fill='#286944ff'>
                    <ChartMarker visible={!Browser.isDevice} />
                </ChartSeries>
                <ChartSeries dataSource={pagingData} xField="year" yField="Sewage gas" name="Sewage gas" width={2} type="Spline" animation={{ enable: false }} fill='#6A9C89'>
                    <ChartMarker visible={!Browser.isDevice} />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${point.x}'  format='${series.name}: <b>${point.y}</b>' />
            <ChartLegend visible={true} width='315' height='50' />
        </Chart>
    )
}