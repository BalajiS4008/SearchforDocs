import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, FilterBarType, ColumnType, TextAlign } from '@syncfusion/react-grid';
import { shipmentDetails } from './warehouseDetails';
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
     <Grid dataSource={shipmentDetails} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings} width='auto'> 
      <Columns>
        <Column field="ShipmentID" headerText="Shipment ID" width="120px" />
        <Column field="ItemDescription" headerText="Item" width="120px" />
        <Column field="Quantity" headerText="Quantity" filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} width="100px" />
        <Column field="Date" headerText="Shipped Date" textAlign={TextAlign.Right} type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} format="yMd" width="190px" />
        <Column field="CarrierName" headerText="Carrier Name" textAlign={TextAlign.Center} width="120px"/>
        <Column field="Status" headerText="Status" width="100px" />
        <Column field="WarehouseLocation" headerText="Location" width="120px" />
      </Columns>
     </Grid>
   </div>
 );
}