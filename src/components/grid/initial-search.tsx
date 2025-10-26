import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings, SearchSettings, TextAlign, FilterBarType, ClipMode } from '@syncfusion/react-grid';
import { restaurantMenu } from './restaurantDetails';
import { useState } from 'react';
 
export default function App() {
    // Initialize state for filter, sort, search, toolbar, and pagination settings.
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount:4 });
    const [toolbarSettings] = useState<string[]>(['Search']);
    const [searchSettings] = useState<SearchSettings>({
        enabled: true,
        value: 'Dessert',
        operator: 'contains',
        caseSensitive: true,
        ignoreAccent: true
    });
    // Render grid with restaurant data and configured settings.
    return (
        <div>
            <Grid dataSource={restaurantMenu} searchSettings={searchSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field='ItemID' headerText='Item ID' isPrimaryKey={true} textAlign={TextAlign.Right} width='100px'></Column>
                    <Column field='ItemName' headerText='Item Name' width='120px' clipMode={ClipMode.EllipsisWithTooltip}></Column>
                    <Column field='Category' headerText='Category' width='85px'></Column>
                    <Column field='CuisineType' headerText='Cuisine Type' width='100px' ></Column>
                    <Column field='SpiceLevel' headerText='Spice Level' width='90px' ></Column>
                    <Column field='Price' headerText='Price' width='60px' format='C2' textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
                    <Column field='Description' headerText='Description' width='145px' clipMode={ClipMode.EllipsisWithTooltip}></Column>
                </Columns>
            </Grid>
        </div>
    );
}