import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { useState } from 'react';
import { scheduledFlights } from './flightScheduleDetails';

export default function App() {
  // State to enable filtering in the grid.
  const [filterSettings] = useState<FilterSettings>({ enabled: true }); 

  // State to enable sorting in the grid.
  const [sortSettings] = useState<SortSettings>({ enabled: true }); 

  // State to enable paging with page size and count.
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 }); 

  return (
    <div>
      <Grid dataSource={scheduledFlights} pageSettings={pageSettings} filterSettings={filterSettings} sortSettings={sortSettings} >
        <Columns>
          <Column field="FlightNumber" headerText="Flight Number" width={130} />
          <Column field="Airline" headerText="Airline" width={170} />
          <Column field="Gate" headerText="Gate" width={100} />
          <Column field="Terminal" headerText="Terminal" width={100} />
          <Column field="DepartureTime" headerText="Departure Time" width={180} allowFilter={false} type={ColumnType.Date} format='dd/MM/yyyy hh:mm a' textAlign={TextAlign.Right}/>
          <Column field="ArrivalTime" headerText="Arrival Time" width={180} allowFilter={false} type={ColumnType.Date} format='dd/MM/yyyy hh:mm a' textAlign={TextAlign.Right} />
        </Columns>
      </Grid>
    </div>
  );
};