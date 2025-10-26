import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, FilterBarType, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { tasksData } from './tasksData';
import { useState } from 'react';

export default function App() {
    // State to enable filtering in the grid.
    const [filterSettings] = useState<FilterSettings>({ enabled: true }); 
    
    // State to enable sorting in the grid.
    const [sortSettings] = useState<SortSettings>({ enabled: true }); 

    // State to enable paging with page size and count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 }); 

    return (
        <div>
            <Grid dataSource={tasksData} sortSettings={sortSettings} filterSettings={filterSettings} pageSettings={pageSettings} >
                <Columns>
                    <Column field="TaskID" headerText="ID" textAlign={TextAlign.Right} width={60} filter={{filterBarType: FilterBarType.NumericTextBox}} />
                    <Column field="TaskName" headerText="Task Name" width={120} />
                    <Column field="AssignedTo" headerText="Assigned" width={100} />
                    <Column field="Department" headerText="Department" width={115} />
                    <Column field="Deadline" headerText="Deadline" width={160} type={ColumnType.Date} format="yMd" textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.DatePicker}} />
                    <Column field="Priority" headerText="Priority" width={100} />
                    <Column field="Status" headerText="Status" width={100} />
                </Columns>
            </Grid>
        </div>
    );
};