import { Grid, Column, Columns, EditTemplateProps, FilterSettings, SortSettings, PageSettings, EditSettings, EditType, TextAlign, FilterBarType } from '@syncfusion/react-grid';
import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { useMemo, useCallback, useState } from 'react';
import { salesDetails, SalesRecord } from './salesTransactionDetails';

export default function App() {
    // State to manage sort, filter, page, edit and toolbar settings.    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const productIDRules = { required: true };
    const productRules= { required: true };
    const revenueRules = { required: true, min: 1 };
    const countries: { [key: string]: unknown }[] = [
        { text: 'A', value: 'A' },
        { text: 'B', value: 'B' },
        { text: 'C', value: 'C' },
    ];

    // Custom edit template for the Country column using DropDownList.
    const countryTemplate = useCallback((props?: EditTemplateProps) => (
        <DropDownList
            dataSource={countries as { [key: string]: object }[]}
            fields={{ text: 'text', value: 'value' }}
            value={(props?.data as SalesRecord).Branch}
            onChange={(args?: ChangeEventArgs) => { props?.onChange(args?.value as string); }}
        />
    ), [countries]);

    return useMemo(() => (
        // Memoized Grid component with custom edit template for Country column.
        <div>
            <Grid dataSource={salesDetails} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field="ProductId" headerText="Product ID" width="120" isPrimaryKey={true} validationRules={productIDRules} />
                    <Column field="Product" headerText="Product" edit={{ type: EditType.DropDownList }} width="125" validationRules={productRules} />
                    <Column field="UnitPrice" headerText="Unit Price" format='C2' edit={{ type: EditType.NumericTextBox } } textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} width="120" />
                    <Column field="Revenue" headerText="Revenue" textAlign={TextAlign.Right} format='C2' edit={{type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} validationRules={revenueRules} width="125" />
                    <Column field="Branch" headerText="Branch" edit={{ type: EditType.DropDownList }} editTemplate={countryTemplate} width="100"  />
                    <Column field="Country" headerText="Country" edit={{ type: EditType.DropDownList }} width="100"  />
                </Columns>
            </Grid>
        </div>
    ), []);
}
