import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, FilterBarType, ColumnType, TextAlign, ClipMode } from '@syncfusion/react-grid';
import { assignedTasks } from './taskDetails';
import { useState } from 'react';

export default function App() {
    // Initialize state for filter, sort, and pagination settings.    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true, allowUnsort: false });
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4  });
    // Render grid with task data and configured settings.
    return (
        <div>
            <Grid dataSource={assignedTasks} sortSettings={sortSettings} filterSettings={filterSettings} pageSettings={pageSettings} >
                <Columns>
                    <Column field="TaskID" headerText="Task ID" width="90" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
                    <Column field="TaskName" headerText="Task Name" width="120" clipMode={ClipMode.EllipsisWithTooltip} />
                    <Column field="AssignedTo" headerText="Assignee" width="90" />
                    <Column field="StartDate" headerText="Start Date" width="160"  textAlign={TextAlign.Right} format="yMd" type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} />
                    <Column field="Priority" headerText="Priority" width="80" />
                    <Column field="Status" headerText="Status" width="90" />
                    <Column field="EstimatedHours" headerText="Allotted Time (in Hours)" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} width="180" />
                </Columns>
            </Grid>
        </div>
    );
};

