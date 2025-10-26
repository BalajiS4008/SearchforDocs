import { Grid, Column, Columns, RowEditEvent, FilterSettings, SortSettings, PageSettings, EditSettings, EditType, ClipMode, TextAlign, ColumnType, FilterBarType } from '@syncfusion/react-grid';
import { orderDetails, OrderData } from './orderDetails';
import { useCallback, useState } from 'react';

export default function App() {
    // State to manage sort, filter, page, edit and toolbar settings.    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const orderIDRules = { required: true };
    const shipCountryRules = { required: true };
    const freightRules = { required: true, min: 1, max: 1000 };
    
    // Handles row edit event and cancels edit if ShipCountry is "France".
    const onRowEditStart = useCallback((args: RowEditEvent) => {
        if ((args?.data as OrderData).ShipCountry === 'France') {
           args.cancel = true;
        }
    }, []);
    
    return (
        <div>
            <Grid dataSource={orderDetails} onRowEditStart={onRowEditStart} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} pageSettings={pageSettings} sortSettings={sortSettings}>
                <Columns>
                    <Column field="OrderID" headerText="Order ID" width="100px" textAlign={TextAlign.Right} validationRules={orderIDRules} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
                    <Column field="CustomerID" headerText="Customer ID" width="110px" />
                    <Column field="OrderDate" headerText="Order Date" edit={{ type: EditType.DatePicker }} textAlign={TextAlign.Right} format="yMd" type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} width="170px" />
                    <Column field="ShipName" headerText="Ship Name" width="150px" clipMode={ClipMode.EllipsisWithTooltip} />
                    <Column field="ShipCountry" headerText="Ship Country" edit={{ type: EditType.DropDownList }} validationRules={shipCountryRules} width="130px" />
                    <Column field="Freight" headerText="Freight Charges" edit={{ type: EditType.NumericTextBox }} textAlign={TextAlign.Right} format="C2" validationRules={freightRules} filter={{filterBarType: FilterBarType.NumericTextBox}} width="140px" />
                </Columns>
            </Grid>
        </div>
    );
}