import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, FilterBarType, ClipMode, TextAlign } from '@syncfusion/react-grid';
import { DataManager, ODataV4Adaptor } from '@syncfusion/react-data';
import { useState } from 'react';


export default function App() {

    // Initializes DataManager with ODataV4Adaptor and service URL.
    const data = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
        adaptor: new ODataV4Adaptor()
    });

    // Enables filtering on grid columns.
    const [filterSettings] = useState<FilterSettings>({ enabled: true });

    // Enables sorting on grid columns.
    const [sortSettings] = useState<SortSettings>({ enabled: true });

    // Enables pagination with defined page size and count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });


    return (
        <div>
            <Grid dataSource={data} sortSettings={sortSettings} filterSettings={filterSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field="OrderID" headerText="Order ID" width={100} filter={{ filterBarType: FilterBarType.NumericTextBox }} textAlign={TextAlign.Right} />
                    <Column field="CustomerID" headerText="Customer ID" width={100} />
                    <Column field="ShipName" headerText="Ship Name" width={170} clipMode={ClipMode.EllipsisWithTooltip} />
                    <Column field="ShipCity" headerText="Ship City" width={110} />
                    <Column field="ShipCountry" headerText="Ship Country" width={110} />
                    <Column field="Freight" headerText="Freight Charges" width={130} textAlign={TextAlign.Right} filter={{ filterBarType: FilterBarType.NumericTextBox }} format="C2" />
                </Columns>
            </Grid>
        </div>
    );
};
