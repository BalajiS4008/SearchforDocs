import { useState, useMemo } from 'react';
import { Grid, Column, Columns, SortSettings, FilterBarType, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { Button } from '@syncfusion/react-buttons';
import { orderDetails } from './orderDetails';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
  // State to manage grid row height.
  const [rowHeight, setRowHeight] = useState(60);

  // State to track which button is disabled.
  const [disabledButton, setDisabledButton] = useState('60px');

  // State to enable sorting in the grid.
  const [sortSettings] = useState<SortSettings>({ enabled: true });

  // Sets row height to compact (20px).
  const setMinHeight = () => {
    setRowHeight(20);
    setDisabledButton('20px');
  };

  // Sets row height to normal (40px).
  const setMediumHeight = () => {
    setRowHeight(40);
    setDisabledButton('40px');
  };

  // Sets row height to spacious (60px).
  const setMaxHeight = () => {
    setRowHeight(60);
    setDisabledButton('60px');
  };

  return useMemo(() => (
    // Memoized Grid component to prevent unnecessary re-renders.
    <>
      <PropertyPane >
        <PropertyColumn>
          <PropertyRow>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Button onClick={setMaxHeight} disabled={disabledButton === '60px'}>Change height to 60px</Button>
              <Button onClick={setMediumHeight} disabled={disabledButton === '40px'}>Change height to 40px</Button>
              <Button onClick={setMinHeight} disabled={disabledButton === '20px'}>Change height to 20px</Button>
            </div>
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <Grid dataSource={orderDetails.slice(0,20)} height={310} rowHeight={rowHeight} sortSettings={sortSettings}>
        <Columns>
          <Column field='OrderID' headerText='Order ID' width='100' textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} isPrimaryKey={true} />
          <Column field='CustomerName' headerText='Customer Name' width='130' />
          <Column field='OrderDate' headerText='Order Date' width='130' format='yMd'  type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} textAlign={TextAlign.Right} />
          <Column field='ShippedDate' headerText='Shipped Date' width='130'  type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} format="yMd" textAlign={TextAlign.Right} />
          <Column field='ShipCountry' headerText='Ship Country' width='120' />
          <Column field='Freight' headerText='Freight Charges' width='140' format='C2' filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} />
        </Columns>
      </Grid>
    </>
  ), [rowHeight, disabledButton]);
}