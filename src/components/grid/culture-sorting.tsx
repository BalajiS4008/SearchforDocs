import { Column, Columns, Grid, PageSettings, SortSettings, TextAlign, ValueType } from '@syncfusion/react-grid';
import { loadCldr, L10n, setCurrencyCode, Provider } from '@syncfusion/react-base';
import * as arLocalization from '@syncfusion/react-locale/src/ar.json';
import * as arAllData from '@syncfusion/react-cldr-data/main/ar/all.json';
import * as numberingSystemData from '@syncfusion/react-cldr-data/supplemental/numberingSystems.json';
import * as currencyData from '@syncfusion/react-cldr-data/supplemental/currencyData.json';
import { orderDetails } from './orderDetails';
import { useState } from 'react';

// Load all cultures.
L10n.load({
    ...arLocalization
});
setCurrencyCode('AED');
loadCldr(arAllData, numberingSystemData, currencyData);

export default function App() {
    const formatOption = { type: 'date', format: 'yMd' };
    // Initialize state for sort, and pagination settings.    
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4  });

    // Custom sort props.comparerValue for handling numbers, dates, and strings.    
    const sortComparer = (referenceValue: ValueType, comparerValue: ValueType, _refObj?: object, _?: object, sortDirection?: string): number => {
        // Handle number comparison.
        if (typeof referenceValue === 'number' && typeof comparerValue === 'number' && sortDirection === 'Ascending') {
            return referenceValue - comparerValue;
        }
        if (typeof referenceValue === 'number' && typeof comparerValue === 'number' && sortDirection === 'Descending') {
          return comparerValue - referenceValue;
        }

        // Handle date comparison.
        if (referenceValue instanceof Date && comparerValue instanceof Date) {
            const referenceTime = referenceValue.getTime();
            const comparerTime = comparerValue.getTime();
            if (!isNaN(referenceTime) && !isNaN(comparerTime) && sortDirection === 'Ascending') {
                return referenceTime - comparerTime;
            }
            if (!isNaN(referenceTime) && !isNaN(comparerTime) && sortDirection === 'Descending') {
                return comparerTime - referenceTime;
            }
        }

        // Handle string or boolean comparison or fallback for invalid dates.
        const intlCollator = new Intl.Collator(undefined, { sensitivity: 'variant', usage: 'sort' });
        return intlCollator.compare(String(referenceValue), String(comparerValue));
    };
    // Render grid with order data and configured settings.
    return (
        <Provider locale={'ar'} >
            <div>
                <Grid dataSource={orderDetails} sortSettings={sortSettings} pageSettings={pageSettings}>
                    <Columns>
                        <Column field='OrderID' headerText='Order ID' width='70' textAlign={TextAlign.Right} sortComparer={sortComparer} />
                        <Column field='CustomerName' headerText='Customer Name' width='100' sortComparer={sortComparer} />
                        <Column field='OrderDate' headerText='Order Date' width='100' textAlign={TextAlign.Right} format={formatOption} sortComparer={sortComparer} />
                        <Column field='ShipAddress' headerText='Ship Address' width='100' />
                        <Column field='ShipCountry' headerText='Ship Country' width='100' />
                        <Column field='Freight' headerText='Freight Charges' width='100' textAlign={TextAlign.Right} format='C2' sortComparer={sortComparer} />
                    </Columns>
                </Grid>
            </div>
        </Provider>
    )
};
