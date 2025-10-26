import { Grid, Column, Columns, GridRef, FilterSettings, SortSettings, PageSettings, ClipMode, TextAlign, FilterBarType } from '@syncfusion/react-grid';
import { JSX, useRef, useCallback, useMemo, useState } from 'react';
import { NumericChangeEvent, NumericTextBox } from '@syncfusion/react-inputs';
import { productData } from './productData';
import './productsData.css';

export default function App() {
    // Initialize grid reference for accessing grid methods.
    const gridRef = useRef<GridRef>(null);
    
    // Handle page navigation on NumericTextBox value change.
    const change = useCallback((args: NumericChangeEvent) => {
        if (gridRef.current) {
            gridRef.current?.goToPage( args.value as number);
        }
    }, []);

    // Render custom pager template for grid navigation.
    const customTemplate = useCallback((props: Record<string, number>): JSX.Element => (
        <div className="product-inventory-pager">
            <div className="control-section" style={{ display: "inline-flex"}}>
                <div className="content-wrapper">
                    <label style={{ marginTop: 8, marginLeft: 30,}}>Change page:</label>
                    <div style={{ marginLeft:20, display: "inline-block"}}>
                        <NumericTextBox min={1} max={props.totalPages} format='###.##' value={props.currentPage} onChange={change} width={120}/>
                    </div>
                </div>
            </div>
            <div id="totalPages" className="product-inventory-pager-message" style={{ marginTop: 15, border: "none", display: "inline-block"}}>
                <span>
                    {props.currentPage} of {props.totalPages} pages ({props.totalRecordsCount} items)
                </span>
            </div>
        </div>
    ), [change]);
    
    // Initialize state for filter, sort, and pagination settings.    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({enabled: true, template: customTemplate, pageSize: 5});
    
    // Render memoized Grid component with product data and settings.
    return (
        <div>
            {
            useMemo(() => (
                <Grid ref={gridRef} dataSource={productData} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
                    <Columns>
                        <Column field="ProductID" headerText="ID" width="90" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                        <Column field="ProductName" headerText="Product Name" clipMode={ClipMode.EllipsisWithTooltip} width="110" />
                        <Column field="QuantityPerUnit" headerText="Quantity Per Unit" width="110" clipMode={ClipMode.EllipsisWithTooltip} />
                        <Column field="UnitsSold" headerText="Units Sold" width="110" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                        <Column field="UnitPrice" headerText="Unit Price" width="110" format="C2" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                        <Column field="TotalCost" headerText="Cost" width="120" format="C2" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />                        
                    </Columns>
                </Grid>
            ), [customTemplate])
            }
        </div>
    );
}
