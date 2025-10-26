import { Grid, Columns, Column, SortSettings, SelectionSettings, PageSettings, ClipMode, TextAlign } from '@syncfusion/react-grid';
import './rowHover.css';
import { productData } from './productData';
import { useState } from 'react';

export default function App() {
  // State to disable row selection in the grid.
  const [selectionSettings] = useState<SelectionSettings>({ enabled: false }); 

  // State to enable sorting in the grid.
  const [sortSettings] = useState<SortSettings>({ enabled: true });

  // State to enable paging with page size and count.
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 }); 
    
  return (
      <div>
      <Grid dataSource={productData} enableHover={true} sortSettings={sortSettings} selectionSettings={selectionSettings}
          pageSettings={pageSettings} className='row-hover' >
          <Columns>
            <Column field="ProductID" headerText="Product ID" width={60} textAlign={TextAlign.Right} isPrimaryKey={true} clipMode={ClipMode.EllipsisWithTooltip} />
            <Column field="ProductName" headerText="Product Name" width={100} />
            <Column field="QuantityPerUnit" headerText="Units per Package" width={90} />
            <Column field="UnitsSold" headerText="Units Sold" width={80} textAlign={TextAlign.Right} format='N' /> 
            <Column field="UnitPrice" headerText="Unit Price" width={60} textAlign={TextAlign.Right} format='C2' />
            <Column field="TotalCost" headerText="Total Cost" width='60' textAlign={TextAlign.Right} format='C2' />
          </Columns>
        </Grid>
      </div>
  );
};