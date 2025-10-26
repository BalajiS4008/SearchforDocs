import { useEffect, useState } from "react";
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartLegend, ChartMarker } from "@syncfusion/react-charts";
import { useChartTheme } from './theme';
export default function App() {
    const { chartTheme } = useChartTheme();
    const [data, setData] = useState([
        { x: 2006, y: 378 },
        { x: 2007, y: 416 },
        { x: 2008, y: 404 },
        { x: 2009, y: 390 },
        { x: 2010, y: 376 },
        { x: 2011, y: 365 }
    ]);
    useEffect(() => {
        const interval = setInterval(() => {
            // Update the data here. For example, you can add a new data point or modify existing ones.
            setData(prevData => {
                const newData = [...prevData];
                const lastYear = newData[newData.length - 1].x;
                const newYear = lastYear + 1;
                const newValue = Math.floor(Math.random() * 500); // Random value for demonstration
                newData.push({ x: newYear, y: newValue });
                return newData;
            });
        }, 1000); // Update every 1 second

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
    return (
        <Chart theme={chartTheme}>
            <ChartLegend visible={false} />
            <ChartPrimaryXAxis valueType="Category"/>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}/>
            <ChartSeriesCollection>
                <ChartSeries dataSource={data} xField="x" yField="y" width={2} name="India" type="StepLine">
                    <ChartMarker visible={true} />
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}
