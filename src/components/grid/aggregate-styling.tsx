import { Grid, Columns, Column, Aggregates, AggregateColumn, AggregateRow, FilterSettings, SortSettings, PageSettings, CellClassProps, EditSettings, FilterBarType, TextAlign, EditType, ColumnType, AggregateType, ClipMode, CellType } from '@syncfusion/react-grid';
import { orderDetails } from './orderDetails';
import './orderDetails.css';
import { ReactElement, useState } from 'react';

export default function App() {
  // Initialize state for filter, sort, edit, and pagination settings.   
  const [filterSettings] = useState<FilterSettings>({enabled: true});
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount:4 }); 
  const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
  const orderIDRules = { required: true, number: true };
  const customerIDRules = { required: true };
  const addressRules = { required: true };
  const freightRules = { required: true, min: 1, max: 1000 };
  
  // Render footer template for sum aggregate.
  const footerSum = (props: object | undefined): ReactElement => {
    const typedProps = props as { Sum: number | string };
    return (<span>Sum: {typedProps.Sum}</span>);
  };

  // Returns CSS class for Freight aggregate cell based on freight value conditions.
  const getFreightAggregateCellClass = (args?: CellClassProps): string => {
    if (args?.cellType !== CellType.Aggregate) { return ''; }
    if (args?.column.field === 'Freight' && args?.data) {
      const aggregateData = args.data as { Freight: { 'Freight - sum': number } };
      const freightValue = aggregateData.Freight['Freight - sum'];
      if (freightValue >= 3000) {
        return 'sf-above-limit';
      } else {
        return 'sf-below-limit';
      }
    }
    return 'sf-below-limit';
  };
    // Render grid with order data, settings, and aggregates.
  return (
    <div>
     <Grid className='order-detail' dataSource={orderDetails} editSettings={editSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
        <Columns>
          <Column field="OrderID" headerText="Order ID" width="90" isPrimaryKey={true} clipMode={ClipMode.EllipsisWithTooltip} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} validationRules={orderIDRules}/>
          <Column field="CustomerName" headerText="Customer Name" width="120" clipMode={ClipMode.EllipsisWithTooltip} validationRules={customerIDRules}/>
          <Column field="OrderDate" headerText="Order Date" width="150" format="yMd" edit={{type:EditType.DatePicker}} type={ColumnType.Date} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.DatePicker}}/>
          <Column field="ShipAddress" headerText="Ship Address" width="120" clipMode={ClipMode.EllipsisWithTooltip} validationRules={addressRules}/>
          <Column field="ShipCountry" headerText="Ship Country" width="100"/>
          <Column field="Freight" headerText="Freight Charges" format="C2" width="120" edit={{type:EditType.NumericTextBox}} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} validationRules={freightRules}/>
        </Columns>
        <Aggregates>
          <AggregateRow>
            <AggregateColumn cellClass={getFreightAggregateCellClass} field='Freight' type={AggregateType.Sum} footerTemplate={footerSum} format='C2'/>
          </AggregateRow>          
      </Aggregates>
     </Grid>
   </div>
 );
}