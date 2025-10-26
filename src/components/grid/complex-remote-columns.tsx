import { Grid, Columns, Column, SortSettings, PageSettings, ClipMode, TextAlign } from '@syncfusion/react-grid';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/react-data';
import { useState } from 'react';

export default function App() {
    // Enable sorting in the grid.    
    const [sortSettings] = useState<SortSettings>({enabled: true});

    // Enable pagination with defined page size and count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });

    // Configure remote data source using OData V4 service.
    const data = new DataManager({
        adaptor: new ODataV4Adaptor(),
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/'
    });
    const query = new Query().expand('Customer');
    
    return <Grid dataSource={data} query={query} sortSettings={sortSettings} pageSettings={pageSettings}>
        <Columns>
            <Column field='OrderID' headerText='Order ID' width='90' textAlign={TextAlign.Right} />
            <Column field='Customer.CustomerID' headerText='Customer ID' width='100' />
            <Column field='ShipAddress' headerText='Ship Address' clipMode={ClipMode.EllipsisWithTooltip} width='130' />
            <Column field='ShipCountry' headerText='Ship Country' width='80' />
            <Column field='Freight' headerText='Freight Charges' textAlign={TextAlign.Right} format='C2' width='110' />
        </Columns>
    </Grid>
};