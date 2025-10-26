import { Grid, Columns, Column, SelectionSettings, SortSettings, PageSettings, TextAlign, ClipMode } from '@syncfusion/react-grid';
import './restaurantDetail.css';
import { restaurantMenu } from './restaurantDetails';
import { useState } from 'react';

export default function App() {
  // State to disable row selection in the grid.
  const [selectionSettings] = useState<SelectionSettings>({ enabled: false }); 

  // State to enable sorting in the grid.
  const [sortSettings] = useState<SortSettings>({ enabled: true }); 
  
  // State to enable paging with page size and count.
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 9, pageCount: 4 }); 


  return (
    <div>
      <Grid className="alt-row" selectionSettings={selectionSettings} dataSource={restaurantMenu} pageSettings={pageSettings} 
      sortSettings={sortSettings} enableAltRow={true} enableHover={false} > 
      <Columns>
        <Column field="ItemID" headerText="Item Code" isPrimaryKey={true} width={80} />
        <Column field="ItemName" headerText="Dish Name" width={100} />
        <Column field="Category" headerText="Food Type" width={90}  />
        <Column field="Description" headerText="Dish Highlights" width={130} clipMode={ClipMode.EllipsisWithTooltip} />
        <Column field="Price" headerText="Cost" width={50} format="C2" textAlign={TextAlign.Right} />
      </Columns>
      </Grid>
    </div>
  );
};
