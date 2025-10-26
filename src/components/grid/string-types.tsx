import { Grid, Column, Columns, FilterSettings, SortSettings, EditSettings, EditType, ColumnType, TextAlign, FilterBarType } from '@syncfusion/react-grid';
import { employeeAssetRegistry } from './employeeProfileDetails';
import { useState } from 'react';
import { CheckboxProps } from '@syncfusion/react-buttons';
import { NumericTextBoxProps, TextBoxProps } from '@syncfusion/react-inputs';
import { DatePickerProps } from '@syncfusion/react-calendars';
import { DropDownListProps } from '@syncfusion/react-dropdowns';

export default function App() {
    // State to manage sort, filter, edit and toolbar settings.    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const orderIDRules = { required: true, number: true };
    const employeeIDRules = { required: true };
    const designationRules = { required: true };
    const nameEditParams = { 
        type: EditType.TextBox, 
        params: { placeholder: 'Enter Name', labelMode:"Never", } as Partial<TextBoxProps & NumericTextBoxProps & CheckboxProps & DatePickerProps & DropDownListProps> & { labelMode?: string; }
    } 
    const idEditParams = { 
        type: EditType.TextBox, 
        params: { placeholder: 'Enter ID', labelMode:"Never", } as Partial<TextBoxProps & NumericTextBoxProps & CheckboxProps & DatePickerProps & DropDownListProps> & { labelMode?: string; }
    } 
    const teamEditParams = { 
        type: EditType.TextBox, 
        params: { placeholder: 'Enter Team', labelMode:"Never", } as Partial<TextBoxProps & NumericTextBoxProps & CheckboxProps & DatePickerProps & DropDownListProps> & { labelMode?: string; }
    } 

    return (
        <div>
            <Grid dataSource={employeeAssetRegistry} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} height={300}>
                <Columns>
                    <Column field='EmployeeID' headerText='Employee ID' width='120' isPrimaryKey={true} edit={idEditParams} validationRules={orderIDRules}></Column>
                    <Column field='EmployeeName' headerText='Employee Name' width='150' edit={nameEditParams} validationRules={employeeIDRules}></Column>
                    <Column field='Team' headerText='Team' width='150' edit={teamEditParams} />
                    <Column field='Designation' headerText='Designation' width='160' edit={{ type:EditType.DropDownList }} validationRules={designationRules} />
                    <Column field='DateOfJoining' headerText='Date Of Joining' width='170' edit={{ type:EditType.DatePicker }} type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} format='yMd' textAlign={TextAlign.Right} />
                    <Column field='Location' headerText='Location' width='130' edit={{ type:EditType.DropDownList }} />
                </Columns>
            </Grid>
        </div>
    );
}