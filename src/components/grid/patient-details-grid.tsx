import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, FilterBarType, TextAlign, ColumnType } from '@syncfusion/react-grid';
import './healthCareDetails.css'
import { medicalHistory } from './healthCareDetails';
import { useState } from 'react';

export default function App() {
  // Initialize filter settings with enabled state.
  const [filterSettings] = useState<FilterSettings>({enabled: true});
  
  // Initialize sort settings with enabled state.
  const [sortSettings] = useState<SortSettings>({enabled: true});
      
  // Initialize page settings with pagination enabled, page size, and count.
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  
  return (
    <div>
      <Grid dataSource={medicalHistory} className='patient-details' filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings} >
         <Columns>
          <Column field="FirstName" headerText="Patient Name" width="130" />
          <Column field="MedicalCondition" headerText="Medical Condition" width="160" />
          <Column field="InsuranceProvider" headerText="Insurance Provider" width="160" />
          <Column field="LastVisitDate" headerText="Last Visit"  type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} width="180" format="yMd" textAlign={TextAlign.Right} />
          <Column field="VisitCount" headerText="Visit Count" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} width="120" />
          <Column field="City" headerText="City" width="110" />
        </Columns>
      </Grid>
    </div>
  );
};