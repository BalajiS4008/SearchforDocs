import { useEffect, useState, useContext } from 'react';
import { Chart, ChartAxisLabel, ChartAxisTitle, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTitle, ChartTooltip } from '@syncfusion/react-charts';
import { ThemeContext } from '../../common/context';
import { Browser } from '@syncfusion/react-base';

export default function App() {
  const [chartData, setChartData] = useState<{ Name: string; ProjectCount: number }[]>([]);
  const { themeName } = useContext(ThemeContext);
  const chartTheme = themeName === 'material3-dark' ? 'Material3Dark' : 'Material3';
  useEffect(() => {
    const processedData = [
      { Name: 'Paul Henriot', ProjectCount: 7 },
      { Name: 'Karin Josephs', ProjectCount: 25 },
      { Name: 'Mario Pontes', ProjectCount: 13 },
      { Name: 'Mary Saveley', ProjectCount: 19 },
      { Name: 'Martin Sommer', ProjectCount: 31 },
      { Name: 'Laurence Lebihan', ProjectCount: 11 },
      { Name: 'Elizabeth Lincoln', ProjectCount: 22 },
      { Name: 'Victoria Ashworth', ProjectCount: 15 }
    ];
    setChartData(processedData);
  }, []);
  return (
    <Chart theme={chartTheme}>
      <ChartTitle text='Employee Project Count' />
      <ChartPrimaryXAxis valueType="Category" lineStyle={{ width: 0 }}>
        <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : -45} />
      </ChartPrimaryXAxis>
      <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={10}>
        <ChartAxisTitle text='Projects Handled' />
      </ChartPrimaryYAxis>
      <ChartSeriesCollection>
        <ChartSeries type='Column' dataSource={chartData} xField='Name' yField='ProjectCount' fill='#FFCCE1' columnWidth={0.4} cornerRadius={{ topLeft: 10, topRight: 10 }} />
      </ChartSeriesCollection>
      <ChartTooltip enable={true} headerText='${point.x}'  format='Projects: <b>${point.y}</b>' />
    </Chart>
  );
}