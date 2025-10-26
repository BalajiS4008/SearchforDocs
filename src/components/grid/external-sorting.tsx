import { Grid, Columns, Column, GridRef, SortSettings, PageSettings, ClipMode, TextAlign, SortEvent, ActionType } from '@syncfusion/react-grid';
import { Button } from '@syncfusion/react-buttons';
import { useRef, useMemo, useState, useCallback } from 'react';
import { appointmentSchedule } from './appointmentDetails';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
    // Initialize state for sort, and pagination settings.
    const [sortSettings] = useState<SortSettings>({ enabled: true });
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    // Initialize grid reference for accessing grid methods.
    const gridRef = useRef<GridRef>(null);
    const [isSorted, setIsSorted] = useState<boolean>(false);
    const [isItemSorted, setIsItemSorted] = useState<boolean>(false);

    // Sorts the 'ServiceItem' column in ascending order and updates the button states.
    const sortColumn = () => {
        gridRef.current?.sortByColumn('ServiceItem', 'Ascending');
        setIsSorted(true);
        setIsItemSorted(true)
    };

    // Removes sorting from the 'ServiceItem' column and updates the button states.
    const removeSort = () => {
        gridRef.current?.removeSortColumn('ServiceItem');
        setIsSorted(false);
    };

    // Clears all sorting applied to the grid and updates the button states.
    const clearSort = () => {
        gridRef.current?.clearSort();
        setIsSorted(false);
        setIsItemSorted(false)
    };

    // event fires after sort completes
    const onSort = useCallback((props: SortEvent) => {
        if (props.action === ActionType.Sorting) {
             if(props.field ==='ServiceItem' ){
                setIsItemSorted(true)
             }
            setIsSorted(true)
        }
        if (props.action === ActionType.ClearSorting) {
            setIsSorted(false);
            setIsItemSorted(false)
        }

    }, [])

    return (
        <>
            <PropertyPane>
                <PropertyColumn>
                    <PropertyRow>
                        <div>
                            <Button onClick={sortColumn} style={{ marginLeft: '10px' }} disabled={isSorted}>Sort Item column</Button>
                            <Button onClick={removeSort} style={{ marginLeft: '10px' }} disabled={!isItemSorted}>Remove Item sort</Button>
                            <Button onClick={clearSort} style={{ marginLeft: '10px' }} disabled={!isSorted}>Clear sorting</Button>
                        </div>
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            {
                useMemo(() => (
                    <Grid
                        ref={gridRef}
                        dataSource={appointmentSchedule}
                        sortSettings={sortSettings}
                        pageSettings={pageSettings}
                        onSort={onSort}
                    >
                        <Columns>
                            <Column field="ServiceItem" headerText="Item" width="120px" />
                            <Column field="CustomerName" headerText="Customer Name" width="130px" clipMode={ClipMode.EllipsisWithTooltip} />
                            <Column field="AppointmentDate" headerText="Appointment Date" format="yMd" textAlign={TextAlign.Right} width="130px" clipMode={ClipMode.EllipsisWithTooltip} />
                            <Column field="FollowUpDate" headerText="Follow-Up Date" format="dd/MM/yyyy hh:mm" textAlign={TextAlign.Right} width="160px" />
                            <Column field="ServiceFee" headerText="Service Fee" format="C2" textAlign={TextAlign.Right} width="130px" />
                        </Columns>
                    </Grid>
                ), [])
            }
        </>
    );
};
