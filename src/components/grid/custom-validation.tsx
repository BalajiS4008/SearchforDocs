import { Grid, Columns, Column, SortSettings, PageSettings, EditSettings, EditType, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { FormValueType } from '@syncfusion/react-inputs';
import { orderData } from './orderList';
import { useState } from 'react';
 
export default function App() {

// State to manage sort, page, edit and toolbar settings.   
const [sortSettings] = useState<SortSettings>({enabled: true});
const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
const orderIDRules = { required: true, number: true };
const freightRules = { required: true, min: 10, max: 500 };
// Custom validator to ensure CustomerID starts with "ID-".
  const customerIDRules = {
   required: true,
   minLength: 6,
   customValidator: (value: FormValueType): string | null => {
      if (typeof value !== 'string' || !value.startsWith('ID-')) {
          return 'Customer ID must start with "ID-".';
      }
      return null;
    }
  };
  const stringValidationRules = { required: true };
 
  return (
    <Grid dataSource={orderData} editSettings={editSettings} toolbar={toolbarSettings} pageSettings={pageSettings} sortSettings={sortSettings}>
      <Columns>
        <Column field='OrderID' headerText='Order ID' width='100' textAlign={TextAlign.Right} isPrimaryKey={true} validationRules={orderIDRules} />
        <Column field='CustomerID' headerText='Customer ID' width='100' validationRules={customerIDRules} />
        <Column field='OrderDate' headerText='Order Date' width='100' type={ColumnType.Date} format='yMd' edit={{ type:EditType.DatePicker}} textAlign={TextAlign.Right} />
        <Column field='ShipCity' headerText='Ship City' width='130' edit={{ type:EditType.DropDownList}} validationRules={stringValidationRules}/>
        <Column field='ShipCountry' headerText='Ship Country' width='110' edit={{ type:EditType.DropDownList}} />
        <Column field='Freight' headerText='Freight Charges' width='120' format='C2' edit={{ type:EditType.NumericTextBox}} textAlign={TextAlign.Right} validationRules={freightRules} />
      </Columns>
    </Grid>
  );
}