import { Chart, ChartSeries, ChartSeriesCollection, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartRows, ChartRow, ChartAxes, ChartAxis, ChartMarker, ChartDataLabel, ChartAxisLabel, ChartAxisTitle, ChartTitle, ChartTooltip } from "@syncfusion/react-charts"
import { multipleRowWeatherData } from "./weather-data";
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Annual Weather in New York, USA" />
            <ChartAxisTitle text="Annual Weather in New York, USA" overflow="Wrap" />
            <ChartPrimaryXAxis valueType="Category">
                <ChartAxisLabel />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis maximum={6} minimum={0} interval={1}>
                <ChartAxisTitle text="Precipitation, inch" />
            </ChartPrimaryYAxis>
            <ChartRows>
                <ChartRow height="50%" />
                <ChartRow height="50%" />
            </ChartRows>
            <ChartAxes>
                <ChartAxis maximum={100} minimum={20} interval={20} name="TemperatureAxis" rowIndex={1} opposedPosition={true}>
                    <ChartAxisTitle text="Temperature, °F" />
                </ChartAxis>
            </ChartAxes>
            <ChartSeriesCollection>
                <ChartSeries dataSource={multipleRowWeatherData} type="Spline" xField="x" fill="#ED3500" yField="averageTemperatureF" yAxisName="TemperatureAxis" width={2} opacity={1} name="Average Temperature" legendShape="Rectangle">
                    <ChartMarker visible={!Browser.isDevice} filled={true} height={10} width={10} shape="Circle">
                        <ChartDataLabel visible={!Browser.isDevice} format="{value} °F" borderRadius={{ x: 0, y: 0 }} />
                    </ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={multipleRowWeatherData} type="Column" fill="#4E71FF" xField="x" yField="precipitationInch" name="Precipitation" legendShape="Rectangle" columnWidth={0.5} cornerRadius={{ topLeft: 4, topRight: 4 }}>
                    <ChartMarker>
                        <ChartDataLabel visible={!Browser.isDevice} format="{value}" rotationAngle={Browser.isDevice ? -90 : 0} enableRotation={Browser.isDevice} />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
            <ChartTooltip enable={true} showNearestTooltip={false}  headerText="${point.x}" format="${series.name} : <b>${point.y}</b>" />
        </Chart>
    );
}