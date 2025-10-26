import { Grid, Columns, Column, FilterSettings, SortSettings, TextAlign, FilterBarType, ColumnType } from '@syncfusion/react-grid';
import { employeeAssetRegistry } from './employeeProfileDetails';
import { useState } from 'react';
import './employeeProfile.css';

export default function App() {
    // Initialize state for filter, and sort settings.
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    // Render grid with manufacturing data and configured settings.
    return (
        <div>
            <Grid className="machine-monitor" dataSource={employeeAssetRegistry} filterSettings={filterSettings} sortSettings={sortSettings} height={300}>
                <Columns>
                    <Column field='EmployeeID' headerText='Employee ID' width='120' textAlign={TextAlign.Right}></Column>
                    <Column field='EmployeeName' headerText='Employee Name' width='140'></Column>
                    <Column field='Team' headerText='Team' width='150' />
                    <Column field='Designation' headerText='Designation' width='160' />
                    <Column field='DateOfJoining' headerText='Date Of Joining' width='160' type={ColumnType.Date} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.DatePicker}} format='yMd' />
                </Columns>
            </Grid>
        </div>
    );
};