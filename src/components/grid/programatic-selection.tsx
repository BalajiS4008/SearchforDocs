import { Grid, Column, Columns, GridRef, SelectionSettings, SortSettings, PageSettings, TextAlign, ClipMode } from '@syncfusion/react-grid';
import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { useRef, useState } from 'react';
import { productData } from './productData';
import { PropertyColumn, PropertyPane, PropertyRow } from '../../common/property-pane';

export default function App() {
    // Initialize state for selection, sort, and pagination settings.   
    const [selectionSettings] = useState<SelectionSettings>({enabled: true, mode: 'Multiple', type: 'Row' });
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const gridRef = useRef<GridRef>(null);
    // Define dropdown options for row selection actions.
    const dropdownData: { [key: string]: unknown }[] = [
        { text: 'Select Row 5', value: 'selectRow' },
        { text: 'Select Rows 1,3 & 5', value: 'selectRows' },
         { text: 'Clear 5th row', value: '5' },
        { text: 'Clear Selection', value: 'clearSelection' }
    ];
    // Handle dropdown selection changes for grid row selection.
    const handleDropdownChange = (args?: ChangeEventArgs) => {
        if (gridRef.current) {
            if (args?.value === 'selectRow') {
                gridRef.current.selectRow(4);
            } else if (args?.value === 'selectRows') {
                gridRef.current.selectRows?.([0, 2, 4]);
            } else if (args?.value === 'clearSelection') {
                gridRef.current.clearSelection();
            } else if( args?.value === '5' ){
                 gridRef.current.clearRowSelection([4]);
            }
            
        }
    };
    // Render dropdown and grid components with product data.
    return (
        <>
            <PropertyPane>
                <PropertyColumn>
                    <PropertyRow>
                        <div style={{ width: '200px' }}>
                            <DropDownList
                                dataSource={dropdownData as { [key: string]: object }[]}
                                fields={{ text: 'text', value: 'value' }}
                                placeholder="Choose an action"
                                onChange={handleDropdownChange}
                            />
                        </div>
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            <Grid ref={gridRef} dataSource={productData} selectionSettings={selectionSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field="ProductID" headerText="ID" width="70" textAlign={TextAlign.Right} />
                    <Column field="ProductName" headerText="Name" width="130" clipMode={ClipMode.EllipsisWithTooltip}/>
                    <Column field="QuantityPerUnit" headerText="Quantity Per Unit" clipMode={ClipMode.EllipsisWithTooltip} width="120" />
                    <Column field="UnitsSold" headerText="Units Sold" width="90" textAlign={TextAlign.Right} />
                    <Column field="UnitPrice" headerText="Price Per Unit" width="110" format="C2" textAlign={TextAlign.Right} />
                    <Column field="TotalCost" headerText="Total Cost" width="100" format="C2" textAlign={TextAlign.Right} />
                </Columns>
            </Grid>
        </>
    );
}

