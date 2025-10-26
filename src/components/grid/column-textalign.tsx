import { Grid, Columns, Column, SortSettings, PageSettings, GridLine, TextAlign } from '@syncfusion/react-grid';
import { employeeDetails } from './employeeProfileData';
import { useState } from 'react';
 
export default function App() {
  // Initialize sort settings with enabled state.
  const [sortSettings] = useState<SortSettings>({enabled: true});
  
  // Initialize page settings with pagination enabled, page size, and count.
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });

  return (
   <div>
     <Grid dataSource={employeeDetails} sortSettings={sortSettings} pageSettings={pageSettings} gridLines={GridLine.Both}>
      <Columns>
         <Column field="EmployeeID" headerText="Employee ID" textAlign={TextAlign.Right} />
         <Column field="FirstName" headerText="Name" textAlign={TextAlign.Center} />
         <Column field="Role" headerText="Role" textAlign={TextAlign.Justify} />
         <Column field="Location" headerText="Location" textAlign={TextAlign.Left} />
      </Columns>
     </Grid>
   </div>
 );
}
