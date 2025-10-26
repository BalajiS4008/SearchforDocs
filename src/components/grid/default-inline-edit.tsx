import { Grid, Column, Columns, PageSettings, FilterSettings, ColumnType, TextAlign, FilterBarType, EditType } from '@syncfusion/react-grid';
import { feedbackData } from './feedbackData.ts';
import { useState } from 'react';

export default function App() {
    // State to manage filter,toolbar, edit and page settings.    
    const [editSettings] = useState({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [filterSettings] = useState<FilterSettings>({ enabled: true });
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const productIDRules = { required: true };
    const productNameRules = { required: true };

    return (
        <div>
            <Grid dataSource={feedbackData} editSettings={editSettings} toolbar={toolbarOptions} filterSettings={filterSettings} pageSettings={pageSettings}>
                <Columns>
                  <Column field='CustomerID' headerText='Customer ID' width='120' isPrimaryKey={true} validationRules={productIDRules}/>
                  <Column field='CustomerName' defaultValue='Aisha Khan' headerText='Customer Name' width='140' validationRules={productNameRules}/>
                  <Column field='Product' headerText='Product' edit={{type: EditType.DropDownList}} width='150'></Column>
                  <Column field='Rating' headerText='Customer Rating' width='150' textAlign={TextAlign.Right} edit= {{type: EditType.NumericTextBox}} filter={{ filterBarType: FilterBarType.NumericTextBox }} />
                  <Column field='Date' headerText='Shipped Date' width='190' format='yMd' type={ColumnType.Date} textAlign={TextAlign.Right} edit={{ type: EditType.DatePicker }} filter={{ filterBarType: FilterBarType.DatePicker }} />
                  <Column field='SupportAgent' headerText='Support Agent' width='130' />
                </Columns>
            </Grid>
        </div>
    );
}