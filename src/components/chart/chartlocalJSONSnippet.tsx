import { Chart, ChartSeriesCollection, ChartSeries, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartTooltip, ChartAxisTitle, ChartTitle,  ChartAxisLabel } from '@syncfusion/react-charts';
import { employeeDetails } from './employee-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Employee Performance' />            
            <ChartPrimaryXAxis valueType="Category" lineStyle={{ width: 0 }}>                
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0} interval={20} maximum={100}>
                <ChartAxisTitle text='Performance (out of 100)' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={employeeDetails} xField="FirstName" yField="PerformanceScore" type="Column" fill='#43CDFF' columnWidth={0.4} cornerRadius={{ topLeft: 10, topRight: 10 }} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${point.x}'  format='Performance: <b>${point.y}</b>'/>
        </Chart>
    );
}