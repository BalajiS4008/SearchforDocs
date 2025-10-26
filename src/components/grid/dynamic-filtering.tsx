import { Grid, Columns, Column, GridRef, FilterSettings, FilterPredicates,PageSettings, SortSettings, ClipMode, FilterBarType, ColumnType, TextAlign } from '@syncfusion/react-grid';
import { Button } from '@syncfusion/react-buttons';
import { useRef, useState } from 'react';
import { NumericTextBox, TextBox } from '@syncfusion/react-inputs';
import { shipmentDetails } from './warehouseDetails';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
    // Reference to access Grid methods like filtering.
    const gridRef = useRef<GridRef>(null);
    const [filterValues, setFilterValues] = useState({ ShipmentID: '', Quantity: null });
    const [filterSettings, setFilterSettings] = useState<FilterSettings>({ enabled: true });
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });

    const isFormValues = filterValues.ShipmentID !== '' || filterValues.Quantity !== null;

    // Updates filter values based on user input.
    const handleChange = (field: keyof typeof filterValues, value: number | string | null) => {
        setFilterValues(prev => ({ ...prev, [field]: value }));
    };

    // Applies filters to the grid based on current input values.
    const applyDynamicFilter = () => {
        if (!gridRef.current) return;
        const columns: FilterPredicates[] = [];
        if (filterValues.ShipmentID) {
            columns.push({ field: 'ShipmentID', operator: 'contains', value: filterValues.ShipmentID });
        }
        if (filterValues.Quantity !== null) {
            columns.push({ field: 'Quantity', operator: 'equal', value: filterValues.Quantity });
        }
        setFilterSettings(prev => ({ ...prev, columns: columns }));
    };

    // Clears all filters applied to the grid.
    const clearFilters = () => {
        if (gridRef.current) {
            gridRef.current?.clearFilter();
            setFilterValues({ ShipmentID: '', Quantity: null });
        }
    };

    return (
        <>
            <PropertyPane>
                <PropertyColumn>
                    <PropertyRow>
                        <div>
                            <div><h3 style={{ marginTop: '0px', marginBottom: '5px' }}>Filter</h3></div>
                            <div style={{ display: 'inline-flex', gap: '5px' }}>
                                <TextBox name="ShipmentID" placeholder="Shipment ID" onChange={(e) => handleChange('ShipmentID', e.value || '')} value={filterValues.ShipmentID} width={200} labelMode="Always" />
                                <NumericTextBox name="Quantity" placeholder="Quantity" onChange={(e) => handleChange('Quantity', e.value as number)} value={filterValues.Quantity} style={{ marginLeft: "10px" }} width={200} labelMode="Always" />
                                <Button onClick={applyDynamicFilter} style={{ marginLeft: "10px", height: "32px", marginTop: "10px" }} disabled={!isFormValues}>Apply</Button>
                                <Button onClick={clearFilters} style={{ marginLeft: "10px", height: "32px", marginTop: "10px" }} disabled={!isFormValues}>Clear</Button>
                            </div>
                        </div>
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            <Grid ref={gridRef} dataSource={shipmentDetails} sortSettings={sortSettings} filterSettings={filterSettings} pageSettings={pageSettings} >
                <Columns>
                    <Column field="ShipmentID" headerText="Shipment ID" width="120px" clipMode={ClipMode.EllipsisWithTooltip}/>
                    <Column field="ItemDescription" headerText="Item" width="135px"/>
                    <Column field="Quantity" headerText="Quantity" textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.NumericTextBox}} width="100px" />
                    <Column field="Date" headerText="Shipped Date" textAlign={TextAlign.Right} format="yMd" filter={{filterBarType: FilterBarType.DatePicker}} type={ColumnType.Date} width="180px" />
                    <Column field="CarrierName" headerText="Carrier Name" width="120px" textAlign={TextAlign.Center} clipMode={ClipMode.EllipsisWithTooltip} />
                    <Column field="Status" headerText="Status" width="120px" />
                    <Column field="WarehouseLocation" headerText="Location" width="100px" />
                </Columns>
            </Grid>
        </>
    );
}
