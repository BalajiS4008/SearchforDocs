import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartMarker, ChartDataLabel, ChartAxisLabel, ChartTitle } from "@syncfusion/react-charts";
import { lineLabelData } from './egg-price-data';
import { useChartTheme } from "./theme";

export default function App() {
    const { chartTheme } = useChartTheme();
    const seriesColor = chartTheme.indexOf('Dark') > -1 ? '#77E4D4' : '#0A97B0';
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Average Monthly Egg Prices in 2022" />
            <ChartTooltip enable={true} headerText="${point.x}"  format='Price : <b>${point.y}</b>' />
            <ChartPrimaryXAxis valueType="Category" />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={1.5}>
                <ChartAxisLabel format='${value}' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={lineLabelData} xField="x" yField="y" type="Line" fill={seriesColor}>
                    <ChartMarker visible={true} filled={false}>
                        <ChartDataLabel visible={true} border={{ width: 2, color: seriesColor }} />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}