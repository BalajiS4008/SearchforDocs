import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartTooltip, ChartSeries, ChartSeriesCollection, ChartTitle, ChartAxisLabel } from "@syncfusion/react-charts"
import { smartPhoneData } from './smart-phones-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Total Sales by Product' />            
            <ChartPrimaryXAxis valueType={'Category'}>                
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} maxLabelDensity={1} maximum={800}>                
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={smartPhoneData} xField="x" yField="y" type="Column" fill="#43CDFF" columnWidth={0.4} cornerRadius={{ topLeft: 10, topRight: 10 }} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}"  format='Sales : <b>${point.y} units</b>' />
        </Chart>
    );
}