import { Grid, Columns, Column, FilterSettings, SortSettings, SelectionSettings, TextAlign, ColumnType, FilterBarType } from '@syncfusion/react-grid';
import { employeePerformanceData } from './employeePerformanceData';
import { useState } from 'react';

export default function App() {
  // Initialize state for filter, sort, and selection settings.   
  const [filterSettings] = useState<FilterSettings>({enabled: true});
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [selectionSettings] = useState<SelectionSettings>({ enabled: true, mode: 'Multiple' });
  // Render grid with employee data and configured settings.
  return (
    <div>
     <Grid dataSource={employeePerformanceData} filterSettings={filterSettings} sortSettings={sortSettings} height={300} selectionSettings = {selectionSettings} >
        <Columns>
            <Column field="EmployeeID" headerText="Employee ID" width="110" textAlign={TextAlign.Right} />
            <Column field="Name" headerText="Name" width="130" />
             <Column field="Role" headerText="Role" width="130" />
             <Column field="JoinDate" headerText="Join Date" textAlign={TextAlign.Right} format="yMd"  type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} width="150" />
             <Column field="Salary" headerText="Salary" format="C2" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} width="90" />
              <Column field="PerformanceRating" headerText="Rating" width="80" filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} />
        </Columns>
     </Grid>
   </div>
 );
}