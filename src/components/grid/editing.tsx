import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings, EditSettings, EditType, FilterBarType, TextAlign, ColumnType } from '@syncfusion/react-grid';
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
    const cityRules = { required: true };
    const freightRules = { required: true, min: 1, max: 1000 };

    return (
        <div>
            <Grid dataSource={orderDetails} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field='OrderID' headerText='Order ID' width='90' textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} isPrimaryKey={true} validationRules={orderIDRules}></Column>
                    <Column field='CustomerName' headerText='Customer Name' width='120' validationRules={customerIDRules}></Column>
                    <Column field='OrderDate' headerText='Order Date' width='150' type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} edit={{ type:EditType.DatePicker}} format='yMd' textAlign={TextAlign.Right} />
                    <Column field='ShipCity' headerText='Ship City' edit= {{type:EditType.DropDownList}} validationRules={cityRules} width='140'></Column>
                    <Column field='ShipCountry' headerText='Ship Country' width='120' edit= {{type:EditType.DropDownList}}></Column>
                    <Column field='Freight' headerText='Freight Charges' width='130' format='C2' edit= {{type:EditType.NumericTextBox}} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} validationRules={freightRules} />
                </Columns>
            </Grid>
        </div>
    );
}