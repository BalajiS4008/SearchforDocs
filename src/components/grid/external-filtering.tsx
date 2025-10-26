import { Grid, Columns, Column, GridRef, FilterSettings, SortSettings, PageSettings, FilterEvent, ColumnType, FilterBarType, TextAlign, ActionType } from '@syncfusion/react-grid';
import { useRef, useMemo, useState } from 'react';
import { Button } from '@syncfusion/react-buttons';
import { scheduledFlights } from './flightScheduleDetails';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
    const gridRef = useRef<GridRef>(null);
    
    // state to manage sort, filter and page settings.   
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [isFiltering, setIsFiltering] = useState<boolean>(true);

    // Applies a filter to the "FlightNumber" column for a specific value.
    const applyFilter = () => {
        if (gridRef.current) {
            gridRef.current?.filterByColumn('FlightNumber', 'equal', 'JE-165');
            setIsFiltering(false);
        }
    };

    const onFilter = (args: FilterEvent) => {
        if (args.action === ActionType.ClearFiltering) {
            setIsFiltering(true);
        }
        else if (args.action === ActionType.Filtering){
            setIsFiltering(false)
        }
    }

      // Clears all filters applied to the grid.
    const clearFilters = () => {
        if (gridRef.current) {
            gridRef.current?.clearFilter?.();
            setIsFiltering(true);
        }
    };

    return (
        <>
            <PropertyPane>
                <PropertyColumn>
                    <PropertyRow>
                        <div>
                            <Button style={{ marginRight: '10px' }} onClick={applyFilter} disabled={!isFiltering}>Apply Filter</Button>
                            <Button onClick={clearFilters} disabled={isFiltering}>Clear Filter</Button>
                        </div>
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            {
                useMemo(() => (
                    <Grid
                        ref={gridRef}
                        dataSource={scheduledFlights}
                        sortSettings={sortSettings}
                        filterSettings={filterSettings}
                        pageSettings={pageSettings}
                        onFilter={onFilter}
                    >
                        <Columns>
                            <Column field="FlightNumber" headerText="Flight Number" width={130} />
                            <Column field="Airline" headerText="Airline" width={145} />
                            <Column field="Gate" headerText="Gate" width={90} />
                            <Column field="Terminal" headerText="Terminal" width={95} />
                            <Column field="DepartureTime" headerText="Departure Time" width={170} format='yMd' type={ColumnType.Date} filter={{ filterBarType: FilterBarType.DatePicker }} textAlign={TextAlign.Right}/>
                            <Column field="ArrivalTime" headerText="Arrival Time" width={170} format='yMd' type={ColumnType.Date} filter={{ filterBarType: FilterBarType.DatePicker }} textAlign={TextAlign.Right} />
                            <Column field="Status" headerText="Status" width={90} />
                        </Columns>
                    </Grid>
                ), [isFiltering])
            }
        </>
    );
};
