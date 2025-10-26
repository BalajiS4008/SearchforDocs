import {
    Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartArea, ChartTooltip, ChartMarker
} from '@syncfusion/react-charts'
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    const data = [
        { x: 'WW', y: 12, y1: 22, y2: 38.3, y3: 50 },
        { x: 'EU', y: 9.9, y1: 26, y2: 45.2, y3: 63.6 },
        { x: 'APAC', y: 4.4, y1: 9.3, y2: 18.2, y3: 20.9 },
        { x: 'LATAM', y: 6.4, y1: 28, y2: 46.7, y3: 65.1 },
        { x: 'MEA', y: 30, y1: 45.7, y2: 61.5, y3: 73 },
        { x: 'NA', y: 25.3, y1: 35.9, y2: 64, y3: 81.4 }
    ];
    return (
            <Chart theme={chartTheme}>
                <ChartArea border={{ width: 0 }} margin={{ bottom: 30, top: 30, right: 40, left: 40 }} />
                <ChartPrimaryXAxis valueType={'Category'}>
                    <ChartAxisLabel edgeLabelPlacement={"Shift"}/>
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                    <ChartAxisLabel format="{value}"/>
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={data} xField="x" yField="y" name="December 2007" type="Line">
                        <ChartMarker visible={true} />
                    </ChartSeries>
                    <ChartSeries dataSource={data} xField="x" yField="y1" name="December 2008" type="Line">
                        <ChartMarker visible={true} />
                    </ChartSeries>
                    <ChartSeries dataSource={data} xField="x" yField="y2" name="December 2009" type="Line">
                        <ChartMarker visible={true} />
                    </ChartSeries>
                    <ChartSeries dataSource={data} xField="x" yField="y3" name="December 2010" type="Line">
                        <ChartMarker visible={true} />
                    </ChartSeries>
                </ChartSeriesCollection>
                <ChartTooltip enable={true} showNearestTooltip={true} headerText='' />
                <ChartLegend visible={true} width='200' height='100' enablePages={false} />
            </Chart>
    )
}