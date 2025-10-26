import { Grid, Column, Columns,GridRef,  PageSettings, EditSettings, EditType, TextAlign, ClipMode, FilterBarType, ColumnType } from '@syncfusion/react-grid';
import { orderDetails } from './orderDetails';
import React, { useState } from 'react';

export default function App() {
    const gridRef = React.useRef<GridRef>(null);
    // State to manage  page, edit and toolbar settings.    
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const orderIDRules = { required: true };
    const shipCountryRules = { required: true };
    const freightRules = { required: true, min: 1, max: 1000 };
    
    // Handles row click to start editing the selected row.
    const onMouseUp = (event: React.MouseEvent<Element, MouseEvent> | undefined) => {
        const target = event?.target as HTMLElement;
        if (target.classList.contains('sf-cell') && gridRef.current) {
            const rowInfo = gridRef.current.getRowInfo(target);
            if (rowInfo && rowInfo.rowIndex !== undefined) {
                if (gridRef.current.isEdit)
                gridRef.current.saveDataChanges();
                setTimeout(() => {
                    gridRef.current?.selectRow(rowInfo.rowIndex as number);
                    gridRef.current?.editRecord();
                }, 0);
            }
        }
   };

    return (
        <div>
            <Grid ref={gridRef} dataSource={orderDetails} onMouseUp={onMouseUp} editSettings={editSettings} toolbar={toolbarSettings}  pageSettings={pageSettings} >
                <Columns>
                    <Column field="OrderID" headerText="Order ID" textAlign={TextAlign.Right} width="100px" isPrimaryKey= {true} validationRules={orderIDRules} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
                    <Column field="CustomerID" headerText="Customer ID" width="110px" />
                    <Column field="OrderDate" headerText="Order Date" textAlign={TextAlign.Right} edit={{ type: EditType.DatePicker }} format="yMd" type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} width="120px" />
                    <Column field="ShipName" headerText="Ship Name" width="160px" clipMode={ClipMode.EllipsisWithTooltip} />
                    <Column field="ShipCountry" headerText="Ship Country" edit={{ type: EditType.DropDownList }} validationRules={shipCountryRules} width="130px" />
                    <Column field="Freight" headerText="Freight Charges" edit={{ type: EditType.NumericTextBox }} textAlign={TextAlign.Right} format="C2" validationRules={freightRules} filter={{filterBarType: FilterBarType.NumericTextBox}} width="130px" />
                </Columns>
            </Grid>
        </div>
    );
}