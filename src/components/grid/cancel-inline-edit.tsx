import { Grid, Column, Columns, FilterSettings, PageSettings, EditSettings, EditType, TextAlign, FilterBarType, ColumnType, ActionType } from '@syncfusion/react-grid';
import { employeeDetails } from './employeeProfileData';
import { useState } from 'react';

export default function App() {
    // State to manage filter,toolbar, edit and page settings.  
    const [editSettings]= useState<EditSettings >({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [filterSettings] = useState<FilterSettings>({ enabled: true });
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const firstNameRules = { required: true };
    const departmentRules = { required: true };
    
    // Handles row edit and delete events, blocking actions for "Manager" role.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onRowEditStart = (args: any) => {
        if (args.data['Role'] === 'Manager') {
            args.cancel = true;
        }
    };

    // Handles data change start event, blocking deletion for "Manager" role.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onDataChangeStart = (args: any) => {
        if (args.action === ActionType.Delete && args.data[0]['Role'] === 'Manager') {
            args.cancel = true;
        }
    };

    return (
        <div>
            <Grid dataSource={employeeDetails} onRowEditStart={onRowEditStart} onDataChangeStart={onDataChangeStart} editSettings={editSettings} toolbar={toolbarOptions} filterSettings={filterSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field='EmployeeID' headerText='Employee ID' width='130' textAlign={TextAlign.Right} isPrimaryKey={true} filter={{ filterBarType: FilterBarType.NumericTextBox }}></Column>
                    <Column field='FirstName' headerText='Name' width='110' validationRules={firstNameRules}></Column>
                    <Column field='Role' headerText='Role' edit={{type:EditType.DropDownList}} width='130'></Column>
                    <Column field='HireDate' headerText='Hire Date' width='190' edit={{ type: EditType.DatePicker }} filter={{ filterBarType: FilterBarType.DatePicker }} format='yMd' type={ColumnType.Date} textAlign={TextAlign.Right} />
                    <Column field='Department' headerText='Department' width='120' validationRules={departmentRules} />
                    <Column field='Experience' headerText='Experience' edit= {{type:EditType.NumericTextBox}} textAlign={TextAlign.Right} filter={{ filterBarType: FilterBarType.NumericTextBox }} width='140'></Column>
                </Columns>
            </Grid>
        </div>
    );
}