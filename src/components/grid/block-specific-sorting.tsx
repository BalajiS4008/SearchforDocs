import { Grid, Columns, Column, GridRef, SortSettings, PageSettings, SortEvent, TextAlign, ColumnType, FilterBarType, ActionType } from '@syncfusion/react-grid';
import './console.css';
import { useState, useMemo, useCallback, useRef } from 'react';
import { medicalHistory } from './healthCareDetails';
import { Button } from '@syncfusion/react-buttons';

export default function App() {
    // Initialize grid reference for accessing grid methods.
    const gridRef = useRef<GridRef>(null);
    // Initialize state for sort, and pagination settings.    
    const [sortSettings] = useState<SortSettings>({ enabled: true});   
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    // Manage console output for page event.
    const [sortCompleteOutput, setSortCompleteOutput] = useState<string[]>([]); 

    //Memoized handler for sort complete.
    const onSort = useCallback((props:SortEvent) => {
        if (props.action === ActionType.Sorting) {
            const sortInfo = `{action: "${props.action}", field: "${props.field}", direction: "${props.direction}"}`;
            setSortCompleteOutput(prev => [...prev, `"onSort" event triggered.`, `Sort Action Details: *${sortInfo}*`]);
        } else if (props.action === ActionType.ClearSorting) {
            const sortInfo = `{action: "${props.action}"}`;
            setSortCompleteOutput(prev => [...prev, `"onSort" event triggered.`, `Sort Action Details: *${sortInfo}*`]);
        }
    }, []);
 
    // Memoized handler for clearing the console.    
    const clearConsole = useCallback(() => {
        setSortCompleteOutput([]);
    }, []);
 
    // Memoize grid component to optimize rendering.
    const gridComponent = useMemo(() => (
        <Grid ref={gridRef} dataSource={medicalHistory} sortSettings={sortSettings} onSort={onSort} pageSettings={pageSettings}>
            <Columns>
                <Column field="PatientID" headerText="Patient ID" filter={{filterBarType:FilterBarType.NumericTextBox}} width="110" textAlign={TextAlign.Right} />
                <Column field="FirstName" headerText="Patient Name" width="140" />
                <Column field="LastVisitDate" headerText="Last Visit" width="110" format="yMd" textAlign={TextAlign.Right} type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}}/>
                <Column field="MedicalCondition" headerText="Medical Condition" width="150" />
                <Column field="VisitCount" headerText="Visit Count" width="100" headerTextAlign='Center' textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
                <Column field="InsuranceProvider" headerText="Insurance Provider" width="160" />
                <Column field="Country" headerText="Country" width="90" />
            </Columns>
        </Grid>
    ), [onSort]); // Depend only on event handlers.
 
    return (
        <div>
            {gridComponent}
            <div className="console-container">
                <div className="console-header">
                    <span className="console-title">
                        Console
                    </span>
                    <Button onClick={clearConsole} disabled={sortCompleteOutput.length === 0} >Clear</Button>
                </div>
                <div className="console-content">
                    <pre>
                        {sortCompleteOutput.length === 0
                        ? 'Apply a sort action to view the sorting notification.'
                        : sortCompleteOutput.map((line, index) => {
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
