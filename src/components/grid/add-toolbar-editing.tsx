import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings, EditSettings, TextAlign, EditType, FilterBarType, ColumnType } from '@syncfusion/react-grid';
import { productDatas } from './productDatas';
import { useState } from 'react';

export default function App() {
    // State to manage sort, filter, page, edit and toolbar settings.    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [toolbarOptions] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const productIDRules = { required: true };
    const productRules = { required: true };
    const discountRules = { required: true, number: true };

    return (
        <div>
            <Grid dataSource={productDatas} toolbar={toolbarOptions} editSettings={editSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings} >
                <Columns>
                    <Column field='ProductID' headerText='Product ID' width='100px' validationRules={productIDRules} isPrimaryKey={true}/>
                    <Column field='ProductCategory' headerText='Product' width='120' edit= {{type:EditType.DropDownList}} validationRules={productRules} />
                    <Column field='StockQuantity' headerText='Units Sold' textAlign={TextAlign.Right}  edit= {{type:EditType.NumericTextBox}} width='140px' filter={{filterBarType:FilterBarType.NumericTextBox}} validationRules={discountRules} />
                    <Column field='Discount' headerText='Discount' format="C2" edit= {{type:EditType.NumericTextBox}} textAlign={TextAlign.Right} width='140px' filter={{filterBarType:FilterBarType.NumericTextBox}} validationRules={discountRules} />
                    <Column field='Revenue' headerText='Revenue' width='150px' format="C2"  edit= {{type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right}/>
                    <Column field='TransactionDate' headerText='Transaction Date' width='170' type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} edit={{ type:EditType.DatePicker}} format='yMd' textAlign={TextAlign.Right} />
                </Columns>
            </Grid>
        </div>
    );
};
