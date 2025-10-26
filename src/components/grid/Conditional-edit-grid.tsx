import { Grid, Columns, Column, GridRef, RowEditEvent, RowAddEvent, SortSettings, FilterSettings, EditSettings, DeleteEvent, SaveEvent, ClipMode, TextAlign, EditType, FilterBarType, ColumnType } from '@syncfusion/react-grid';
import { useState, useMemo, useCallback, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { employeeInformation } from './employeeInformation';
 
interface GridComponentProps {
  userRole: 'Admin' | 'Employee';
  officeStartHour: number;
  officeEndHour: number;
  isOutsideOfficeHours: () => boolean;
  editOutput: string[];
  setEditOutput: Dispatch<SetStateAction<string[]>>;
  addOutput: string[];
  setAddOutput: Dispatch<SetStateAction<string[]>>;
  deleteOutput: string[];
  setDeleteOutput: Dispatch<SetStateAction<string[]>>;
}
 
const MemoizedGrid = Grid;
 
export default function GridComponent({
  userRole,
  officeStartHour,
  officeEndHour,
  isOutsideOfficeHours,
  setEditOutput,
  setAddOutput,
  setDeleteOutput,
}: GridComponentProps) {
  const gridRef = useRef<GridRef>(null);
 
  const [filterSettings] = useState<FilterSettings>({ enabled: true });
  const [sortSettings] = useState<SortSettings>({ enabled: true });
  const [editSettings, setEditSettings] = useState<EditSettings>({
    allowEdit: true,
    allowAdd: true,
    allowDelete: true,
    confirmOnDelete: true,
  });
  const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
  const employeeIDRules = { required: true, number: true };
  const employeeNameRules = { required: true };
 
  useEffect(() => {
    if (userRole === 'Admin') {
      setEditSettings({ allowEdit: true, allowAdd: true, allowDelete: true, confirmOnDelete: true });
    } else {
      if (!isOutsideOfficeHours()) {
        setEditSettings({ allowEdit: true, allowAdd: false, allowDelete: false, confirmOnDelete: true });
      } else {
        setEditSettings({ allowEdit: false, allowAdd: false, allowDelete: false, confirmOnDelete: true });
      }
    }
  }, [userRole, officeStartHour, officeEndHour, isOutsideOfficeHours]);
 
  const getCurrentUser = useCallback(() => ({
    name: 'James Wilson',
    role: userRole,
  }), [userRole]);
 
  const handleEditTool = useCallback(() => {
    const user = getCurrentUser();
    const outsideOfficeHours = isOutsideOfficeHours();
    if (user.role === 'Employee' && outsideOfficeHours) {
      setEditSettings({ allowEdit: false, allowAdd: false, allowDelete: false, confirmOnDelete: true });
    } else if (user.role === 'Employee') {
      setEditSettings({ allowEdit: true, allowAdd: false, allowDelete: false, confirmOnDelete: true });
    }
  }, [getCurrentUser, isOutsideOfficeHours]);
 
  const onRowEditStart = useCallback((args: RowEditEvent) => {
    const user = getCurrentUser();
    setEditOutput(prev => [...prev, `"onRowEditStart" event called.\n User Role: ${user.role}\n`]);
    const outsideOfficeHours = isOutsideOfficeHours();
    if (user.role === 'Employee' && outsideOfficeHours) {
      args.cancel = true;
      setEditOutput(prev => [...prev, `"onRowEditStart" event called.\n  Employees cannot edit outside office hours.\n`]);
    }
  }, [getCurrentUser, isOutsideOfficeHours, setEditOutput]);
 
  const onRowAddStart = useCallback((args: RowAddEvent) => {
    const user = getCurrentUser();
    setAddOutput(prev => [...prev, `"onRowAddStart" event called.\n  User Role: ${user.role}\n`]);
    if ((gridRef.current?.pagerModule?.totalRecordsCount ?? 0) >= 17) {
      args.cancel = true;
      setAddOutput(prev => [...prev, `"onRowAddStart" event called.\n Add action blocked since record count exceeds a quota.\n`]);
    }
    if (user.role === 'Employee') {
      args.cancel = true;
      setAddOutput(prev => [...prev, `"onRowAddStart" event called. \n Add action blocked since user is Employee\n`]);
    }
  }, [getCurrentUser, setAddOutput]);
 
  const onDataChangeStart = useCallback((args: DeleteEvent | SaveEvent) => {
    const user = getCurrentUser();
    setDeleteOutput(prev => [...prev, `"onDataChangeStart" event called.\n User Role: ${user.role}\n`]);
    if (user.role === 'Employee') {
      args.cancel = true;
      setDeleteOutput(prev => [...prev, `"onDataChangeStart" event called.\n Delete action blocked since user is Employee\n`]);
    }
  }, [getCurrentUser, setDeleteOutput]);
 
  const gridComponent = useMemo(() => (
    <MemoizedGrid
      ref={gridRef}
      dataSource={employeeInformation}
      editSettings={editSettings}
      toolbar={toolbarSettings}
      filterSettings={filterSettings}
      sortSettings={sortSettings}
      height={300}
      onRowSelect={handleEditTool}
      onRowEditStart={onRowEditStart}
      onRowAddStart={onRowAddStart}
      onDataChangeStart={onDataChangeStart}
    >
      <Columns>
        <Column
          field="EmployeeID"
          headerText="Employee ID"
          width="130"
          textAlign={TextAlign.Right}
          isPrimaryKey={true}
          validationRules={employeeIDRules}
        />
        <Column
          field="Name"
          headerText="Name"
          width="120"
          validationRules={employeeNameRules}
          clipMode={ClipMode.EllipsisWithTooltip}
        />
        <Column
          field="Designation"
          headerText="Designation"
          edit={{ type: EditType.DropDownList }}
          clipMode={ClipMode.EllipsisWithTooltip}
          width="160"
        />
        <Column
          field="DateOfJoining"
          headerText="Joining Date"
          edit={{ type: EditType.DatePicker }}
          textAlign={TextAlign.Right}
          type={ColumnType.Date}
          format="yMd"
          filter={{ filterBarType: FilterBarType.DatePicker }}
          width="190"
        />
        <Column
          field="ReportingManager"
          headerText="Manager"
          width="120"
        />
        <Column
          field="Location"
          headerText="Location"
          width="150"
          edit={{ type: EditType.DropDownList }}
        />
      </Columns>
    </MemoizedGrid>
  ), [onRowEditStart, onRowAddStart, onDataChangeStart, toolbarSettings, editSettings]);
 
  return gridComponent;
}