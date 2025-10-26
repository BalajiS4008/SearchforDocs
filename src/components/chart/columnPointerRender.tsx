import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisTitle, ChartTitle, ChartAxisLabel } from "@syncfusion/react-charts"
import { columnPointerData } from './agriculation-data';
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>            
            <ChartTitle text="Percentage of U.S Agricultural Trade By Market" />
            <ChartPrimaryXAxis valueType={'Category'} interval={1}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={10}>                
                <ChartAxisLabel format="{value}%" />
                <ChartAxisTitle text="Percentage of total" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={columnPointerData} xField="market" yField="percentage" type='Column' tooltipField="Dollar" cornerRadius={{ topLeft: 4, topRight: 4 }} columnWidth={0.3} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true}  format='Market: ${point.x}<br/> Dollar Amount: <b>${point.tooltip}</b> <br/> Percentage of Total: <b>${point.y}</b>' />
        </Chart>
    )
}