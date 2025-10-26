import { useState } from 'react';
import { Chart, ChartAxisLabel, ChartAxisTitle, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTitle, ChartTooltip } from '@syncfusion/react-charts';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';

export default function App() {
  const { chartTheme } = useChartTheme();
  const [chartData] = useState([
    { EmployeeID: 10248, Name: 'Paul Henriot', TasksCompleted: 25 },
    { EmployeeID: 10249, Name: 'Karin Josephs', TasksCompleted: 32 },
    { EmployeeID: 10250, Name: 'Mario Pontes', TasksCompleted: 28 },
    { EmployeeID: 10251, Name: 'Mary Saveley', TasksCompleted: 19 },
    { EmployeeID: 10252, Name: 'Martin Sommer', TasksCompleted: 34 },
    { EmployeeID: 10253, Name: 'Laurence Lebihan', TasksCompleted: 23 },
    { EmployeeID: 10254, Name: 'Elizabeth Lincoln', TasksCompleted: 29 },
    { EmployeeID: 10255, Name: 'Victoria Ashworth', TasksCompleted: 27 }
  ]);
  return (
    <Chart theme={chartTheme}>
      <ChartTitle text='Employee Task Completion' />
      <ChartPrimaryXAxis valueType="Category" lineStyle={{ width: 0 }}>
        <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : -45} />
      </ChartPrimaryXAxis>
      <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={10}>
        <ChartAxisTitle text='Tasks Completed' />
      </ChartPrimaryYAxis>
      <ChartSeriesCollection>
        <ChartSeries type="Column" dataSource={chartData} xField="Name" yField="TasksCompleted" fill='#98A1EA' columnWidth={0.4} cornerRadius={{ topLeft: 10, topRight: 10 }} />
      </ChartSeriesCollection>
      <ChartTooltip enable={true} headerText='${point.x}'  format='Tasks Completed: <b>${point.y}</b>' />
    </Chart>
  );
}