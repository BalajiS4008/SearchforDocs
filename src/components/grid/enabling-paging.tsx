import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, TextAlign, FilterBarType } from '@syncfusion/react-grid';
import { foodNutritionList } from './nutritionDetails';
import { useState } from 'react';

export default function App() {
    // Initialize state for filter, sort, and pagination settings.    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageCount: 4 });
    
    return (
        <div>
            <Grid dataSource={foodNutritionList} filterSettings={filterSettings} pageSettings={pageSettings} sortSettings={sortSettings}>
                <Columns>
                    <Column field="FoodID" headerText="Food ID" width="90" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                    <Column field="FoodName" headerText="Food Name" width="100" />
                    <Column field="Protein" headerText="Protein (g)" width="90" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
                    <Column field="Fat" headerText="Fat (g)" width="90" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                    <Column field="Calories" headerText="Calories (kcal)" width="90" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                    <Column field="Fiber" headerText="Fiber (g)" width="90" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                </Columns>
            </Grid>
        </div>
    );
};

