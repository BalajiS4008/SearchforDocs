import { Grid, Column, Columns, SortSettings, PageSettings, EditSettings, EditType, FilterBarType, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { tasksData } from './tasksData';
import { useState } from 'react';

export default function App() {
    // State to manage sort, page, edit and toolbar settings.   
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const taskIDRules = { required: true, number: true };
    const editparams = { params: { popupHeight: '300px' } };
    const stringValidationRules = { required: true };

    return (
        <div>
            <Grid dataSource={tasksData} toolbar={toolbarSettings} editSettings={editSettings} 
                sortSettings={sortSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field="TaskID" headerText="ID" width="80" textAlign={TextAlign.Right} isPrimaryKey={true} filter={{filterBarType:FilterBarType.NumericTextBox}} validationRules={taskIDRules} />
                    <Column field="TaskName" headerText="Task Name" width="120" edit={editparams} validationRules={stringValidationRules}/>
                    <Column field="Department" headerText="Department" width="130" edit= {{type: EditType.DropDownList}} />
                    <Column field="AssignedTo" headerText="Assigned To" width="110" allowEdit={false}/>
                    <Column field="Deadline" headerText="Due Date" width="130" edit= {{type:EditType.DatePicker}} format="yMd" textAlign={TextAlign.Right} type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} />
                    <Column field="Priority" headerText="Priority" width="115" edit={{type:EditType.DropDownList}}/>
                    <Column field="Status" headerText="Status" edit= {{type:EditType.DropDownList}} width="135" validationRules={stringValidationRules} />
                </Columns>
            </Grid>
        </div>
    );
}
