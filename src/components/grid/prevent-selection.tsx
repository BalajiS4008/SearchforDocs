import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, SelectionSettings, TextAlign, FilterBarType, ClipMode, ColumnType } from '@syncfusion/react-grid';
import { orderDetails } from './orderDetails';
import { useState } from 'react';

export default function App() {
    // Initialize state for filter, sort, selection, and pagination settings.   
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [selectionSettings] = useState<SelectionSettings>({ enabled: false });
    // Render grid with sliced order data and configured settings.
    return (
        <div>
            <Grid dataSource={orderDetails.slice(0,50)} enableHover={false} selectionSettings={selectionSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field='OrderID' headerText='Order ID' width='90' textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.NumericTextBox}} ></Column>
                    <Column field='CustomerName' headerText='Customer ID' width='120'></Column>
                    <Column field='OrderDate' headerText='Order Date' type={ColumnType.Date} filter={{filterBarType: FilterBarType.DatePicker}} width='170' format='yMd' textAlign={TextAlign.Right}/>
                    <Column field='ShipAddress' headerText='Ship Address' clipMode={ClipMode.EllipsisWithTooltip} width='140'></Column>
                    <Column field='ShipCountry' headerText='Ship Country' width='130'></Column>
                    <Column field='Freight' headerText='Freight Charges' filter={{filterBarType: FilterBarType.NumericTextBox}}  width='130' format='C2' textAlign={TextAlign.Right}/>
                </Columns>
            </Grid>
        </div>
    );
};