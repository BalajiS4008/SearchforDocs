import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartLegend, ChartTitle, ChartAxisLabel } from '@syncfusion/react-charts'
import { stackingColumnGroupData } from './stacking-group-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Steel Production by Countries, Grouped by Continent"/>            
            <ChartPrimaryXAxis valueType="Category" interval={1}/>
            <ChartPrimaryYAxis maximum={60} interval={10} lineStyle={{ width: 0 }}>
                <ChartAxisLabel rotationAngle={ Browser.isDevice ? -45 : 0 } format='{value} Mmt' />
            </ChartPrimaryYAxis>
            <ChartLegend visible={true} />
            <ChartTooltip enable={true} headerText="${point.x}"  format='${series.name} : <b>${point.y}</b><br/> Total : <b>${point.tooltip} Mmt</b>' />
            <ChartSeriesCollection>
                <ChartSeries dataSource={stackingColumnGroupData} xField="x" yField="y1" name="Iran" type="StackingBar" stackingGroup="Asia" columnSpacing={0.2} fill="#E195AB" legendShape='Circle' tooltipField='total' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}}/>
                <ChartSeries dataSource={stackingColumnGroupData} xField="x" yField="y2" name="Indonesia" type="StackingBar" stackingGroup="Asia" columnSpacing={0.2} fill="#7E99A3" legendShape='Circle' cornerRadius={{ bottomRight: 10, topRight: 10 }} tooltipField='total' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}}/>                
                <ChartSeries dataSource={stackingColumnGroupData} xField="x" yField="y3" name="Italy" type="StackingBar" stackingGroup="Europe" columnSpacing={0.2} fill="#67BFA2" legendShape='Circle' tooltipField='total' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} />
                <ChartSeries dataSource={stackingColumnGroupData} xField="x" yField="y4" name="France" type="StackingBar" stackingGroup="Europe" columnSpacing={0.2} fill="#B2CD9C" legendShape='Circle' cornerRadius={{ bottomRight: 10, topRight: 10 }} tooltipField='total' border={{ width: 1, color: chartTheme.includes('Dark') ? 'black' : 'white'}} />                
            </ChartSeriesCollection>
        </Chart>
    );
}
