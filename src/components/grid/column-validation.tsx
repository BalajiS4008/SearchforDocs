import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, EditSettings, TextAlign, EditType, ColumnType, FilterBarType} from '@syncfusion/react-grid';
import { orderDetails } from './orderDetails';
import { useState } from 'react';
 
export default function App() {

  // State to manage sort, filter, page, edit and toolbar settings.    
  const [filterSettings] = useState<FilterSettings>({enabled: true});
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
  const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
 const orderIDRules = { required: true, number: true };
 const stringValidationRules = { required: true, minLength: 4 };
 const freightRules = { required: true, min: 10, max: 500 };
 
 return (
   <Grid dataSource={orderDetails} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} pageSettings={pageSettings} sortSettings={sortSettings}>
     <Columns>
       <Column field='OrderID' headerText='Order ID' width='90' textAlign={TextAlign.Right} isPrimaryKey={true} filter={{filterBarType:FilterBarType.NumericTextBox}} validationRules={orderIDRules} />
       <Column field='CustomerName' headerText='Customer Name' width='130' validationRules={stringValidationRules} />
       <Column field='OrderDate' headerText='Order Date' width='160' format='yMd' edit={{ type: EditType.DatePicker}} type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} textAlign={TextAlign.Right} />
       <Column field='ShipCity' headerText='Ship City' width='120' edit={{ type: EditType.DropDownList}} validationRules={stringValidationRules}/>
       <Column field='ShipCountry' headerText='Ship Country' width='110' edit={{ type: EditType.DropDownList}} />
       <Column field='Freight' headerText='Freight Charges' width='130' format='C2' edit={{ type: EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} validationRules={freightRules} />
     </Columns>
   </Grid>
 );
}