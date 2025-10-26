import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings, EditSettings, EditType, ColumnType, FilterBarType, TextAlign } from '@syncfusion/react-grid';
import { salesDetails } from './salesTransactionDetails';
import { useState } from 'react';

export default function App() {
    // State to manage sort, filter, page, edit and toolbar settings.    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const productIDRules = { required: true };
    const productRules = { required: true };
    const numberValidationRules = { required: true };
    const editParams = {
        type: EditType.NumericTextBox,
        params: {
            format: 'N1',
            min: 1, 
            max: 1000
        }
    };
    
    return (
        <div>
            <Grid dataSource={salesDetails.slice(0,60)} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} pageSettings={pageSettings} sortSettings={sortSettings}>
                <Columns>
                    <Column field='ProductId' headerText='Product ID' width='120' validationRules={productIDRules} isPrimaryKey={true}></Column>
                    <Column field='Product' headerText='Product Name' width='120' edit={{ type:EditType.DropDownList}} validationRules={productRules}></Column>
                    <Column field='UnitPrice' headerText='Unit Price' width='130' edit={{type:EditType.NumericTextBox}} format='C2' textAlign={TextAlign.Right} validationRules={numberValidationRules} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                    <Column field='UnitsSold' headerText='Units Sold' width='100' edit={editParams} validationRules={numberValidationRules} filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} />
                    <Column field='NetTotal' headerText='Net Total' textAlign={TextAlign.Right} edit={{type:EditType.NumericTextBox}} format="C2" filter={{filterBarType:FilterBarType.NumericTextBox}} width='150'></Column>
                    <Column field='Date' headerText='Expiry Date' textAlign={TextAlign.Right} format="yMd"  type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} edit={{ type:EditType.DatePicker}} width='170'></Column>
                </Columns>
            </Grid>
        </div>
    );
}