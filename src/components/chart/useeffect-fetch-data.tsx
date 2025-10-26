import { Browser, Fetch } from '@syncfusion/react-base';
import { Chart, ChartAxisLabel, ChartAxisTitle, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTitle, ChartTooltip } from '@syncfusion/react-charts';
import { useEffect, useState } from 'react';
import { useChartTheme } from './theme';
export default function App() {
    const [data, setData] = useState<Order[]>([]);
    const url = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';
    const { chartTheme } = useChartTheme();
    interface Order {
        CustomerID: string;
        OrderID: number;
        Freight: number;
    }
    interface OrdersODataResponse {
        value: Order[];
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useEffect(() => {
        Fetch(url, 'GET', 'application/json').send?.()
            .then((response: Response) =>
                response as object as Promise<OrdersODataResponse>
            )
            .then((data) => {
                setData(data.value.slice(0, 12));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Freight Charges by Customer" />
            <ChartPrimaryXAxis lineStyle={{ width: 0 }} valueType='Category'>
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={40} minimum={0} maximum={200}>
                <ChartAxisTitle text="Freight (USD)" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries type='Column' dataSource={data} xField='CustomerID' yField='Freight' fill='#8DDFCB' cornerRadius={{ topLeft: Browser.isDevice ? 8 : 10, topRight: Browser.isDevice ? 8 : 10 }} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText="${point.x}"  format="Freight: <b>$${point.y}</b>" />
        </Chart>
    );
};
