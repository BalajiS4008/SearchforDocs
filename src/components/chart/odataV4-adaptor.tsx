import { Chart, ChartTitle, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartAxisTitle, ChartSeries, ChartSeriesCollection, ChartTooltip } from '@syncfusion/react-charts';
import { DataManager, ODataV4Adaptor } from '@syncfusion/react-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const data = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
        adaptor: new ODataV4Adaptor()
    });
    const { chartTheme } = useChartTheme();
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Freight Charges by Customer' />
            <ChartPrimaryXAxis valueType='Category' />
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={200} minimum={0} maximum={1200}>
                <ChartAxisTitle text='Freight (USD)' />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries type='Column' dataSource={data} xField='CustomerID' fill='#8DDFCB' yField='Freight' cornerRadius={{ topLeft: Browser.isDevice ? 1 : 2, topRight: Browser.isDevice ? 1 : 2 }} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${point.x}'  format='Freight: <b>$${point.y}</b>' />
        </Chart>
    );
}