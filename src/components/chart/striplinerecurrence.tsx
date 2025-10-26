import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMajorGridLines, ChartTitle, ChartAxisLabel, ChartStripLines, ChartStripLine, ChartMinorTickLines } from '@syncfusion/react-charts'
import { allSourcesData, autosData } from './pollution-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='World Pollution Report' />            
            <ChartPrimaryXAxis valueType={'DateTime'} intervalType='Years' minimum={new Date(1965, 1, 1)} maximum={new Date(2010, 1, 1)}>
                <ChartMinorTickLines width={0}/>
                <ChartAxisLabel edgeLabelPlacement='Shift' format='yyyy' />
                <ChartStripLines>
                    <ChartStripLine range={{ shouldStartFromAxis: true, size: 5, sizeType: 'Years'}} repeat={{enable: true, every: 10 }} visible={true} style={{ color:'rgba(167,169,171, 0.1)'}} />
                </ChartStripLines>
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis minimum={0} maximum={18000} interval={2000} lineStyle={{ width: 0 }}>
                <ChartMajorGridLines color='rgba(167,169,171, 0.3)' />                
                <ChartAxisLabel color='transparent' />
                <ChartStripLines>
                    <ChartStripLine range={{ shouldStartFromAxis: true, size: 2000 }} repeat={{enable: true, every: 4000 }} visible={true} style={{ color:'rgba(167,169,171, 0.1)'}} />
                </ChartStripLines>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={allSourcesData} xField="x" yField="y" type="Column" fill='#00C58D' name="All sources" columnWidth={0.8} columnSpacing={0.2} cornerRadius={{topLeft: 5, topRight: 5}}/>
                <ChartSeries dataSource={autosData} xField="x" yField="y" type="Column" fill='#DA7DD4' name="Autos & Light Trucks" columnWidth={0.8} columnSpacing={0.2} cornerRadius={{topLeft: 5, topRight: 5}} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true}  format='Year: ${point.x}<br> Tons Per Day: <b>${point.y}</b>' />
        </Chart>
    )
}