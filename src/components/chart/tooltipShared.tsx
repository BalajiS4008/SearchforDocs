import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisTitle, ChartAxisLabel } from "@syncfusion/react-charts"
import { populationData } from './population-data'
import { useChartTheme } from './theme';
import { Browser } from "@syncfusion/react-base";
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} enableSideBySidePlacement={false}>
            <ChartTitle text="Population Distribution of the Top 5 Most Populous Countries (2024)" />
            <ChartPrimaryXAxis valueType={'Category'}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={300}>
                <ChartAxisTitle text="Inhabitants (Millions)" />
                <ChartAxisLabel format="{value}M" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={populationData} name='Total' xField="country" yField="population" type="Column" fill="#7A4BFD" columnWidth={0.4} columnSpacing={0.4} cornerRadius={{ topLeft: 4, topRight: 4 }} legendShape="Rectangle" />
                <ChartSeries dataSource={populationData} name='Male' xField="country" yField="male" type="Column" fill="#FE825C" columnWidth={0.3} columnSpacing={0.4} cornerRadius={{ topLeft: 4, topRight: 4 }} legendShape="Rectangle" />
                <ChartSeries dataSource={populationData} name='Female' xField="country" yField="female" type="Column" fill="#FFDE63" columnWidth={0.2} columnSpacing={0.4} cornerRadius={{ topLeft: 4, topRight: 4 }} legendShape="Rectangle" />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} shared={true} />
        </Chart>
    )
}