import { Chart, ChartTitle, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartAxisTitle, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisLabel } from '@syncfusion/react-charts';
import { DataManager, WebApiAdaptor, Query } from '@syncfusion/react-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
  const data = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Orders',
    adaptor: new WebApiAdaptor()
  });
  // Create a query to take only 5 records
  const query = new Query().take(5);
  const { chartTheme } = useChartTheme();
  return (
    <Chart theme={chartTheme}>
      <ChartTitle text='Freight Charges by Customer (Top 5)' />
      <ChartPrimaryXAxis valueType='Category'>
        <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
      </ChartPrimaryXAxis>
      <ChartPrimaryYAxis maximum={8} interval={2} lineStyle={{ width: 0 }}>
        <ChartAxisTitle text='Freight (USD)' />
      </ChartPrimaryYAxis>
      <ChartSeriesCollection>
        <ChartSeries type='Column' dataSource={data} query={query} xField='CustomerID' yField='Freight' columnWidth={0.5} fill='#8DDFCB' cornerRadius={{ topLeft: Browser.isDevice ? 5 : 10, topRight: Browser.isDevice ? 5 : 10 }} />
      </ChartSeriesCollection>
      <ChartTooltip enable={true} headerText='${point.x}' format='Freight: <b>$${point.y}</b>' />
    </Chart>
  );
};