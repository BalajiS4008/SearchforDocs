import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings, SearchSettings, TextAlign, ClipMode, FilterBarType } from '@syncfusion/react-grid';
import { DropDownList, ChangeEventArgs } from '@syncfusion/react-dropdowns';
import { useState, useMemo } from 'react';
import { productData } from './productData';
import { PropertyColumn, PropertyPane, PropertyRow } from '../../common/property-pane';

export default function App() {
    // Initialize state for filter, sort, search, toolbar, and pagination settings.
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [toolbarSettings] = useState<string[]>(['Search']);
    const [searchSettings, setSearchOptions] = useState<SearchSettings>({ enabled: true, operator: 'contains' });
    // Dropdown options for search operators.
    const dropDownData:{ [key: string]: unknown }[]= [
        { text: 'Contains', value: 'contains' },
        { text: 'Starts With', value: 'startswith' },
        { text: 'Ends With', value: 'endswith' },
        { text: 'Equal', value: 'equal' },
        { text: 'Like', value: 'like' },
        { text: 'Wildcard', value: 'wildcard' }
        
    ];
    const dropdownFields = { text: 'text', value: 'value' };

 // Updates the search operator used in the grid's search settings.
    const changeAlignment = (props?: ChangeEventArgs) => {        
        // Placeholder for updating search operator.
        setSearchOptions((prev: SearchSettings) => ({
            ...prev,
            operator: props?.value as string
        }));
    };
    // Memoize grid component to optimize rendering.
    return (
        <>
            <PropertyPane>
                <PropertyColumn>
                    <PropertyRow>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '260px' }}>
                            <label htmlFor="culture-select" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>Search operators:
                            </label>
                            <DropDownList width={90} dataSource={dropDownData as { [key: string]: object }[]} defaultValue={searchSettings.operator} fields={dropdownFields} onChange={changeAlignment} />
                        </div>
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            {
                useMemo(() => (
                    <Grid dataSource={productData}  searchSettings={searchSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
                        <Columns>
                            <Column field="ProductID" headerText="ID" width="90" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                            <Column field="ProductName" headerText="Name" width="130" clipMode={ClipMode.EllipsisWithTooltip}/>
                            <Column field="QuantityPerUnit" headerText="Quantity Per Unit" clipMode={ClipMode.EllipsisWithTooltip} width="120" />
                            <Column field="UnitsSold" headerText="Units Sold" width="90" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                            <Column field="UnitPrice" headerText="Price Per Unit" width="110" format="C2" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                            <Column field="TotalCost" headerText="Total Cost" width="100" format="C2" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                        </Columns>
                    </Grid>
                ), [searchSettings])
            }
        </>
    );
}
