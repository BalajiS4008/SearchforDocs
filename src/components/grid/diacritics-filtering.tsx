import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, ColumnType, FilterBarType, TextAlign } from '@syncfusion/react-grid';
import { useState } from 'react';
import { orderDetails } from './orderDetails';

export default function App() {
   // State to enable sorting and paging in the grid.
    const [sortSettings] = useState<SortSettings>({ enabled: true }); 
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize:8, pageCount: 4 }); 
    // State to enable filtering with accent-insensitive search and predefined filter.
    const [filterSettings] = useState<FilterSettings>({
        enabled: true,
        ignoreAccent: true,
        columns: [{ field: 'CustomerName', operator: 'contains', value: 'José', ignoreAccent: true }]
    });

    return (
        <div>
            <Grid dataSource={orderDetails} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field='OrderID' headerText='Order ID' width={80} textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.NumericTextBox}}></Column>
                    <Column field='CustomerName' headerText='Customer Name' width={120}></Column>
                    <Column field='OrderDate' headerText='Order Date' width={150} format='yMd' textAlign={TextAlign.Right} type={ColumnType.Date} filter={{filterBarType: FilterBarType.DatePicker}} />
                    <Column field='ShipAddress' headerText='Ship Address' width={140}></Column>
                    <Column field='ShipCountry' headerText='Ship Country' width={100}></Column>
                    <Column field='Freight' headerText='Freight Charges' width={120} format='C2' textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.NumericTextBox}} />
                </Columns>
            </Grid>
        </div>
    );
};