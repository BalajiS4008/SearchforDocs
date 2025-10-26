import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartMajorGridLines, ChartMajorTickLines, ChartTooltip, ChartMarker
} from '@syncfusion/react-charts'
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    const vietnamData = [
        { x: 2016, y: 7.8 },
        { x: 2017, y: 10.3 },
        { x: 2018, y: 15.5 },
        { x: 2019, y: 17.5 },
        { x: 2020, y: 19.5 },
        { x: 2021, y: 23.0 },
        { x: 2022, y: 20.0 },
        { x: 2023, y: 19.0 },
        { x: 2024, y: 22.1 }
    ];

    const indonesiaData = [
        { x: 2016, y: 4.8 },
        { x: 2017, y: 5.2 },
        { x: 2018, y: 6.2 },
        { x: 2019, y: 7.8 },
        { x: 2020, y: 9.3 },
        { x: 2021, y: 14.3 },
        { x: 2022, y: 15.6 },
        { x: 2023, y: 16.0 },
        { x: 2024, y: 17.0 }
    ];

    const franceData = [
        { x: 2016, y: 14.6 },
        { x: 2017, y: 15.5 },
        { x: 2018, y: 15.4 },
        { x: 2019, y: 14.4 },
        { x: 2020, y: 11.6 },
        { x: 2021, y: 13.9 },
        { x: 2022, y: 12.1 },
        { x: 2023, y: 10.0 },
        { x: 2024, y: 10.8 }
    ];

    const polandData = [
        { x: 2016, y: 8.9 },
        { x: 2017, y: 10.3 },
        { x: 2018, y: 10.8 },
        { x: 2019, y: 9.0 },
        { x: 2020, y: 7.9 },
        { x: 2021, y: 8.5 },
        { x: 2022, y: 7.4 },
        { x: 2023, y: 6.4 },
        { x: 2024, y: 7.1 }
    ];

    const mexicoData = [
        { x: 2016, y: 19.0 },
        { x: 2017, y: 20.0 },
        { x: 2018, y: 20.2 },
        { x: 2019, y: 18.4 },
        { x: 2020, y: 16.8 },
        { x: 2021, y: 18.5 },
        { x: 2022, y: 18.4 },
        { x: 2023, y: 16.3 },
        { x: 2024, y: 13.7 }
    ];
    return (
            <Chart theme={chartTheme}>
                
                <ChartPrimaryXAxis valueType={'Double'}>
                    <ChartMajorGridLines width={0}/>
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                    <ChartMajorTickLines width={0}/>
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={vietnamData} xField="x" yField="y" type="Line">
                        <ChartMarker visible={true} />
                    </ChartSeries>
                    <ChartSeries dataSource={indonesiaData} xField="x" yField="y" type="Line">
                        <ChartMarker visible={true} />
                    </ChartSeries>
                    <ChartSeries dataSource={franceData} xField="x" yField="y" type="Line">
                        <ChartMarker visible={true} />
                    </ChartSeries>
                    <ChartSeries dataSource={polandData} xField="x" yField="y" type="Line">
                        <ChartMarker visible={true} />
                    </ChartSeries>
                    <ChartSeries dataSource={mexicoData} xField="x" yField="y" type="Line">
                        <ChartMarker visible={true} />
                    </ChartSeries>
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText='' />
            </Chart>
    )
}