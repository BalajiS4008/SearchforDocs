import { Grid, Columns, Column, ColumnHeaderTemplateProps, SortSettings, PageSettings, CellClassProps, ClipMode, TextAlign, CellType } from '@syncfusion/react-grid';
import { useCallback, useMemo, useState } from 'react';
import './flightScheduleDetails.css';
import { scheduledFlights } from './flightScheduleDetails';

export default function App() {
  // Initialize sort settings with enabled state.
  const [sortSettings] = useState<SortSettings>({enabled: true});
      
  // Initialize page settings with pagination enabled, page size, and count.
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });

  // Returns the CSS class name for the Flight Number, Gate, DepartureTime column header.
  const headerClassRules = (props?:CellClassProps) => {
    if(props?.cellType === CellType.Header && props?.column.field === 'FlightNumber'){
      return 'customcss';
    }
    else if(props?.cellType === CellType.Header && props?.column.field === 'Gate' || props?.column.field=== 'DepartureTime'){
      return 'customcss1';
    }
    return "";    
  }

  // Renders the header template for the Departure Time or Arrival Time column with an SVG icon.
  const dateHeaderTemplate = useCallback((props?: ColumnHeaderTemplateProps): string | React.ReactElement => {
    const date = props?.column.field === "DepartureTime" ? "Departure Time" : "Arrival Time";
    const classn = props?.column.field === "DepartureTime" ? "departure-date-temp" : "arrival-date-temp";
    return (
      <div className={classn}>
        <svg width="16" height="15" viewBox="0 0 21 23" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6 0V2H14V0H16V2H18C19.1046 2 20 2.89543 20 4V7V8V9V10.7546C19.3984 10.2724 18.7257 9.87526 18 9.58152V9H2V20H7.58152C7.87526 20.7257 8.27238 21.3984 8.75463 22H2C0.895431 22 0 21.1046 0 20V9V8V7V4C0 2.89543 0.895431 2 2 2H4V0H6ZM2 7H18V4H16H14H6H4H2V7ZM11 17C11 14.7909 12.7909 13 15 13C17.2091 13 19 14.7909 19 17C19 19.2091 17.2091 21 15 21C12.7909 21 11 19.2091 11 17ZM15 11C11.6863 11 9 13.6863 9 17C9 20.3137 11.6863 23 15 23C18.3137 23 21 20.3137 21 17C21 13.6863 18.3137 11 15 11ZM16 14V16H18V18H14V14H16Z" fill="black"/>
        </svg>
        {date}
      </div>
    );
  }, []);

  return (
    <div>
      {useMemo(
        // Memoized Grid component to prevent unnecessary re-renders.
        () => (
          <Grid dataSource={scheduledFlights} sortSettings={sortSettings} pageSettings={pageSettings} enableHover={false} className='flight-schedule-view' >
            <Columns>
              <Column field="FlightNumber" headerText="Flight Number" width={130} cellClass={headerClassRules} />
              <Column field="Airline" headerText="Airline" width={170} />
              <Column field="Gate" headerText="Gate" width={100} cellClass={headerClassRules} />
              <Column field="Terminal" headerText="Terminal" width={100} />
              <Column field="DepartureTime" headerText="Departure Time" width={150} format='dd/MM/yyyy hh:mm a' textAlign={TextAlign.Right} headerTemplate={dateHeaderTemplate} clipMode={ClipMode.EllipsisWithTooltip} cellClass={headerClassRules}/>
              <Column field="ArrivalTime" headerText="Arrival Time" width={160} format='dd/MM/yyyy hh:mm a' textAlign={TextAlign.Right} headerTemplate={dateHeaderTemplate} clipMode={ClipMode.EllipsisWithTooltip} />
            </Columns>
          </Grid>
        ), [])}
    </div>
  );
};