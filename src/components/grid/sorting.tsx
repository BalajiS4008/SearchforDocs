import { Grid, Columns, Column, SortSettings, FilterSettings, PageSettings, ClipMode, FilterBarType, ColumnType, TextAlign } from '@syncfusion/react-grid';
import { shipmentDetails } from './warehouseDetails';
import { useState } from 'react';

export default function App() {
    // Initialize state for filter, sort, and pagination settings.  
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    // Render grid with ware house data and configured settings.
    return (
        <div>
            <Grid dataSource={shipmentDetails} sortSettings={sortSettings} filterSettings={filterSettings} pageSettings={pageSettings} >
                <Columns>
                    <Column field="ShipmentID" headerText="Shipment ID" width={110} />
                    <Column field="ItemDescription" headerText="Item" clipMode={ClipMode.EllipsisWithTooltip} width={110}/>
                    <Column field="WarehouseLocation" headerText="Location" width={90} />
                    <Column field="Date" headerText="Order Date" textAlign={TextAlign.Right} format="yMd" type={ColumnType.Date} filter={{filterBarType: FilterBarType.DatePicker}} width={170} />
                    <Column field="Quantity" headerText="Quantity" textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.NumericTextBox}} width={90} />
                    <Column field="ShipmentMethod" headerText="Shipment Method" width={140}/>
                    <Column field="Status" headerText="Status" width={90}/>
                </Columns>
            </Grid>
        </div>
    );
}

