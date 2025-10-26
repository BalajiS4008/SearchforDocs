import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartAxisLabel, ChartTitle, ChartMajorGridLines } from '@syncfusion/react-charts'
import { steplineTransposedData } from './unemployee-data';
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} transposed={true}>
            <ChartTitle text='Unemployment rate 1975 - 2010' />            
            <ChartPrimaryXAxis valueType={'Category'}>                
                <ChartMajorGridLines width={1} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis>
                <ChartAxisLabel format='{value}%' />
                <ChartMajorGridLines width={1} />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={steplineTransposedData} xField="x" yField="y1" width={2} type="StepLine" name='China' fill={chartTheme.indexOf('Dark') > -1 ? "#7F9CFE" : "#0A30AE"}>
                    <ChartMarker visible={true} shape='Circle' />
                </ChartSeries>
                <ChartSeries dataSource={steplineTransposedData} xField="x" yField="y2" width={2} type="StepLine" name="Australia" fill={chartTheme.indexOf('Dark') > -1 ? "#EE884E" :"#E3651D"}>
                    <ChartMarker visible={true} shape='Circle' />
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${series.name}' />
        </Chart>
    )
}