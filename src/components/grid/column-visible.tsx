import { Grid, Columns, Column, SortSettings, PageSettings, ClipMode, TextAlign } from '@syncfusion/react-grid';
import { foodNutritionList } from './nutritionDetails';
import { useState } from 'react';

export default function App() {
    // Initialize sort settings with enabled state.
    const [sortSettings] = useState<SortSettings>({enabled: true});
    
    // Initialize page settings with pagination enabled, page size, and count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    
    return (
        <div>
            <Grid dataSource={foodNutritionList} pageSettings={pageSettings} sortSettings={sortSettings}  clipMode={ClipMode.EllipsisWithTooltip} >
                <Columns>
                   
                    <Column field="FoodName" headerText="Food Name" width="80px"/>
                    <Column field="Protein" headerText="Protein" textAlign={TextAlign.Right} visible={false}/>
                    <Column field="Fat" headerText="Fat (g)" textAlign={TextAlign.Right} width="60px"/>
                    <Column field="Fiber" headerText="Fiber (g)" textAlign={TextAlign.Right} width="60px"/>
                    <Column field="Calories" headerText="Calories (kcal)" textAlign={TextAlign.Right} width="100px"/>
                    <Column field="Sugar" headerText="Sugar (g)" textAlign={TextAlign.Right} width="80px"/>
                    <Column field="Sodium" headerText="Sodium (mg)" textAlign={TextAlign.Right} width="90px"/>
                    <Column field="Calcium" headerText="Calcium (mg)" textAlign={TextAlign.Right} width="80px"/>

                </Columns>
            </Grid>
        </div>
    );
}
