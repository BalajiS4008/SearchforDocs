import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartAxisTitle, ChartSeries, ChartSeriesCollection, ChartTitle, ChartTooltip, ChartAxisLabel } from '@syncfusion/react-charts';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/react-data';
import { Browser } from '@syncfusion/react-base';
import { useChartTheme } from './theme';
export default function App() {
  const { chartTheme } = useChartTheme();
  const data = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
    adaptor: new ODataV4Adaptor()
  });

  return (
    <Chart theme={chartTheme}>
      <ChartTitle text="Freight Charges by Customer" />
      <ChartPrimaryXAxis valueType="Category">
        <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
      </ChartPrimaryXAxis>
      <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={40} minimum={0} maximum={200}>
        <ChartAxisTitle text="Freight (USD)" />
      </ChartPrimaryYAxis>
      <ChartSeriesCollection>
        <ChartSeries type="Column" dataSource={data} query={new Query().take(10)} xField="CustomerID" yField="Freight" fill="#8DDFCB" cornerRadius={{ topLeft: Browser.isDevice ? 8 : 10, topRight: Browser.isDevice ? 8 : 10 }} />
      </ChartSeriesCollection>
      <ChartTooltip enable={true} headerText="${point.x}" format="Freight: <b>$${point.y}</b>" />
    </Chart>
  );
}