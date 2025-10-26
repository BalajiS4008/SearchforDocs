import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, FilterBarType, TextAlign } from '@syncfusion/react-grid';
import { foodNutritionList } from './nutritionDetails';
import { useState } from 'react';

export default function App() {
    // Initialize state for filter, sort, and pagination settings.    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4  });
    // Render grid with nutrition data and configured settings.
    return (
        <div>
            <Grid dataSource={foodNutritionList} sortSettings={sortSettings} filterSettings={filterSettings} pageSettings={pageSettings} >
                <Columns>
                    <Column field="FoodID" headerText="Food ID" width="90" textAlign='Right' filter={{filterBarType:FilterBarType.NumericTextBox}}/>
                    <Column field="FoodName" headerText="Food Name" width="120" />
                    <Column field="Protein" headerText="Protein (g)" width="100" textAlign={TextAlign.Right} allowSort={false} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                    <Column field="Fat" headerText="Fat (g)" width="90" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                    <Column field="Carbohydrate" headerText="Carbohydrate (g)" width="130" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                    <Column field="Fiber" headerText="Fiber (g)" width="100" textAlign='Right' filter={{filterBarType:FilterBarType.NumericTextBox}} />
                    <Column field="Calories" headerText="Calories (kcal)" width="120" textAlign='Right' filter={{filterBarType:FilterBarType.NumericTextBox}} />
                </Columns>
            </Grid>
        </div>
    );
};

