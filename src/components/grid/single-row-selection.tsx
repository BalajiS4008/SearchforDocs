import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings,EditSettings, TextAlign, EditType, FilterBarType, ColumnType } from '@syncfusion/react-grid';
import { contractPortfolio } from './supplierContractDetails';
import { useState } from 'react';

export default function App() {
    // Initialize state for filter, sort, and pagination settings.   
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const contractIDRules = { required: true };
    // Render grid with supplier contract data and configured settings.
    return (
        <div >
            <Grid dataSource={contractPortfolio} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field="ContractID" headerText="Contract ID" width={80} isPrimaryKey={true} validationRules={contractIDRules} textAlign={TextAlign.Right}/>
                    <Column field="SupplierName" headerText="Supplier Name" width={90} />
                    <Column field="ContractType" headerText="Contract Type" width={100} />
                    <Column field="Address" headerText="Address" clipMode='EllipsisWithTooltip' width={100} />
                    <Column field="Amount" format='C2' edit= {{type:EditType.NumericTextBox}} headerText="Amount" width={110} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                    <Column field="StartDate" headerText="Transaction Date" type={ColumnType.Date} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.DatePicker}} edit= {{type:EditType.DatePicker}} width={110} format="yMd" /> 
                </Columns>
            </Grid>
        </div>
    );
}
