import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings, SearchSettings, TextAlign, FilterBarType } from '@syncfusion/react-grid';
import { orderDetails } from './orderDetails';
import { useState } from 'react';

export default function App() {
    // Initialize state for filter, sort, search, toolbar, and pagination settings.
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount:4 });
    const [searchSettings] = useState<SearchSettings>({ enabled: true });
    const [toolbarSettings] = useState<string[]>(['Search']);
    // Render grid with order data and configured settings.
    return (
        <div>
            <Grid dataSource={orderDetails} searchSettings={searchSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field='OrderID' headerText='Order ID' width='60px' textAlign={TextAlign.Right} isPrimaryKey={true} filter={{filterBarType:FilterBarType.NumericTextBox}}></Column>
                    <Column field='CustomerID' headerText='Customer ID' width='90px'></Column>
                    <Column field='CustomerName' headerText='Customer Name' width='90px'></Column>
                    <Column field='ShipCity' headerText='Ship City' width='80px'></Column>
                    <Column field='ShipCountry' headerText='Ship Country' width='80px'></Column>
                    <Column field='Freight' headerText='Freight Charges' width='90px' format='C2' textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
                </Columns>
            </Grid>
        </div>
    );
}