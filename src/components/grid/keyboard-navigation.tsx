import { Grid, Columns, Column, SortSettings, PageSettings, TextAlign } from '@syncfusion/react-grid';
import { medicalHistory } from './healthCareDetails';
import { useState } from 'react';

export default function App() {
  // Initialize state for sort and pagination settings.   
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });  
  // Render grid with healthcare data and configured settings.
  return (
    <div>
     <Grid dataSource={medicalHistory} allowKeyboard={false} sortSettings={sortSettings} pageSettings={pageSettings} >
      <Columns>
        <Column field="PatientID" headerText="Patient ID"  width="100" textAlign={TextAlign.Right} />
        <Column field="LastName" headerText="Patient Name" width="120" />
        <Column field="LastVisitDate" headerText="Last Visit" width="120" format="yMd" textAlign={TextAlign.Right} />
        <Column field="MedicalCondition" headerText="Diagnosis" width="110" />
        <Column field="VisitCount" headerText="Visit Count" width="120" textAlign={TextAlign.Right}/>
        <Column field="InsuranceProvider" headerText="Insurance Provider" width="160" />
        <Column field="Country" headerText="Country" width="90" /></Columns>
    </Grid>
   </div>
 );
}