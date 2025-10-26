import { Grid, Columns, Column, GridRef, SortSettings, FilterSettings, PageSettings, PageEvent, ColumnType, TextAlign, FilterBarType } from '@syncfusion/react-grid';
import './console.css';
import { useState, useCallback, useRef, useMemo } from 'react';
import { bookingRecords } from './hotelBookingDetails';
import { Button } from '@syncfusion/react-buttons';

export default function App() {
    // Initialize grid reference for accessing grid methods.
    const gridRef = useRef<GridRef>(null);
    // Initialize state for sort, filter, and pagination settings.   
    const [sortSettings] = useState<SortSettings>({ enabled: true});
    const [filterSettings] = useState<FilterSettings>({enabled: true});    
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    // Manage console output for page event.
    const [pageCompleteOutput, setPageCompleteOutput] = useState<string[]>([]); 

    // Memoized handler for page change complete. 
    const onPageChange = useCallback((prop:PageEvent) => {
        const pageType = `{currentPage: "${prop.currentPage}", previousPage: "${prop.previousPage}"}` ;
        setPageCompleteOutput(prev => [...prev, `"onPageChange" event triggered.`, `Page Action Details: *${pageType}*`]);
    }, []); // No dependencies
 
    // Memoized handler for clearing the console.
    const clearConsole = useCallback(() => {
        setPageCompleteOutput([]);
    }, []);
 
    // Memoize grid component to optimize rendering.
    const gridComponent = useMemo(() => (
        <Grid ref={gridRef} dataSource={bookingRecords}  onPageChange={onPageChange} pageSettings={pageSettings} filterSettings={filterSettings} sortSettings={sortSettings} >
            <Columns>
                <Column field="BookingID" headerText="Booking ID" width={130} />
                <Column field="GuestName" headerText="Name" width={130} />
                <Column field="CheckInDate" headerText="Check In" width={180} format="yMd" type={ColumnType.Date} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.DatePicker}} />
                <Column field="CheckOutDate" headerText="Check Out" width={180} format="yMd" type={ColumnType.Date} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.DatePicker}} />
                <Column field="NumberOfGuests" headerText="Persons" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} width={140} />
                <Column field="RoomType" headerText="Room Type" width={130} />
                <Column field="PaymentStatus" headerText="Payment Status" width={160} />
            </Columns>
        </Grid>
    ), [ onPageChange]); // Depend only on event handlers.
    // Render grid and custom console for event output.
    return (
        <div>            
            {gridComponent}
            <div className="console-container">
                <div className="console-header">
                    <span className="console-title"> 
                        Console
                    </span>
                    <Button onClick={clearConsole} disabled={pageCompleteOutput.length === 0}>Clear</Button>
                </div>
                <div className="console-content">
                    <pre>
                        {pageCompleteOutput.length === 0
                        ? 'Apply a page action to view the paging notification.'
                        : pageCompleteOutput.map((line, index) => {
                            if (line.includes("*")) {
                                const parts = line.split('*');
                                return (
                                    <div key={index}>
                                        {parts[0]}
                                        <i>{parts[1]}</i><br/><br/>
                                    </div>
                                );
                            }
                            return <div key={index}>{line}</div>;
                        })}
                    </pre>
                </div>
            </div>
        </div>
    );
}
