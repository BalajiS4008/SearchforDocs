import { useState } from 'react';
import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, ClipMode, FilterBarType, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { orderDetails } from './orderDetails';
import { Button } from '@syncfusion/react-buttons';
import { PropertyColumn, PropertyPane, PropertyRow } from '../../common/property-pane';

export default function App() {
   const [toggleEnabled, setToggleEnabled] = useState(true);

    // Dynamically compute selectionSettings based on toggleEnabled.
    const selectionSettings = {
        enableToggle: toggleEnabled,
        mode: 'Multiple'
    };
    
    // Initialize state for filter, sort, toolbar, and pagination settings.
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount:4 });
      return (
      <>
          <PropertyPane>
            <PropertyColumn>
              <PropertyRow>
                <div>
                  <Button onClick={() => setToggleEnabled(prev => !prev)}>
                    {toggleEnabled ? 'Disable Toggle' : 'Enable Toggle'}
                  </Button>
                </div>
              </PropertyRow>
            </PropertyColumn>
          </PropertyPane>
        <Grid dataSource={orderDetails} selectionSettings={selectionSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
            <Columns>
              <Column field="OrderID" headerText="Order ID" width="90" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} clipMode={ClipMode.EllipsisWithTooltip}></Column>
              <Column field="CustomerName" headerText="Customer Name" width="120" clipMode={ClipMode.EllipsisWithTooltip}/>
              <Column field="OrderDate" headerText="Order Date" width="150" format="yMd"  type={ColumnType.Date} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.DatePicker}}/>
              <Column field="ShipAddress" headerText="Ship Address" width="130" clipMode={ClipMode.EllipsisWithTooltip}/>
              <Column field="ShipCountry" headerText="Ship Country" width="100"/>
              <Column field="Freight" headerText="Freight Charges" format="C2" width="120" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
            </Columns>
          </Grid>
        </>
    );
};