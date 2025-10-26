import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartTitle, ChartAxisLabel } from "@syncfusion/react-charts";
import { groupingsepartorData } from './numeric-group-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} >
            <ChartTitle text="World Population by Year" />            
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={7000000000}/>
            <ChartPrimaryXAxis valueType="Category" interval={1}>                
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartTooltip enable={true} headerText="${point.x}"  format='Population : <b>${point.y}</b>' />
            <ChartSeriesCollection>
                <ChartSeries dataSource={groupingsepartorData} xField="x" yField="y" type="Column" columnWidth={0.5} colorField="color" cornerRadius={{ topLeft: 5, topRight: 5 }} />
            </ChartSeriesCollection>
        </Chart>
    );
}