import { Grid, Column, Columns, SortSettings, PageSettings, ClipMode, TextAlign, FilterSettings, EditSettings, FilterBarType, EditType, SaveEvent, DeleteEvent, ColumnType } from '@syncfusion/react-grid';
import { appointmentSchedule } from './appointmentDetails';
import { useState } from 'react';

export default function App() {
  // Initialize state for filter, sort, edit and toolbar settings.   
  const [filterSettings] = useState<FilterSettings>({enabled: true});
  const [sortSettings] = useState<SortSettings>({enabled: true});   
  const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
  const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
  // Initialize page settings with pagination enabled, page size, and count.
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });

  const primaryValueRules = { required: true, number: true };
  const customerNameRules = { required: true };

  type Appointment = typeof appointmentSchedule[0];
  
  const onDataChangeStart = (props: SaveEvent | DeleteEvent) => {
    (props.data as Appointment).AppointmentID = appointmentSchedule.length + 1;
  }

  return (
    <div>
      <Grid dataSource={appointmentSchedule} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings} onDataChangeStart={onDataChangeStart} >    
        <Columns>
          <Column field='AppointmentID' headerText='ID' isPrimaryKey={true} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} validationRules={primaryValueRules} visible={false} />
          <Column field="ServiceItem" headerText="Product" width="130px" />
          <Column field="CustomerName" headerText="Customer Name" validationRules={customerNameRules} width="150px" />
          <Column field="CreatedDate" headerText="Booking Date" type={ColumnType.Date} format= {{type:'date', format : 'dd.MM.yyyy'}} textAlign={TextAlign.Right} edit={{ type:EditType.DatePicker}} filter={{filterBarType:FilterBarType.DatePicker}} width="160px" />
          <Column field="AppointmentDate" headerText="Appointment Date" type={ColumnType.Date} format= {{type:'date', format: 'dd/MM/yyyy'}} textAlign={TextAlign.Right} edit={{ type:EditType.DatePicker}} filter={{filterBarType:FilterBarType.DatePicker}} width="160px" clipMode={ClipMode.EllipsisWithTooltip}/>
          <Column field="FollowUpDate" allowEdit={false} allowFilter={false} headerText="Follow-Up Date" format= 'dd/MM/yyyy hh:mm a' textAlign={TextAlign.Right} edit={{ type:EditType.DatePicker}}  width="165px" />
          <Column field="ServiceFee" headerText="Service Fee" format="C2" textAlign={TextAlign.Right} edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} width="140px" />
        </Columns>
      </Grid>
    </div>
  );
};