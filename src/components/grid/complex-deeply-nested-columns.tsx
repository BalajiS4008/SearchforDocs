import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, FilterBarType, TextAlign } from '@syncfusion/react-grid';
import { customerOrders } from './ordersData';
import { useState } from 'react';

export default function App() {
    // Initialize filter settings with enabled state.
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    // Initialize sort settings with enabled state.
    const [sortSettings] = useState<SortSettings>({enabled: true});
    // Initialize page settings with pagination enabled, page size, and count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });

    return (
        <div>
             <Grid dataSource={customerOrders} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field="OrderID" headerText="Order ID" width="100" filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right}/>
                    <Column field="Customer.Details.Name" headerText="Customer Name" width="110" />
                    <Column field="ProductCategory" headerText="Product" width="80" />
                    <Column field="Customer.Details.Address.City" headerText="Ship City" width="90" />
                    <Column field="Customer.Details.Address.Country" headerText="Ship Country" width="100" />
                    <Column field="OrderAmount" headerText="Order Amount" width="110" format="C2" filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right}/>
                    <Column field="OrderStatus" headerText="Order Status" width="100" />
                </Columns>
            </Grid>
        </div>
    );
}