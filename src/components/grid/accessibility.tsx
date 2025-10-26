import { Grid, Columns, Column, Aggregates, AggregateColumn, AggregateRow, FilterSettings, SortSettings, PageSettings, EditSettings, FilterBarType, TextAlign, EditType, ColumnType, ClipMode, AggregateType } from '@syncfusion/react-grid';
import { orderDetails } from './orderDetails';
import { ReactElement, useState } from 'react';

export default function App() {
  // Initialize state for filter, sort, pagination, edit, and toolbar settings.    
  const [filterSettings] = useState<FilterSettings>({enabled: true});
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  const [editSettings]= useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
  const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);  
  // Render footer template for minimum Freight value.
  const footerMin = (props?: object): ReactElement => {
    const typedProps = props as { Min?: number | string };
    return (<span>Min: {typedProps.Min}</span>);
  };
  // Render footer template for maximum Freight value.
  const footerMax = (props?: object): ReactElement => {
    const typedProps = props as { Max?: number | string };
    return (<span>Max: {typedProps.Max}</span>);
  };  
  // Render grid with order data, settings, and aggregate rows.
  return (
    <div>
     <Grid dataSource={orderDetails} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings} editSettings={editSettings} toolbar={toolbarSettings}>
      <Columns>
        <Column field="OrderID" headerText="Order ID" width="90px" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} isPrimaryKey={true} />
        <Column field="CustomerName" headerText="Customer Name" width="140px" />
        <Column field="OrderDate" headerText="Order Date" textAlign={TextAlign.Right} edit={{type:EditType.DatePicker}} format="yMd" filter={{filterBarType:FilterBarType.DatePicker}} type={ColumnType.Date} width="160px" />
        <Column field="ShipName" headerText="Ship Name" clipMode={ClipMode.EllipsisWithTooltip} width="140px" />
        <Column field="ShipCountry" headerText="Ship Country" edit={{type:EditType.DropDownList}} width="140px" />
        <Column field="Freight" headerText="Freight Charges" edit={{type:EditType.NumericTextBox}} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} format="C2" width="160px" />
      </Columns>
      <Aggregates>
        <AggregateRow>
          <AggregateColumn field='Freight' type={AggregateType.Max} footerTemplate={footerMax} format='C2' />
        </AggregateRow>
        <AggregateRow>
          <AggregateColumn field='Freight' type={AggregateType.Min} footerTemplate={footerMin} format='C2' />
        </AggregateRow>                   
      </Aggregates>
    </Grid>
   </div>
 );
}