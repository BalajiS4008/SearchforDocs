import { Grid, Column, Columns, GridRef, FilterSettings, SortSettings, PageSettings, EditSettings, EditType, TextAlign, ClipMode, FilterBarType } from '@syncfusion/react-grid';
import { Button } from "@syncfusion/react-buttons";
import { useRef, useState } from 'react';
import { productDatas } from './productDatas';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
  const gridRef = useRef<GridRef>(null);
  // State to manage sort, filter, edit and page settings.
  const [filterSettings] = useState<FilterSettings>({ enabled: true });
  const [sortSettings] = useState<SortSettings>({ enabled: true });
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
  const productIDRules = { required: true };
  const productRules = { required: true };
  const discountRules = { required: true, number: true };
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  // Updates the row with ProductID "P002" and disables the button.
  const rowdata = () => {
    gridRef?.current?.setRowData?.("P-002", {
      ProductID: "P-002",
      ProductCategory: 'Toys-Updated',
      Discount: 24.8,
      StockQuantity: 35,
      Revenue: 264.75,
      TransactionDate: new Date(),
      ShippingMethod: 'Express'
    }, true);
    setIsButtonDisabled(true);
  };

  return (
    // Grid component with external button to update row data.
    <>
      <PropertyPane>
        <PropertyColumn>
          <PropertyRow>
            <div>
              <Button style={{ marginRight: '5px' }} onClick={rowdata} disabled={isButtonDisabled}>Update Row Value</Button>
            </div>
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <Grid ref={gridRef} dataSource={productDatas} editSettings={editSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings} >
        <Columns>
          <Column field='ProductID' headerText='Product ID' width='70px' textAlign={TextAlign.Right} validationRules={productIDRules} isPrimaryKey={true} />
          <Column field='ProductCategory' headerText='Product' width='90px' validationRules={productRules} clipMode={ClipMode.EllipsisWithTooltip} />
          <Column field='StockQuantity' headerText='Units Sold' width='90px' edit={{type:EditType.NumericTextBox}} textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.NumericTextBox}} />
          <Column field='Discount' headerText='Discount' edit={{type:EditType.NumericTextBox}}  filter={{filterBarType:FilterBarType.NumericTextBox}} format="C2" textAlign={TextAlign.Right} width='100px' validationRules={discountRules} />
          <Column field='Revenue' headerText='Revenue' width='100px' edit={{type:EditType.NumericTextBox}}  format="C2" textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.NumericTextBox}} />
          <Column field='ShippingMethod' headerText='Ship Method' edit={{type:EditType.DropDownList}} width='100px' validationRules={productRules} />
        </Columns>
      </Grid>
    </>
  );
}
