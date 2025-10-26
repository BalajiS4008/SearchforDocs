import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings, EditSettings, EditType, FilterBarType, ClipMode, ColumnType, TextAlign } from '@syncfusion/react-grid';
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
    const customerIDRules = { required: true };
    const freightRules = { required: true, min: 1, max: 1000 };
    
    return (
        <div>
            <Grid dataSource={orderDetails} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} pageSettings={pageSettings} sortSettings={sortSettings}>
                <Columns>
                    <Column field='OrderID' headerText='Order ID' width='100' textAlign={TextAlign.Right} isPrimaryKey={true} validationRules={orderIDRules} filter={{filterBarType:FilterBarType.NumericTextBox}} clipMode={ClipMode.EllipsisWithTooltip}></Column>
                    <Column field='CustomerName' headerText='Customer Name' width='130' edit={{ type:EditType.TextBox}} validationRules={customerIDRules}></Column>
                    <Column field='OrderDate' headerText='Order Date' width='160' edit={{ type:EditType.DatePicker}}  type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} format='yMd' textAlign={TextAlign.Right} />
                    <Column field="ShippedDate" headerText="Shipped Date"  format='MM-dd-yyyy' edit={{ type:EditType.DatePicker}}  type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} textAlign={TextAlign.Right} width="160" />
                    <Column field='ShipCountry' headerText='Ship Country' edit={{ type:EditType.DropDownList}} width='120'></Column>
                    <Column field='Freight' headerText='Freight Charges' width='140' format='C2' textAlign={TextAlign.Right} edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} validationRules={freightRules} />
                </Columns>
            </Grid>
        </div>
    );
}