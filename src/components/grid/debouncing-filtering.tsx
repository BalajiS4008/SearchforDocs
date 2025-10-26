import { Grid, Columns, Column, GridRef, FilterSettings, SortSettings, PageSettings, TextAlign, FilterBarType } from '@syncfusion/react-grid';
import { useEffect, useMemo, useRef, useState } from 'react';
import { debounce } from '@syncfusion/react-base';
import { TextBox, TextBoxChangeEvent } from '@syncfusion/react-inputs';
import { salesDetails } from './salesTransactionDetails';
import { PropertyColumn, PropertyPane, PropertyRow } from '../../common/property-pane';

export default function App() {
    const gridRef = useRef<GridRef>(null);
    const [searchTerm, setSearchTerm] = useState('');

    // state to manage sort, filter and page settings.   
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });

    // Debounced filter function to apply filtering on the "Product" column.
    const debouncedFilter = useMemo(() => debounce((value: string) => {
        if (gridRef.current) {
            if (value) {
                gridRef.current?.filterByColumn('Product', 'contains', value);
            } else {
                gridRef.current?.clearFilter();
            }
        }
    }, 300), [gridRef]);

    // Triggers the debounced filter whenever the search term changes.
    useEffect(() => {
        debouncedFilter?.(searchTerm);
    }, [searchTerm]);

    return (
        <>
            <PropertyPane>
                <PropertyColumn>
                    <PropertyRow>
                        <div>
                            <TextBox
                                placeholder="Search Product"
                                onChange={(e: TextBoxChangeEvent) => setSearchTerm(e.value as string)}
                                width={200}
                                labelMode="Auto"
                            />
                        </div>
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            {
                useMemo(() => (
                    <Grid
                        ref={gridRef}
                        dataSource={salesDetails}
                        sortSettings={sortSettings}
                        filterSettings={filterSettings}
                        pageSettings={pageSettings}
                    >
                        <Columns>
                            <Column field="ProductId" headerText="Product ID" />
                            <Column field="Product" headerText="Product"/>
                            <Column field="UnitPrice" headerText="Unit Price" format="C2" textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.NumericTextBox}}/>
                            <Column field="Discount" headerText="Discount" format="P" textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.NumericTextBox}}/>
                            <Column field="StockLevel" headerText="Stock Units" textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.NumericTextBox}}/>
                            <Column field="StockStatus" headerText="Stock Status"/>
                            <Column field="Location" headerText="Location"/>
                        </Columns>
                    </Grid>
                ), [sortSettings,filterSettings,pageSettings])
            }
        </>
    );
}
