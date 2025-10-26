import { Grid, Column, Columns, SortSettings, PageSettings, ClipMode, TextAlign, ColumnType, EditSettings, FilterSettings, FilterBarType, EditType } from '@syncfusion/react-grid';
import { productDetails } from './productDetails';
import { useMemo, useState } from 'react';

export default function App() {
    // Initialize state for filter, sort, toolbar, and edit settings.   
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});   
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    // Initialize page settings with pagination enabled, page size, and count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    
    const primaryValueRules = { required: true, number: true };
    const productCategoryRules = { required: true };
    // Numeric format options.
    const discountFormat = {
        format: '$##0.00', // Currency format with two decimal places.
    };
    const revenueFormat = {
        format: '$###,##0.000', // Thousands separator with three decimal places.
    };
    const percentageFormat = {
        format: '##.0%', // Percentage format.
    };
    const customNumberFormat = {
        format: "####.##", // Custom format with literal text.
    };

    // Date format options.
    const dateFormatOptions = {
        type: ColumnType.Date,
        format: "EEE, MMM d, yyyy 'at' h:mm a", // Custom date with day, month, year, and time.
    };
    const shortDateFormat = {
        type: ColumnType.Date,
        format: 'MM/dd/yy', // Short date format.
    };

    return useMemo(() => (
        <div>
            <Grid dataSource={productDetails.slice(50)} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings} >
                <Columns>
                    <Column field='ProductID' headerText='ID' isPrimaryKey={true} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} validationRules={primaryValueRules} width="110"/>
                    <Column field="ProductCategory" headerText="Product Category" width="170px" validationRules={productCategoryRules} clipMode={ClipMode.EllipsisWithTooltip}/>
                    <Column field="UnitsSold"headerText="Units Sold" format={customNumberFormat} edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} width="150px" />
                    <Column field="Discount" headerText="Discount" format={discountFormat} edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} width="150px" />
                    <Column field="Revenue" headerText="Revenue" format={revenueFormat} edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} width="160px" />
                    <Column field="ProfitMargin" headerText="Profit Margin" format={percentageFormat} edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} width="140px" />
                    <Column field='TransactionDate' headerText='Transaction Date' width='230px' allowEdit={false} allowFilter={false} format={dateFormatOptions} edit={{ type:EditType.DatePicker}}  textAlign={TextAlign.Right} />
                    <Column field="LastUpdated" headerText="Last Updated" format={shortDateFormat} edit={{ type:EditType.DatePicker}} filter={{filterBarType:FilterBarType.DatePicker}} textAlign={TextAlign.Right} width="180px" />
                </Columns>
            </Grid>
        </div>
    ), []);
};
