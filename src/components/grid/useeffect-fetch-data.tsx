import { Fetch } from '@syncfusion/react-base';
import { Grid, Columns, Column, PageSettings, SortSettings, ClipMode, TextAlign } from '@syncfusion/react-grid';
import { useEffect, useState } from 'react';

interface OrdersODataResponse {
  value: Order[];
}

interface Order {
  OrderID: number;
  CustomerID: string;
  OrderDate: Date;
  Freight: number;
  ShippedDate: Date;
  ShipCountry: string;
}

export default function App() {
    // State to store fetched order data.
    const [data, setData] = useState<Order[]>([]);

    // OData service URL for fetching order data.
    const url = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';

    // Enables pagination with defined page count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageCount: 4 });

    // Enables sorting on grid columns.
    const [sortSettings] = useState<SortSettings>({ enabled: true });

    // Fetches data from OData service on component mount.
    useEffect(() => {
        Fetch(url, 'GET', 'application/json').send?.()
            .then((response: Response) =>
                response as object as Promise<OrdersODataResponse>
            )
            .then((data) => {
                setData(data.value);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Grid dataSource={data} pageSettings={pageSettings} sortSettings={sortSettings} >
                <Columns>
                    <Column field="OrderID" headerText="Order ID" width={120} textAlign={TextAlign.Right} />
                    <Column field="CustomerID" headerText="Customer ID" width={120} />
                    <Column field="ShipName" headerText="Ship Name" width={190} clipMode={ClipMode.EllipsisWithTooltip} />
                    <Column field="ShipCity" headerText="Ship City" width={115} />
                    <Column field="ShipCountry" headerText="Ship Country" width={120} />
                    <Column field="Freight" headerText="Freight Charges" width={130} textAlign={TextAlign.Right} format="C2" />
                </Columns>
            </Grid>
        </div>
    );
};
