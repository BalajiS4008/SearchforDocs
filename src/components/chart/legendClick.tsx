import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel } from '@syncfusion/react-charts'
import { legendData } from './olympic-medal-data'
import { useState } from 'react';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const [seriesVisible, setSeriesVisible] = useState(true);
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme} onLegendClick={() => {
            setSeriesVisible(!seriesVisible);
        }}>
            <ChartTitle text="Paris 2024 Olympics: Medal Count by Country" />
            <ChartPrimaryXAxis valueType={'Category'}>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries visible={seriesVisible} dataSource={legendData} xField="x" yField="gold" fill='#FA7070' name="Gold" type="Column" columnWidthInPixel={30} cornerRadius={{ topRight: 15, topLeft: 15 }} columnSpacing={0.1} />
                <ChartSeries visible={seriesVisible} dataSource={legendData} xField="x" yField="sliver" fill='#97BFB4' name="Sliver" type="Column" columnWidthInPixel={30} cornerRadius={{ topRight: 15, topLeft: 15 }} columnSpacing={0.1} />
                <ChartSeries visible={seriesVisible} dataSource={legendData} xField="x" yField="bronze" fill='#D9AF5D' name="Bronze" type="Column" columnWidthInPixel={30} cornerRadius={{ topRight: 15, topLeft: 15 }} columnSpacing={0.1} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}"  format='${series.name} : <b>${point.y}</b>' />
            <ChartLegend visible={true} />
        </Chart>
    )
}