import { Grid, Columns, Column, FilterSettings, SortSettings, ValueType, FilterBarType, ColumnType, TextAlign } from '@syncfusion/react-grid';
import { transactionLog } from './transactionDetails';
import { useState } from 'react';

export default function App() {

    // Initialize state for filter, and sort settings.   
    const [filterSettings] = useState<FilterSettings>({ enabled: true });
    const [sortSettings] = useState<SortSettings>({ enabled: true });

    // Custom sort comparer to handle null values and sort direction.
    const sortComparer = (referenceValue: ValueType, comparerValue: ValueType, _refObj?: object, _?: object, sortDirection?: string) => {
        const sortAsc = sortDirection === "Ascending" ? true : false;

        if (referenceValue === null && comparerValue === null) {
            return 0; // Both null, no change in order
        } else if (referenceValue === null) {
            return 1; // Nulls go to the bottom
        } else if (comparerValue === null) {
            return -1; // Nulls go to the bottom
        } else {
            // Non-null values are compared numerically
            return sortAsc
                ? (referenceValue as number) - (comparerValue as number)
                : (comparerValue as number) - (referenceValue as number);
        }
    };

    // Render grid with data and configured settings.
    return (
        <div>
            <Grid dataSource={transactionLog} sortSettings={sortSettings} filterSettings={filterSettings} height={350} >
                <Columns>
                    <Column field='Product' headerText='Product' width='70' />
                    <Column field='Category' headerText='Category' width='70' />
                    <Column field='TransactionDate' headerText='Transaction Date' format='yMd' textAlign={TextAlign.Right} type={ColumnType.Date} filter={{ filterBarType: FilterBarType.DatePicker }} width='110' />
                    <Column field='CustomerSegment' headerText='Market Segment' width='100' />
                    <Column field='UnitsSold' headerText='Units Sold' width='70' filter={{ filterBarType: FilterBarType.NumericTextBox }} textAlign={TextAlign.Right} sortComparer={sortComparer} format='N0' />
                    <Column field='Revenue' headerText='Revenue' format="C2" width='90' filter={{ filterBarType: FilterBarType.NumericTextBox }} textAlign={TextAlign.Right} sortComparer={sortComparer} />

                </Columns>
            </Grid>
        </div>
    );
};
