import { Grid, Columns, Column, SortSettings, PageSettings, GridLine, TextAlign } from '@syncfusion/react-grid';
import { employeeDetails } from './employeeProfileData';
import { useState } from 'react';
 
export default function App() {
  // Enable sorting functionality for the grid.
  const [sortSettings] = useState<SortSettings>({ enabled: true });

  // Enable pagination with specified page size and count.
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });

  // Set grid lines to show both horizontal and vertical lines.
  const [gridLines] = useState<string | string>(GridLine.Both);

  return (
    <div>
      <Grid dataSource={employeeDetails} sortSettings={sortSettings} pageSettings={pageSettings} gridLines={gridLines}>
        <Columns>
          <Column field="EmployeeID" headerText="Employee ID" headerTextAlign={TextAlign.Right} textAlign={TextAlign.Right}/>
          <Column field="FirstName" headerText="First Name" headerTextAlign={TextAlign.Center} textAlign={TextAlign.Center} />
          <Column field="LastName" headerText="Last Name" headerTextAlign={TextAlign.Center} textAlign={TextAlign.Center} />
          <Column field="Role" headerText="Role" headerTextAlign={TextAlign.Justify} textAlign={TextAlign.Justify}/>
          <Column field="Location" headerText="Location" headerTextAlign={TextAlign.Left} textAlign={TextAlign.Left}/>
        </Columns>
      </Grid>
    </div>
  );
}