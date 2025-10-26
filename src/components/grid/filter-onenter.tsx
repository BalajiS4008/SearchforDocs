import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings, TextAlign, FilterBarType, FilterBarMode, ColumnType } from '@syncfusion/react-grid';
import { useState } from 'react';
import { tasksData } from './tasksData';

export default function App() {
   // State to enable sorting in the grid.
    const [sortSettings] = useState<SortSettings>({ enabled: true });

    // State to enable paging with page size and count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 }); 
    
    // State to enable filtering with OnEnter mode and FilterBar type.
    const [filterSettings] = useState<FilterSettings>({ enabled: true, mode: FilterBarMode.OnEnter, type: 'FilterBar' }); 

    return (
        <div>
            <Grid dataSource={tasksData} sortSettings={sortSettings} filterSettings={filterSettings} pageSettings={pageSettings} >
                <Columns>
                    <Column field="TaskID" headerText="ID" width={70} textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.NumericTextBox}} />
                    <Column field="TaskName" headerText="Task Name" width={160} filter={{filterBarType: FilterBarType.TextBox}} />
                    <Column field="AssignedTo" headerText="Assigned" width={120} filter={{filterBarType: FilterBarType.TextBox}} />
                    <Column field="Department" headerText="Department" width={115} filter={{filterBarType: FilterBarType.TextBox}} />
                    <Column field="Deadline" headerText="Deadline" type={ColumnType.Date} format="yMd" width={180} textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.DatePicker}} />
                    <Column field="Priority" headerText="Priority" width={100} filter={{filterBarType: FilterBarType.TextBox}} />
                    <Column field="Status" headerText="Status" width={100} filter={{filterBarType: FilterBarType.TextBox}} />
                </Columns>
            </Grid>
        </div>
    );
};