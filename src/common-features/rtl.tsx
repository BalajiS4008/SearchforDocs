import { Grid, Columns, Column, SortSettings, PageSettings, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { Provider } from '@syncfusion/react-base';
import { medicalHistory } from '../components/grid/healthCareDetails';
import { useState } from 'react';

export default function App() {
  const [sortSettings] = useState<SortSettings>({ enabled: true });
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 5, pageCount: 4 });

  return (
    <Provider dir={'rtl'}>
        <Grid dataSource={medicalHistory} sortSettings={sortSettings} pageSettings={pageSettings} >
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
    </Provider>
  );
}