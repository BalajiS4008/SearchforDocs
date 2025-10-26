import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, FilterBarType, TextAlign } from '@syncfusion/react-grid';
import { restaurantMenu } from './restaurantDetails';
import { useState } from 'react';


export default function App() {
    // Initialize state for filter, sort, and pagination settings.  
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true, mode:'Multiple'});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4  });
    // Render grid with restaurant data and configured settings.
    return (
        <div>
            <Grid dataSource={restaurantMenu} sortSettings={sortSettings} filterSettings={filterSettings} pageSettings={pageSettings} >
                <Columns>
                    <Column field="ItemID" headerText="Item Code" width={70} />
                    <Column field="ItemName" headerText="Dish Name" width={80} />
                    <Column field="Price" headerText="Cost" width={60} format="C2" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
                    <Column field="Category" headerText="Food Type" width={80} />
                    <Column field="CuisineType" headerText="Cuisine Type" width={80} />
                </Columns>
            </Grid>
        </div>
    );
};

