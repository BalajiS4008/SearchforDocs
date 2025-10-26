import { Grid, Columns, Column, GridRef, SortSettings, FilterSettings, PageSettings, FilterBarType, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { useState, useCallback, useMemo, useRef } from 'react';
import { Button } from '@syncfusion/react-buttons';
import { bookingRecords } from './hotelBookingDetails';
import './console.css';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
  const gridRef = useRef<GridRef>(null);
  const [sortSettings] = useState<SortSettings>({ enabled: true });
  const [filterSettings] = useState<FilterSettings>({ enabled: true });
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  // Logs when grid rendering starts.
  const onRenderStart = useCallback(() => {
    setConsoleOutput((prev) => [...prev, `"onGridRenderStart" event triggered.\n\n`]);
  }, []);

  // Logs when grid rendering completes.
  const onReady= useCallback(() => {
    setConsoleOutput((prev) => [...prev, `"onGridRenderComplete" event triggered.\n\n`]);
  }, []);

  // Logs when grid data is loaded.
  const onDataLoad = useCallback(() => {
    if(consoleOutput.length === 0){
    setConsoleOutput((prev) => [...prev, `"onDataLoad" event triggered.\n\n`]);
  }
  else{
     setConsoleOutput((prev) => [...prev, `\n"onDataLoad" event triggered.\n\n`]);

  }
  }, []);

  // Logs grid error with details.
  const onError = useCallback((args: Error) => {
    setConsoleOutput(prev => [...prev, `Grid "onError" event called: ${JSON.stringify(args)}.\n\n`]);
  }, []);

  // Clears render start and complete logs.
  const clearConsole = useCallback(() => {
    setConsoleOutput([]);
  }, []);

  // Refreshes the grid component manually.
  const refresh = useCallback(() => {
    gridRef.current?.refresh();
  }, []);

  // Memoizes grid to avoid unnecessary re-renders.
  const gridComponent = useMemo(
    () => (
      <Grid ref={gridRef} dataSource={bookingRecords} sortSettings={sortSettings} filterSettings={filterSettings}
         onDataLoad={onDataLoad} onGridRenderComplete={onReady} onGridRenderStart={onRenderStart} onError={onError} pageSettings={pageSettings}>
        <Columns>
          <Column field="BookingID" headerText="Booking ID" width="120" />
          <Column field="GuestName" headerText="Name" width="140" />
          <Column field="CheckInDate" headerText="Check In" width="190"  type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} format="yMd" textAlign={TextAlign.Right} />
          <Column field="CheckOutDate" headerText="Check Out" width="190"  type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} format="yMd" textAlign={TextAlign.Right} />
          <Column field="RoomType" headerText="Room Type" width="130" />
          <Column field="TotalAmount" headerText="Total Amount" format="C2" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} width="140" />
          <Column field="PaymentStatus" headerText="Payment Status" width="160" />
        </Columns>
      </Grid>
    ),
    [ onDataLoad, onReady, onRenderStart, onError]
  );

  return (
    <>
      <PropertyPane position="top" >
          <PropertyColumn>
              <PropertyRow>
                <div>
                  <Button onClick={refresh}>
                    Refresh
                  </Button>
                </div>
              </PropertyRow>
          </PropertyColumn>
      </PropertyPane>
      <div>
        {gridComponent}
        <div className="console-container">
          <div className="console-header">
            <span className="console-title">Console</span>
            <Button onClick={clearConsole} disabled={consoleOutput.length === 0}>
              Clear
            </Button>
          </div>
          <div className="console-content">
            <pre>
              {consoleOutput.length === 0 ? 'Interact with the grid by performing paging, sorting or filtering to view event notifications.' :
                `${consoleOutput.join('')}`}
            </pre>
          </div>
        </div>
      </div>
      
    </>
  );
}