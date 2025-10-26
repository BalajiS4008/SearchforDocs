import { Grid, Column, Columns, EditTemplateProps, SortSettings, PageSettings, EditSettings, TextAlign, ClipMode, EditType, ColumnType } from '@syncfusion/react-grid';
import { useMemo, useCallback, useState } from 'react';
import { complexData, Employees } from './employeeData';
import { TextBox, TextBoxChangeEvent } from '@syncfusion/react-inputs';

export default function App() {
  // State to manage sort, page, edit and toolbar settings.    
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
  const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
  const employeeIDRules = { required: true, number: true };
  const stringValidationRules = { required: true };

  // Edit template for First Name field.
  const firstNameTemplate = useCallback((props: EditTemplateProps) => {
  const data = props.data as Employees;
  return (
    <TextBox
      name='Name__FirstName'
      defaultValue={data.Name?.FirstName}
      onChange={(args: TextBoxChangeEvent) => {
        props.onChange(args?.value as string);
      }}
    />
  );
}, []);

  // Edit template for Last Name field.
  const lastNameTemplate = useCallback((props: EditTemplateProps) => {
    const data = props.data as Employees;
    return (
      <TextBox      
        name='Name__LastName'
        defaultValue={data.Name?.LastName}
        onChange={(args: TextBoxChangeEvent) => {
          props.onChange(args?.value as string);
        }}
      />
    );
  }, []);


  return useMemo(() => (
    // Memoized Grid component with custom edit templates for nested name fields.
    <div>
      <Grid id="grid" dataSource={complexData} editSettings={editSettings} toolbar={toolbarSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
        <Columns>
          <Column field='EmployeeID' headerText='Employee ID' width='110' textAlign={TextAlign.Right} isPrimaryKey={true} validationRules={employeeIDRules} />
          <Column field='Name.FirstName' headerText='First Name' width='100' editTemplate={firstNameTemplate} />
          <Column field='Name.LastName' headerText='Last Name' width='100' editTemplate={lastNameTemplate} />
          <Column field='Title' headerText='Designation' edit={{type: EditType.DropDownList}} validationRules={stringValidationRules} width='170' clipMode={ClipMode.EllipsisWithTooltip} />
          <Column field='HireDate' headerText='Hire Date' width="120" edit={{ type: EditType.DatePicker }} type={ColumnType.Date} format="yMd" textAlign={TextAlign.Right} />
          <Column field='City' headerText='City' validationRules={stringValidationRules} width='90'  />
        </Columns>
      </Grid>
    </div>
  ), []);
}
