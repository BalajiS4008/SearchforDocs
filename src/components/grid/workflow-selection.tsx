import { Grid, Columns, Column, RowSelectEvent, TextAlign, ClipMode } from '@syncfusion/react-grid';
import { useState, useCallback } from 'react';
import './console.css';
import { employeePerformanceData } from './employeePerformanceData';
import { Button } from '@syncfusion/react-buttons';

export default function App() {
    // Initialize state for event log.
    const [eventLog, setEventLog] = useState<string[]>([]);
    // Handle row selection event.
    const handleonRowSelect = useCallback((prop:RowSelectEvent) => {
      const rowSelectType = prop.selectedCurrentRowIndexes?.length || prop.selectedRowIndexes?.length ? `{selectedCurrentRowIndexes: [${prop.selectedCurrentRowIndexes}], selectedRowIndexes: [${prop.selectedRowIndexes}]}`: `{selectedRowIndex: ${prop.selectedRowIndex}}`
      setEventLog(prev => [...prev, `"onRowSelect" event triggered.`, `RowSelect Action Details: *${rowSelectType}*`]);
    }, []);
    // Handle row deselection event.
    const handleonRowDeselect = useCallback((prop:RowSelectEvent) => {
      const rowDeSelectType = prop.deSelectedCurrentRowIndexes?.length ? `{deSelectedCurrentRowIndexes: [${prop.deSelectedCurrentRowIndexes}]}`: `{deSelectedRowIndex: ${prop.deSelectedRowIndex}}` 
      setEventLog(prev => [...prev, `"onRowDeselect" event triggered.`, `RowDeselect Action Details: *${rowDeSelectType}*`]);
    }, []);
    // Clear event log console.
    const clearConsole = useCallback(() => {
      setEventLog([]);
    }, []);
    // Render grid and console for event logging.
    return (
      <div>
        <Grid 
            dataSource={employeePerformanceData}
            pageSettings={{ enabled: true, pageSize: 8 }}
            selectionSettings={{ 
                mode: 'Multiple',
            }}
            onRowSelect={handleonRowSelect} 
            onRowDeselect={handleonRowDeselect}
        >
            <Columns>
                <Column field="EmployeeID" headerText="Employee ID" width="80" textAlign={TextAlign.Right}  />
                <Column field="Name" headerText="Name" width="90" clipMode={ClipMode.EllipsisWithTooltip}/>
                <Column field="JoinDate" headerText="Join Date" textAlign={TextAlign.Right} format="yMd" width="70" />
                <Column field="Department" headerText="Department" width="80" />
                <Column field="Role" headerText="Role" width="90" />
                <Column field="PerformanceRating" headerText="Rating" width="60" />
                <Column field="Salary" headerText="Salary" textAlign={TextAlign.Right} format="C2" width="60" />
            </Columns>
        </Grid>
        <div className="console-container">
            <div className="console-header">
                <span className="console-title"> 
                    Console
                </span>
                <Button onClick={clearConsole} disabled={eventLog.length === 0}>Clear</Button>
            </div>
            <div className="console-content">
              <pre>
                {eventLog.length === 0
                ? 'Perform selection and view the selection notification.'
                : eventLog.map((line, index) => {
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