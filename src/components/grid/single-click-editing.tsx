import { Grid, Column, Columns, GridRef, ColumnTemplateProps,  PageSettings, EditSettings, EditType, TextAlign, FilterBarType } from '@syncfusion/react-grid';
import { Checkbox, CheckboxChangeEvent } from "@syncfusion/react-buttons";
import { useRef, useMemo, useCallback, useState } from 'react';
import { restaurantMenu, MenuItem } from './restaurantDetails';

export default function App() {
  const gridRef = useRef<GridRef>(null);    
  // State to manage  page, edit and toolbar settings.    
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
  const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
  const itemIDRules = { required: true };
  const stringValidationRules = { required: true }; 
  const priceRules = { required: true, min: 1, max: 100 };

  // Custom cell template for the IsAvailable column using Checkbox.
  const checkBoxTemplate = useCallback((props?: ColumnTemplateProps<MenuItem>): string | React.ReactElement => (
    <Checkbox
      checked={(props?.data as MenuItem).IsAvailable}
      onChange={(e: CheckboxChangeEvent) => {
        const viewRecords = gridRef?.current?.getCurrentViewRecords?.();
        const rowIndex = viewRecords?.findIndex((record) => (record as MenuItem).ItemID  === (props?.data as MenuItem).ItemID);
        const updatedData = { ...props?.data, IsAvailable: e.value };
        gridRef.current?.updateRecord((rowIndex as number), (updatedData as MenuItem));
      }}
    />
  ), []);

  return useMemo(() => (
    // Memoized Grid component with checkbox cell template for item availability.
    <div>
      <Grid id="grid" ref={gridRef} dataSource={restaurantMenu} editSettings={editSettings} toolbar={toolbarSettings} pageSettings={pageSettings}>
        <Columns>
          <Column field='ItemID' headerText='Item ID' width='100' isPrimaryKey={true} validationRules={itemIDRules} />
          <Column field='ItemName' headerText='Item Name' width='120' validationRules={stringValidationRules} />
          <Column field='RecommendedPairing' headerText='Complement' edit={{type:EditType.DropDownList}} width='110' validationRules={stringValidationRules} />
          <Column field='Price' headerText='Price' format="C2" validationRules={priceRules} edit={{type:EditType.NumericTextBox}} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} width='120' />
          <Column field='CuisineType' headerText='Cuisine' width='120' edit={{type:EditType.DropDownList}}/>
          <Column field='IsAvailable' headerText='Availability' template={checkBoxTemplate} width='120' edit={{ type: EditType.CheckBox }} />
        </Columns>
      </Grid>
    </div>
  ), []);
}
