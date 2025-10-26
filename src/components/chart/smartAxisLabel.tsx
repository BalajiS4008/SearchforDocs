import {
    Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis,
    ChartSeries, ChartSeriesCollection, ChartMajorTickLines, ChartMajorGridLines, ChartAxisLabel, ChartArea, ChartTooltip,
} from '@syncfusion/react-charts'
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    const data = [
        { country: "South Korea", user: 39, dataLabelMappingName: "39M" },
        { country: "India", user: 61, dataLabelMappingName: "61M" },
        { country: "Pakistan", user: 20, dataLabelMappingName: "20M" },
        { country: "Germany", user: 65, dataLabelMappingName: "65M" },
        { country: "Australia", user: 16, dataLabelMappingName: "16M" },
        { country: "Italy", user: 29, dataLabelMappingName: "29M" },
        { country: "France", user: 45, dataLabelMappingName: "45M" },
        { country: "United Arab Emirates", user: 10, dataLabelMappingName: "10M" },
        { country: "Russia", user: 41, dataLabelMappingName: "41M" },
        { country: "Mexico", user: 31, dataLabelMappingName: "31M" },
        { country: "Brazil", user: 76, dataLabelMappingName: "76M" },
        { country: "China", user: 51, dataLabelMappingName: "51M" }
    ]
    return (
            <Chart theme={chartTheme}>
                <ChartArea border={{ width: 0 }} margin={{ bottom: 30, top: 30, right: 40, left: 40 }} />
                <ChartPrimaryXAxis valueType={'Category'}>
                    <ChartMajorGridLines width={0}/>
                    <ChartAxisLabel color="black" intersectAction="Hide" edgeLabelPlacement={"Shift"} rotationAngle={45} maxLabelWidth={34} enableTrim={false}/>
                    <ChartMajorTickLines width={0}/>   
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                    <ChartAxisLabel fontSize="0px" format="{value}"/>
                    <ChartMajorTickLines width={0}/>
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={data} xField="country" yField="user" name="Users" type="Column" columnWidth={0.4} cornerRadius={{ topLeft: 4, topRight: 4}}/>
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText=""  format="${point.x} <br> Internet Users : <b>${point.y}M</b>"/>
                <ChartLegend visible={false}/>
            </Chart>
    )
}