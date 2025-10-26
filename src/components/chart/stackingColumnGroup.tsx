import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel } from '@syncfusion/react-charts'
import { stackingColumnGroupData } from './stacking-group-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Steel Production by Countries, Grouped by Continent" />
            <ChartPrimaryXAxis valueType="Category" interval={1} />
            <ChartPrimaryYAxis maximum={60} interval={10} lineStyle={{ width: 0 }}>
                <ChartAxisLabel format='{value} Mmt' />
            </ChartPrimaryYAxis>
            <ChartTooltip enable={true} headerText="${point.x}" format='${series.name} : <b>${point.y}</b><br/> Total: <b>${point.tooltip} Mmt</b>' />
            <ChartSeriesCollection>
                <ChartSeries dataSource={stackingColumnGroupData} xField="x" yField="y1" name="Iran" type="StackingColumn" stackingGroup="Asia" columnSpacing={0.2} fill='#035B83' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white' }} legendShape='Circle' tooltipField='total' />
                <ChartSeries dataSource={stackingColumnGroupData} xField="x" yField="y2" name="Indonesia" fill='#FEB938' type="StackingColumn" stackingGroup="Asia" columnSpacing={0.2} border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white' }} legendShape='Circle' cornerRadius={{ topLeft: 5, topRight: 5 }} tooltipField='total' />
                <ChartSeries dataSource={stackingColumnGroupData} xField="x" yField="y3" name="Italy" fill='#7A5195' type="StackingColumn" stackingGroup="Europe" columnSpacing={0.2} border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white' }} legendShape='Circle' tooltipField='total' />
                <ChartSeries dataSource={stackingColumnGroupData} xField="x" yField="y4" name="France" fill='#EF5675' type="StackingColumn" stackingGroup="Europe" columnSpacing={0.2} border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white' }} legendShape='Circle' cornerRadius={{ topLeft: 5, topRight: 5 }} tooltipField='total' />
            </ChartSeriesCollection>
        </Chart>
    );
}