import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings, EditSettings, EditType, ClipMode, FilterBarType, TextAlign } from '@syncfusion/react-grid';
import { foodOrderData } from './restaurantDetails';
import { useState } from 'react';

export default function App() {
    // State to manage sort, filter, page, edit and toolbar settings.    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const itemIDRules = { required: true };
    const categoryRules = { required: true };
    const priceRules = { required: true, min: 1, max: 1000 };
    const editParams = {
        type: EditType.NumericTextBox,
        params: {
            decimals: 0,
            validateOnType: true,
            format: 'N',
            spinButton: false,
        }
    };
    
    return (
        <div>
            <Grid dataSource={foodOrderData} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} pageSettings={pageSettings} sortSettings={sortSettings}>
                <Columns>
                    <Column field='ItemID' headerText='ID' width='100' validationRules={itemIDRules} isPrimaryKey={true} ></Column>
                    <Column field='Category' headerText='Category' width='100' edit={{ type: EditType.DropDownList }}  validationRules={categoryRules}></Column>
                    <Column field='CuisineType' headerText='Cuisine' width='90' edit={{ type: EditType.DropDownList }} validationRules={categoryRules}></Column>
                    <Column field='Description' headerText='Description' width='120' clipMode={ClipMode.EllipsisWithTooltip}></Column>
                    <Column field='SpiceLevel' headerText='Spice Level' width='90' edit={{type: EditType.DropDownList}} textAlign={TextAlign.Right} />
                    <Column field='Price' headerText='Price' width='125' format="C0" textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.NumericTextBox}} edit={editParams} validationRules={priceRules} />
                </Columns>
            </Grid>
        </div>
    );
}