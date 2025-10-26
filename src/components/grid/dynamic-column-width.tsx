import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, FilterBarType, ColumnType, TextAlign } from '@syncfusion/react-grid';
import { shipmentDetails } from './warehouseDetails';
import { useState } from 'react';
import { RadioButton, RadioButtonChangeEvent } from '@syncfusion/react-buttons';
import './warehouseDetails.css';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
  // State for filter, sort, and page settings.
  const [filterSettings] = useState<FilterSettings>({ enabled: true });
  const [sortSettings] = useState<SortSettings>({ enabled: true });
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });

  // State for selected width type.
  const [widthType, setWidthType] = useState<'auto' | 'pixel' | 'percentage'>('auto');

  // Define column widths for each type.
  const columnWidths = {
    auto: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
    pixel: ['100px', '150px', '100px', '170px', '120px', '100px', '110px'],
    percentage: ['15%', '25%', '15%', '25%', '15%', '20%', '15%'],
  };

  // Handle radio button change.
  const handleWidthChange = (event: RadioButtonChangeEvent) => {
    setWidthType(event.value as 'auto' | 'pixel' | 'percentage');
  };

  return (
    <>
      {/* Radio buttons for width selection. */}
      <PropertyPane position="top" >
        <PropertyColumn>
          <PropertyRow>
            <div className="property-panel-section">
              <span className="property-panel-label">Select column width type:</span>
              <RadioButton
                label="Auto"
                name="role"
                value="auto"
                checked={widthType === 'auto'}
                onChange={handleWidthChange}
              />
              <RadioButton
                label="Pixel"
                name="role"
                value="pixel"
                checked={widthType === 'pixel'}
                onChange={handleWidthChange}
              />
              <RadioButton
                label="Percentage"
                name="role"
                value="percentage"
                checked={widthType === 'percentage'}
                onChange={handleWidthChange}
              />
            </div>
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      {/* Grid with dynamic width. */}
      <Grid
        dataSource={shipmentDetails}
        filterSettings={filterSettings}
        sortSettings={sortSettings}
        pageSettings={pageSettings}
        width="auto"
      >
        <Columns>
          <Column field="ShipmentID" headerText="Shipment ID" width={columnWidths[widthType][0]} />
          <Column field="ItemDescription" headerText="Item" width={columnWidths[widthType][1]} />
          <Column
            field="Quantity"
            headerText="Quantity"
            filter={{ filterBarType: FilterBarType.NumericTextBox }}
            textAlign={TextAlign.Right}
            width={columnWidths[widthType][2]}
          />
          <Column
            field="Date"
            headerText="Shipped Date"
            textAlign={TextAlign.Right}
            type={ColumnType.Date}
            filter={{ filterBarType: FilterBarType.DatePicker }}
            format="yMd"
            width={columnWidths[widthType][3]}
          />
          <Column
            field="CarrierName"
            headerText="Carrier Name"
            textAlign={TextAlign.Center}
            width={columnWidths[widthType][4]}
          />
          <Column field="Status" headerText="Status" width={columnWidths[widthType][5]} />
          <Column field="WarehouseLocation" headerText="Location" width={columnWidths[widthType][6]} />
        </Columns>
      </Grid>
    </>
  );
}