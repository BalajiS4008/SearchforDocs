import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartMarker, ChartDataLabel, ChartTitle, ChartAxisLabel, ChartTooltip } from "@syncfusion/react-charts";
import { dataLabelOverviewData } from './income-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Real Household Income Per Capita and Real GDP Per Capita"/>
            <ChartPrimaryXAxis valueType="Category">
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -90 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                <ChartAxisLabel format="n1"></ChartAxisLabel>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={dataLabelOverviewData} fill="#BA7DDA" xField="x" yField="y1" type="Column" columnSpacing={0.2} cornerRadius={{ topRight: 5, topLeft: 5 }} name="Household Income - Q1 2025" tooltipFormat="Household Income - Q1 2025 : <b>${point.y}%</b>">
                    <ChartMarker>
                            <ChartDataLabel visible={true}  enableRotation={Browser.isDevice} rotationAngle={Browser.isDevice ? -90 : 0} />
                        </ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={dataLabelOverviewData} fill="#00C5BC" xField="x" yField="y2" type="Column" columnSpacing={0.2} cornerRadius={{ topRight: 5, topLeft: 5 }} name="GDP - Q1 2025" tooltipFormat="GDP - Q1 2025 : <b>${point.y}%</b>">
                    <ChartMarker>
                            <ChartDataLabel visible={true} enableRotation={Browser.isDevice} rotationAngle={Browser.isDevice ? -90 : 0} />
                        </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}" format="${series.name} : <b>${point.y}%</b>" />
        </Chart>
    );
}
