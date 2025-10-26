import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartTooltip, ChartSeries, ChartSeriesCollection, ChartAxisTitle, ChartMarker, ChartTitle, ChartAxisLabel } from "@syncfusion/react-charts";
import { numericData } from './numeric-data';
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <div>
            <svg style={{ height: 0 }}>
                <defs>
                    <linearGradient id="gradient-fill-range" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="10%" stopColor="#5433FF40" />
                        <stop offset="100%" stopColor="#5433FF" />
                    </linearGradient>
                </defs>
            </svg>
            <Chart theme={chartTheme}>                
                <ChartTitle text="World Population by Year" />
                <ChartPrimaryXAxis valueType="Double" minimum={2018} maximum={2023} interval={1}>                    
                    <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={7.6} maximum={8.1} interval={0.1}>                    
                    <ChartAxisTitle text="Population in Billions" />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={numericData} xField="x" yField="y1" type="SplineArea" width={2} opacity={0.6} border={{ width: 2, color: '#0066cc' }} fill="url(#gradient-fill-range)" >
                        <ChartMarker visible={true} />
                    </ChartSeries>
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText="${point.x}" format="Population : <b>${point.y}B</b>" />
            </Chart>
        </div>
    );
}