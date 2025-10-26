import { useState, useRef } from 'react';
import { RadioButton } from '@syncfusion/react-buttons';
import './customControlPanel.css';
import { ClipMode, Column, Columns, ColumnType, Grid, SortSettings, GridRef, TextAlign, FilterSettings, FilterBarType } from '@syncfusion/react-grid';
import { employeeInformation } from './employeeInformation';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';


export default function App() {
  const gridRef = useRef<GridRef>(null);
  // Initialize user role state.
  const [userRole, setUserRole] = useState<'Admin' | 'Employee'>('Admin');
  const [sortSettings, setSortSettings] = useState<SortSettings>({ enabled: true });
  const [filterSettings] = useState<FilterSettings>({ enabled: true });

  return (
    <>
      <PropertyPane>
        <PropertyColumn>
          <PropertyRow>
            <div className="property-panel-section">
              <span className="property-panel-label">Role:</span>
              <RadioButton
                label="Admin"
                name="role"
                value="Admin"
                checked={userRole === 'Admin'}
                onChange={() => {
                  setUserRole('Admin');
                  setSortSettings({ enabled: true });
                }}
              />
              <RadioButton
                label="Employee"
                name="role"
                value="Employee"
                checked={userRole === 'Employee'}
                onChange={() => {
                  setUserRole('Employee');
                  setSortSettings({ enabled: false });
                }}
              />
            </div>
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <Grid
        ref={gridRef}
        dataSource={employeeInformation}
        sortSettings={sortSettings}
        filterSettings={filterSettings}
        height={300}
      >
        <Columns>
          <Column
            field="EmployeeID"
            headerText="Employee ID"
            width="130"
            textAlign={TextAlign.Right}
          />
          <Column
            field="Name"
            headerText="Name"
            width="120"
            clipMode={ClipMode.EllipsisWithTooltip}
          />
          <Column
            field="Designation"
            headerText="Designation"
            clipMode={ClipMode.EllipsisWithTooltip}
            width="160"
          />
          <Column
            field="DateOfJoining"
            headerText="Joining Date"
            textAlign={TextAlign.Right}
            type={ColumnType.Date}
            filter={{filterBarType: FilterBarType.DatePicker}}
            format="yMd"
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
          />
        </Columns>
      </Grid>
    </>
  );
}