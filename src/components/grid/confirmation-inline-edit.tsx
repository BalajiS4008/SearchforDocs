import { Grid, Column, Columns, GridRef,FilterSettings, PageSettings, EditSettings, EditType, FilterBarType, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { Checkbox, CheckboxChangeEvent } from '@syncfusion/react-buttons';
import { useRef, useState, useMemo } from 'react';
import { shipmentDetails } from './warehouseDetails';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
  // State to manage filter,toolbar, edit and page settings.     
  const [deleteConfirm, setDeleteConfirm] = useState(true);
  const [editSettings, setEditSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true, confirmOnDelete: true});
  const [filterSettings] = useState<FilterSettings>({ enabled: true });
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4});
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const shipmentIDRules = { required: true };
  const statusRules = { required: true };
  const quantityRules = { required: true, min: 1, max: 1000 };
  const gridRef = useRef<GridRef>(null);

   // Handles checkbox change to toggle delete confirmation dialog.
  const change = (args: CheckboxChangeEvent) => {
    setDeleteConfirm(args.value);
    setEditSettings(prev => ({
      ...prev,
      confirmOnDelete: args.value
    }));
  };

  return useMemo(() => (
    // Memoized Grid component with dynamic delete confirmation toggle.
    <>
      <PropertyPane>
        <PropertyColumn>
          <PropertyRow>
              <Checkbox
                className='ml-1'
                checked={deleteConfirm}
                onChange={change}
                label='Enable/Disable show delete confirmation dialog'
              />
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <Grid
        ref={gridRef}
        dataSource={shipmentDetails}
        editSettings={editSettings}
        toolbar={toolbarOptions}
        filterSettings={filterSettings}
        pageSettings={pageSettings}
      >
        <Columns>
          <Column field="ShipmentID" headerText="Shipment ID" width="110px" isPrimaryKey={true} validationRules={shipmentIDRules} />
          <Column field="ItemDescription" headerText="Item" width="140px" />
          <Column field="Quantity" headerText="Quantity" edit={{type:EditType.NumericTextBox}} filter={{ filterBarType: FilterBarType.NumericTextBox }} textAlign={TextAlign.Right} width="130px" validationRules={quantityRules} />
          <Column field="Date" headerText="Shipped Date" textAlign={TextAlign.Right} edit={{ type: EditType.DatePicker }} filter={{ filterBarType: FilterBarType.DatePicker }} format="yMd" type={ColumnType.Date} width="170px" />
          <Column field="Status" headerText="Status" edit={{ type: EditType.DropDownList }} width="110px" validationRules={statusRules} />
          <Column field="WarehouseLocation" headerText="Location" width="120px" edit={{ type: EditType.DropDownList }}/>
        </Columns>
      </Grid>
    </>
  ), [deleteConfirm, editSettings]);
}
