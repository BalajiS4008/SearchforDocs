import { Grid, Columns, Column, GridRef, SortSettings, PageSettings, TextAlign, ClipMode, FilterBarType } from '@syncfusion/react-grid';
import { NumericTextBox } from "@syncfusion/react-inputs";
import { Button } from '@syncfusion/react-buttons';
import { useRef, useMemo, useState } from 'react';
import { restaurantMenu } from './restaurantDetails';
import { PropertyColumn, PropertyPane, PropertyRow } from '../../common/property-pane';

export default function App() {
    // Initialize grid reference for accessing grid methods.
    const gridRef = useRef<GridRef>(null);
    // Initialize state for sort, and pagination settings.   
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({enabled: true, pageSize: 8, pageCount:4});

    // Navigates to the page index entered in the NumericTextBox.
    const clickHandler = () => {
        const index = (document.getElementById('pageIndex') as HTMLInputElement).value;
        if (gridRef.current) {
            gridRef.current?.goToPage(parseInt(index, 10));
        }
    };

    // Render memoized Grid component with resturant data and settings.
    return (
        <>
            <PropertyPane>
                <PropertyColumn>
                    <PropertyRow>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                            <label style={{ minWidth: '120px', fontWeight: "bold", }}>Change Page Index:</label>
                            <NumericTextBox id="pageIndex" min={1} max={7} className='page-style' format='###.##' width={110} defaultValue={1} />
                            <Button onClick={clickHandler} style={{ marginBottom: '-3px' }}>Go to page</Button>
                        </div>
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            {
                useMemo(() => (
                    <Grid ref={gridRef} dataSource={restaurantMenu} sortSettings={sortSettings} pageSettings={pageSettings} >
                        <Columns>
                            <Column field="ItemID" headerText="Item ID" width={55} />
                            <Column field="ItemName" headerText="Dish Name" width={80} clipMode={ClipMode.EllipsisWithTooltip} />
                            <Column field="Category" headerText="Category" width={80} />
                            <Column field="Price" headerText="Cost" width={40} format="C2" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                            <Column field="SpiceLevel" headerText="Spiciness" width={60} />
                            <Column field="Description" headerText="Description" width={185} clipMode={ClipMode.EllipsisWithTooltip}/>
                        </Columns>
                    </Grid>
                ), [])
            }
        </>
    );
};
