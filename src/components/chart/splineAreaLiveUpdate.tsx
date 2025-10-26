import { useEffect, useRef, useState } from "react";
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTitle, ChartComponentProps, ChartMarker, ChartAxisLabel } from '@syncfusion/react-charts'
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";
const initialData = [
    { x: new Date(2020, 0, 1, 10, 0), y: 21.5 },
    { x: new Date(2020, 0, 1, 10, 1), y: 24.0 },
    { x: new Date(2020, 0, 1, 10, 2), y: 41.3 },
    { x: new Date(2020, 0, 1, 10, 3), y: 49.5 },
    { x: new Date(2020, 0, 1, 10, 4), y: 61.0 },
    { x: new Date(2020, 0, 1, 10, 5), y: 48.6 },
    { x: new Date(2020, 0, 1, 10, 6), y: 39.5 },
    { x: new Date(2020, 0, 1, 10, 7), y: 42.1 }
];
export default function App() {
    const { chartTheme } = useChartTheme();
    const chartRef = useRef<ChartComponentProps>(null);
    const [dataSource, setDataSource] = useState(initialData);
    const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const getRandomValue = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const addPoint = () => {
        setDataSource(prevData => {
            if (prevData.length === 0) {
                return prevData;
            }
            const newData = [...prevData];
            const lastPoint = newData[newData.length - 1];
            const newMinute = new Date(lastPoint.x);
            newMinute.setMinutes(newMinute.getMinutes() + 1);
            const lastY = lastPoint.y;
            const newY = Math.max(5, Math.min(60, lastY + getRandomValue(-15, 15)));
            
            newData.push({ x: newMinute, y: newY });
            return newData;
        });
    };

    const removeFirstPoint = () => {
        setDataSource(prevData => {
            if (prevData.length === 0) {
                return prevData;
            }
            const newData = [...prevData];
            return newData.slice(1);
        });
    };
    const updateData = () => {
        addPoint();
        setTimeout(() => {
            removeFirstPoint();
        }, 1000);
    };
    useEffect(() => {
        intervalRef.current = setInterval(updateData, 2000);
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, []);
    return (
        <Chart ref={chartRef} theme={chartTheme}>            
            <ChartTitle text={'Live Spline Area Chart'} />
            <ChartPrimaryXAxis valueType={'DateTime'} interval={1} lineStyle={{ width: 0 }} intervalType="Minutes">                
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis valueType={'Double'} maximum={70} lineStyle={{ width: 0 }}>
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={dataSource} xField="x" yField="y" type="SplineArea" opacity={0.4} fill="#D6FF89" width={2} border={{ width: 2, color: chartTheme.includes('Dark') ? "#A3E920" : "#71AD01"}} animation={{ enable: true, duration: 500 }}>
                    <ChartMarker visible={true} fill={chartTheme.includes('Dark') ? "#D6FF89" : "#71AD01"} border={{width: 2, color: chartTheme.includes('Dark') ? "#D6FF89" : "#71AD01"}}></ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}