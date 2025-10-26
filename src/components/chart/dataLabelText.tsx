import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartMarker, ChartDataLabel, ChartTitle, ChartTooltip } from "@syncfusion/react-charts";
import { dataLabelTextMappingData } from './text-mapping-data';
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} >
            <ChartTitle text="Coal Production Per Capita, 2024" />
            <ChartPrimaryXAxis valueType="Category">
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis visible={false} maximum={160000}>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={dataLabelTextMappingData} xField="x" yField="y" type="Bar" fill="#A0D683" cornerRadius={{ topRight: 5, bottomRight: 5 }}  tooltipField="text" >
                    <ChartMarker>
                        <ChartDataLabel visible={true} labelField="text" />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="Coal Production"  format="${point.x} : <b>${point.tooltip}</b>"/>
        </Chart>
        
    );
}