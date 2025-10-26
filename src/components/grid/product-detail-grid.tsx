import { useState, useMemo } from 'react';
import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings, FilterBarType, ClipMode, TextAlign, CellClassProps, CellType } from '@syncfusion/react-grid';
import { Checkbox, CheckboxChangeEvent } from '@syncfusion/react-buttons';
import './productData.css';
import { productData } from './productData';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
  const [visibility, setVisibility] = useState(false);
  const [filterSettings] = useState<FilterSettings>({ enabled: true });
  const [sortSettings] = useState<SortSettings>({ enabled: true });
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 10, pageCount: 4 });

  // Toggles the visibility of the Price column based on checkbox value.
  const toggleColumn = (args: CheckboxChangeEvent) => {
    setVisibility(args.value);
  };

  // Returns the CSS class for UnitPrice cells.
  const getPriceCellClass = (props?: CellClassProps): string => {
    return props?.cellType === CellType.Content ? 'sf-price-highlight' : (props?.cellType === CellType.Header ? 'sf-price-header' : '');
  };

  return useMemo(() => (
    // Memoized Grid component to prevent unnecessary re-renders.
    <>
      <PropertyPane position="top" >
        <PropertyColumn>
          <PropertyRow>
            <Checkbox onChange={toggleColumn} label='Show/Hide Price Column' className='productData-chekcbox' />
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <Grid dataSource={productData} className='product-detail'
            pageSettings={pageSettings} filterSettings={filterSettings} sortSettings={sortSettings} allowKeyboard={false} >
        <Columns>
          <Column field="ProductID" headerText="Product ID" width="110" filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} />
          <Column field="ProductName" headerText="Name" width="150" clipMode={ClipMode.EllipsisWithTooltip}/>
          <Column field="QuantityPerUnit" headerText="Quantity Per Unit" width="130"  clipMode={ClipMode.EllipsisWithTooltip} />
          <Column field="UnitsSold" headerText="Units Sold" width="110" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
          <Column field="UnitPrice" headerText="Price Per Unit" width="110" format="C2" filter={{filterBarType:FilterBarType.NumericTextBox}} visible={visibility} textAlign={TextAlign.Right} cellClass={getPriceCellClass} />
          <Column field="TotalCost" headerText="Total Cost" width="100" format="C2" filter={{filterBarType:FilterBarType.NumericTextBox}}  textAlign={TextAlign.Right} />
        </Columns>
      </Grid>
    </>
  ), [visibility]);
}
