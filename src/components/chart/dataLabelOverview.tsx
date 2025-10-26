import { 
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartMarker, ChartDataLabel
} from "@syncfusion/react-charts";
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    const columnData = [
        { country: "USA", gold: 50 },
        { country: "China", gold: 40 },
        { country: "Japan", gold: 70 },
        { country: "Australia", gold: 60 },
        { country: "France", gold: 50 },
        { country: "Germany", gold: 40 },
        { country: "Italy", gold: 40 },
        { country: "Sweden", gold: 30 }
    ];
    return (
        <Chart id="label-overview" theme={chartTheme}>
            <ChartPrimaryXAxis valueType="Category">                
            </ChartPrimaryXAxis>            
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>                
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={columnData} xField="country" yField="gold" type="Line">
                    <ChartMarker>
                        <ChartDataLabel visible={true} />
                    </ChartMarker>
                    </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}
