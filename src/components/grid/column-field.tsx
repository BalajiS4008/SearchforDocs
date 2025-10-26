import { Grid, Columns, Column, SortSettings, PageSettings, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { medicalHistory } from './healthCareDetails';
import { useState } from 'react';

export default function App() {
  // Initialize sort settings with enabled state.
    const [sortSettings] = useState<SortSettings>({enabled: true});
    
  // Initialize page settings with pagination enabled, page size, and count.
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });

  return (
    <div>
      <Grid dataSource={medicalHistory}  sortSettings={sortSettings} pageSettings={pageSettings} >
        <Columns>
          <Column field="PatientID" headerText="Patient ID" width="100" textAlign={TextAlign.Right} />
          <Column field="LastName" headerText="Patient Name" width="100" />
          <Column field="MedicalCondition" headerText="Diagnosis" width="90" />
          <Column field="InsuranceProvider" headerText="Insurance Provider" width="125" />
          <Column field="LastVisitDate" headerText="Last Visit" width="80" format="yMd" type={ColumnType.Date} textAlign={TextAlign.Right} />
          <Column field="VisitCount" headerText="Visit Count" textAlign={TextAlign.Right} width="90" />
          <Column field="City" headerText="City" width="90" />
        </Columns>
      </Grid>
    </div>
  );
}