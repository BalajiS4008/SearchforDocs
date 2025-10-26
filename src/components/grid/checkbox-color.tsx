import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings, EditSettings, EditType, FilterBarType, ClipMode, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { restaurantMenu } from './restaurantDetails';
import { useState } from 'react';
import { CheckboxProps, Color } from '@syncfusion/react-buttons';
import { NumericTextBoxProps, TextBoxProps } from '@syncfusion/react-inputs';
import { DatePickerProps } from '@syncfusion/react-calendars';
import { DropDownListProps } from '@syncfusion/react-dropdowns';

export default function App() {
    // State to manage sort, filter, page, edit and toolbar settings.    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const itemRules = { required: true, };
    const dishNameRules = { required: true };
    const priceRules = { required: true, min: 1, max: 1000 };

    const booleanEdit = {
        type: EditType.CheckBox,
        params: {
            color: Color.Info,  
        } as Partial<TextBoxProps & NumericTextBoxProps & CheckboxProps & DatePickerProps & DropDownListProps> & { color?: Color },
    };    
    
    return (
        <div>
            <Grid dataSource={restaurantMenu.slice(0, 15)} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} pageSettings={pageSettings} sortSettings={sortSettings}>
                <Columns>
                    <Column field="ItemID" headerText="Item Code" textAlign={TextAlign.Right} isPrimaryKey={true} validationRules={itemRules} width={110} />
                    <Column field="ItemName" headerText="Dish Name" width={100} validationRules={dishNameRules} clipMode={ClipMode.EllipsisWithTooltip}/>
                    <Column field="Price" headerText="Cost" width={130} format="C2" edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}}  textAlign={TextAlign.Right} validationRules={priceRules} />
                    <Column field="Category" headerText="Food Type" width={110} />
                    <Column field="SpiceLevel" headerText="Spice Level" edit={{ type:EditType.DropDownList}} width={120} />
                    <Column field="IsAvailable" headerText="Item Availability" width={120} displayAsCheckBox={true} type={ColumnType.Boolean} edit={booleanEdit} textAlign={TextAlign.Center}  />
                </Columns>
            </Grid>
        </div>
    );
}