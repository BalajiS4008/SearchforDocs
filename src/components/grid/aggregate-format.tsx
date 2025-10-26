import { Grid, Columns, Column, Aggregates, AggregateColumn, AggregateRow, FilterSettings, SortSettings, PageSettings, TextAlign, FilterBarType, ColumnType, ClipMode, AggregateType } from '@syncfusion/react-grid';
import { ReactElement, useState } from 'react';
import {orderDetails} from './orderDetails'

export default function App() {
  // Initialize state for filter, sort, and pagination settings.    
  const [filterSettings] = useState<FilterSettings>({enabled: true});
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount:4 });

  // Render footer template for Freight aggregate.
  const footerSum = (props: object | undefined): ReactElement => {
    const typedProps = props as { Sum: number | string };
    return <span>Total: {typedProps.Sum}</span>;
  };


    // Render grid with task data, settings, and aggregates.
  return (
    <div>
      <Grid dataSource={orderDetails} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
        <Columns>
          <Column field="OrderID" headerText="Order ID" width={90} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
          <Column field="CustomerID" headerText="Customer ID" width={120} />
          <Column field="OrderDate" headerText="Order Date" format="yMd" width={170} type={ColumnType.Date} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.DatePicker}} />
          <Column field="ShippedDate" headerText="Shipped Date" format="yMd" width={170} type={ColumnType.Date} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.DatePicker}} />
          <Column field="ShipCountry" headerText="Ship Country" width="110px" />
          <Column field="Freight" headerText="Freight Charges" width="135" format='C2' textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} clipMode={ClipMode.EllipsisWithTooltip} />
        </Columns>
        <Aggregates>
          <AggregateRow>
            <AggregateColumn field="Freight" type={AggregateType.Sum} format="C2" footerTemplate={footerSum} />
             <AggregateColumn field="Quantity" type={AggregateType.Sum} format="N0" footerTemplate={footerSum} />
          </AggregateRow>
        </Aggregates>
      </Grid>
    </div>
  );
}