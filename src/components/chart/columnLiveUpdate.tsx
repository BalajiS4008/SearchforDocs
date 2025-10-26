import { useEffect, useState } from 'react';
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTitle, ChartAxisLabel, ChartMajorTickLines, ChartDataLabel, ChartMarker } from '@syncfusion/react-charts';
import { rectSeriesLiveUpdateData } from './product-sale-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    const [data, setData] = useState(rectSeriesLiveUpdateData);
    function getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    useEffect(() => {
        const id = setInterval(() => {
            setData(prevData => prevData.map(item => ({
                x: item.x,
                y: getRandomInt(10, 90),
                color: item.color,
                barColor: item.barColor
            })));
        }, 2500);
        return () => {
            clearInterval(id);
        };
    }, []);
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Sales by Product" />
            <ChartPrimaryXAxis valueType="Category">
                <ChartAxisLabel fontSize='12px' intersectAction='Rotate90' />
                <ChartMajorTickLines width={1} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0} maximum={100} interval={20}>
                <ChartAxisLabel format='{value}%' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={data} xField="x" yField="y" type="Column" colorField='color' columnWidth={0.5} cornerRadius={{ topLeft: Browser.isDevice ? 3 : 15, topRight: Browser.isDevice ? 3 : 15, bottomLeft: 0 }} >
                    <ChartMarker>
                        <ChartDataLabel visible={!Browser.isDevice} position='Top' />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}