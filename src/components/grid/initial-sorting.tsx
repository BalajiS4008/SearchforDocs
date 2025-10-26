import { Grid, Columns, Column, SortSettings,  PageSettings, ColumnType, TextAlign, FilterBarType, SortDirection } from '@syncfusion/react-grid';
import { shipmentDetails } from './warehouseDetails';
import { useState } from 'react';

export default function App() {
  // state to manage sort, and page settings    
  const [sortSettings] = useState<SortSettings>({enabled: true, columns: [{ field: 'Quantity', direction: SortDirection.Ascending }]});
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  return (
    <div>
      <Grid dataSource={shipmentDetails} sortSettings={sortSettings} pageSettings={pageSettings}>
        <Columns>
          <Column field="ShipmentID" headerText="Shipment ID" width="80px"/>
          <Column field="ItemDescription" headerText="Item" width="90px" />
          <Column field="Quantity" headerText="Quantity" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} width="70px" />
          <Column field="Date" headerText="Date" textAlign={TextAlign.Right} format="yMd" type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} width="70px" />
          <Column field="CarrierName" headerText="Carrier Name" width="90px" />
          <Column field="Status" headerText="Status" width="80px" />
          <Column field="WarehouseLocation" headerText="Location" width="80px" />
        </Columns>
      </Grid>
    </div>
  );
}

