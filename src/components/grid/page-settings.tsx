import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, ColumnType, TextAlign, FilterBarType } from '@syncfusion/react-grid';
import { orderDetails } from './orderDetails';
import { useState } from 'react';

export default function App() {

    // state to manage sort, filter and page settings    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 12, currentPage: 3, pageCount: 5});

    return (
        <div>
            <Grid dataSource={orderDetails} filterSettings={filterSettings} pageSettings={pageSettings} sortSettings={sortSettings}>
                <Columns>
                    <Column field='OrderID' headerText='Order ID' width='100' textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}></Column>
                    <Column field='CustomerName' headerText='Customer Name' width='150'></Column>
                    <Column field='OrderDate' headerText='Order Date' width='180' format='yMd' type={ColumnType.Date} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.DatePicker}}/>
                    <Column field='ShipAddress' headerText='Ship Address' clipMode='EllipsisWithTooltip' width='140'></Column>
                    <Column field='ShipCountry' headerText='Ship Country' width='130'></Column>
                    <Column field='Freight' headerText='Freight Charges' width='140' format='C2' textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
                </Columns>
            </Grid>
        </div>
    );
};