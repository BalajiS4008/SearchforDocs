import { Browser } from '@syncfusion/react-base';
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisTitle, ChartAxisLabel } from '@syncfusion/react-charts';
import { useEffect, useRef, useState } from 'react';
import { useChartTheme } from './theme';
interface ChartData { x: number; y: number; }
export default function App() {
  const [chartData, setChartData] = useState<ChartData[]>([{ x: 0, y: 0 }]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { chartTheme } = useChartTheme();
  const generateRandomInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setChartData(prevData => {
        if (prevData.length > 350) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          return prevData;
        }
        const newCount = prevData.length;
        let newY: number;
        if (newCount > 350) {
          newY = generateRandomInteger(0, 1);
        } else if (newCount > 250) {
          newY = generateRandomInteger(-2, 1);
        } else if (newCount > 180) {
          newY = generateRandomInteger(-3, 2);
        } else if (newCount > 100) {
          newY = generateRandomInteger(-7, 6);
        } else if (newCount < 50) {
          newY = generateRandomInteger(-3, 3);
        } else {
          newY = generateRandomInteger(-9, 9);
        }
        return [...prevData, { x: newCount, y: newY }];
      });
    }, 30);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setChartData([{ x: 0, y: 0 }]);
    };
  }, []);
  return (
    <Chart transposed={true} theme={chartTheme}>
      <ChartPrimaryXAxis valueType={"Double"}>
        <ChartAxisTitle text="Time(s)" />
      </ChartPrimaryXAxis>
      <ChartPrimaryYAxis minimum={-15} maximum={15} interval={5}>
        <ChartAxisTitle text="Velocity(m/s)" />
        <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
      </ChartPrimaryYAxis>
      <ChartSeriesCollection>
        <ChartSeries dataSource={chartData} xField="x" yField="y" type="Line" fill={chartTheme.includes('Dark') ? '#77E4D4' : '#0A97B0'} animation={{ enable: false }} />
      </ChartSeriesCollection>
    </Chart>
  );
}