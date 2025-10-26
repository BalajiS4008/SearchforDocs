import { Grid, Columns, Column, PageSettings, SortSettings, FilterBarType, ClipMode, TextAlign } from '@syncfusion/react-grid';
import { restaurantMenu } from './restaurantDetails';
import { useState } from 'react';

export default function App() {
  // State to manage sort and page settings.    
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 7, pageCount: 4 });
  return (
    <div>
      <Grid dataSource={restaurantMenu} pageSettings={pageSettings} sortSettings={sortSettings} >
        <Columns>
          <Column field="ItemID" headerText="Item Code" width={70}/>
          <Column field="ItemName" headerText="Dish Name" width={80} />
          <Column field="Category" headerText="Food Type" width={60}/>
          <Column field="CuisineType" headerText="Cuisine" width={60}/>
          <Column field="Description" headerText="Description" width={110} clipMode={ClipMode.EllipsisWithTooltip}/>
          <Column field="Price" filter={{filterBarType:FilterBarType.NumericTextBox}} headerText="Item Cost" format="C2" textAlign={TextAlign.Right} width={70} />
        </Columns>
      </Grid>
    </div>
  );
};