import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, FilterBarType, TextAlign, ColumnType } from '@syncfusion/react-grid';
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
        <Column field="ShipmentID" headerText="Shipment ID" width="120px"/>
        <Column field="ItemDescription" headerText="Item" width="25%"/>
        <Column field="Quantity" headerText="Quantity" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} width="100px" />
        <Column field="Date" headerText="Shipped Date" textAlign={TextAlign.Right} type={ColumnType.Date} format="yMd" filter={{filterBarType:FilterBarType.DatePicker}} width="190px" />
        <Column field="CarrierName" headerText="Carrier Name" width="120px" textAlign={TextAlign.Center}  />
        <Column field="Status" headerText="Status" width="120px" />
        <Column field="WarehouseLocation" headerText="Location" width="140px" />
      </Columns>
     </Grid>
   </div>
 );
}