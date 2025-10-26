import { Grid, Columns, Column, PageSettings, ClipMode, TextAlign } from '@syncfusion/react-grid';
import { DataManager, WebApiAdaptor } from '@syncfusion/react-data';
import { useState } from 'react';

export default function App() {
    // Initializes DataManager with WebApiAdaptor and service URL.
    const data = new DataManager({
      url: 'https://services.syncfusion.com/js/production/api/Orders',
      adaptor: new WebApiAdaptor()
    })

    // state to manage page settings.   
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 7, pageCount: 4 });

    return (
        <div>
          <Grid dataSource={data} pageSettings={pageSettings} >
            <Columns>
              <Column field="OrderID" headerText="Order ID" width={100} textAlign={TextAlign.Right}/>
              <Column field="CustomerID" headerText="Customer ID" width={100}/>
              <Column field="ShipName" headerText="Ship Name" width={120} clipMode={ClipMode.EllipsisWithTooltip} />
              <Column field="ShipCity" headerText="Ship City" width={100} />
              <Column field="ShipCountry" headerText="Ship Country" width={120} />
              <Column field="Freight" headerText="Freight Charges" width={130} textAlign={TextAlign.Right} format="C2"/>
            </Columns>
          </Grid>
        </div>
    );
};