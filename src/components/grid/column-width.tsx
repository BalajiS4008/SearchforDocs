import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, FilterBarType, TextAlign } from '@syncfusion/react-grid';
import { orderDetails } from './orderDetails';
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
     <Grid dataSource={orderDetails} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings} width='auto'> 
      <Columns>
        <Column field="OrderID" headerText="Order ID" textAlign={TextAlign.Right} width="100px" filter={{filterBarType:FilterBarType.NumericTextBox}}/>
        <Column field="CustomerID" headerText="Customer ID" width="120px" />
        <Column field="Quantity" headerText="Order Quantity" textAlign={TextAlign.Right} width="140px" />
        <Column field="ShipAddress" headerText="Ship Address" width="auto" />
        <Column field="ShipCountry" headerText="Ship Country" width="130px" />
        <Column field="Freight" headerText="Freight Charges" textAlign={TextAlign.Right} format="C2" filter={{filterBarType:FilterBarType.NumericTextBox}} width="160px" />
      </Columns>
     </Grid>
   </div>
 );
}