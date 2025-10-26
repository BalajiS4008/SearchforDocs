import { Grid, Column, Columns, GridRef, FilterSettings, SortSettings, PageSettings, EditSettings, EditType, FilterBarType, TextAlign, ClipMode } from '@syncfusion/react-grid';
import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { useRef, useMemo, useState } from 'react';
import { productData } from './productData';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
    const gridRef = useRef<GridRef>(null);
    const [allowEditingColumn, setAllowEditingColumn] = useState<Record<string, boolean>>({
      ProductName: true,
      QuantityPerUnit: true,
      UnitsSold: true,
      UnitPrice: true,
      TotalCost: true
    });
    // State to manage sort, filter, page, edit and toolbar settings.    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true }); //, showAddNewRow: true
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const productIDRules = { required: true, number: true };
    const productNameRules = { required: true };
    const stockRules = { required: true, min: 0, max: 130 };
    const alignmentData: { [key: string]: unknown }[]  = [
        { text: 'Product ID', value: 'ProductID' },
        { text: 'Product Name', value: 'ProductName' },
        { text: 'Quantity Per Unit', value: 'QuantityPerUnit' },
        { text: 'Units Sold', value: 'UnitsSold' },
        { text: 'Unit Price', value: 'UnitPrice' },
        { text: 'Total Cost', value: 'TotalCost' },
    ];
    const dropdownFields = { text: 'text', value: 'value' };

    // Handles dropdown change to disable editing for selected column.
    const changeAlignment = (args?: ChangeEventArgs) => {
      const fieldName: string = args?.value as string;
        setAllowEditingColumn({
          ProductName: true,
          QuantityPerUnit: true,
          UnitsSold: true,
          UnitPrice: true,
          TotalCost: true,
          [fieldName]: false
        });
    };

    return (
        // Memoized Grid component with editing, sorting, filtering, and paging.
        <>
            <PropertyPane>
                <PropertyColumn>
                    <PropertyRow>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '400px' }}>
                            <label htmlFor="culture-select" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>Select column to disable editing:
                            </label>
                            {useMemo(() => <DropDownList width={70} dataSource={alignmentData as { [key: string]: object }[]} defaultValue={alignmentData[0].value as string} fields={dropdownFields} onChange={changeAlignment} />, [])}
                        </div>
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            <Grid ref={gridRef} dataSource={productData} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field='ProductID' headerText='Product ID' width='80' textAlign={TextAlign.Right} isPrimaryKey={true} filter={useMemo(() => ({filterBarType:FilterBarType.NumericTextBox}), [])} validationRules={productIDRules}/>
                    <Column field='ProductName' headerText='Product Name' width='100' edit={useMemo(() => ({type:EditType.DropDownList}), [])} validationRules={productNameRules} clipMode={ClipMode.EllipsisWithTooltip} allowEdit={allowEditingColumn.ProductName}/>
                    <Column field='QuantityPerUnit' headerText='Quantity Per Unit' width='100' allowEdit={allowEditingColumn.QuantityPerUnit}/>
                    <Column field='UnitsSold' headerText='Units Sold' width='100' edit={useMemo(() => ({type:EditType.NumericTextBox}), [])} validationRules={stockRules} textAlign={TextAlign.Right} filter={useMemo(() => ({filterBarType:FilterBarType.NumericTextBox}), [])} allowEdit={allowEditingColumn.UnitsSold}/>
                    <Column field='UnitPrice' headerText='Unit Price' format="C2" width='110' textAlign={TextAlign.Right} edit= {useMemo(() => ({type:EditType.NumericTextBox}), [])} filter={useMemo(() => ({filterBarType:FilterBarType.NumericTextBox}), [])} allowEdit={allowEditingColumn.UnitPrice}/>
                    <Column field='TotalCost' headerText='Total Cost' format="C2" width='110' textAlign={TextAlign.Right} edit= {useMemo(() => ({type:EditType.NumericTextBox}), [])} filter={useMemo(() => ({filterBarType:FilterBarType.NumericTextBox}), [])} allowEdit={allowEditingColumn.TotalCost}/>
                </Columns>
            </Grid>
        </>
    );
}
