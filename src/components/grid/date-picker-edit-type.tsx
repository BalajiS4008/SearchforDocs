import { Grid, Column, Columns, SortSettings, PageSettings, ClipMode, TextAlign, FilterSettings, EditSettings, FilterBarType, EditType, ColumnType } from '@syncfusion/react-grid';
import { appointmentSchedule } from './appointmentData';
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
    // Custom date format including day, month, and year.
    const dateFormatOptions = {
      type: ColumnType.Date,
      format: "EEE, MMM d, yyyy",
    };
    const bookingDateParams = {
      type: EditType.DatePicker,
      params: {
        placeholder: 'Select booking date',
        format: 'dd/MM/yyyy',
      },
    };
    const appointmentDateParams = {
      type: EditType.DatePicker,
      params: {          
        placeholder: 'Select appointment date',
        minDate: new Date(2025, 2, 1),
        format: 'dd/MM/yyyy',
      },
    };
  return (
    <div>
      <Grid dataSource={appointmentSchedule} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings} >    
        <Columns>
          <Column field='AppointmentID' headerText='ID' isPrimaryKey={true} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} validationRules={primaryValueRules} width="100px"/>
          <Column field="ServiceItem" headerText="Product" width="130px" />
          <Column field="CustomerName" headerText="Customer Name" validationRules={customerNameRules} width="150px" />
          <Column field="CreatedDate" headerText="Booking Date" type={ColumnType.Date} format={dateFormatOptions} textAlign={TextAlign.Right} edit={bookingDateParams} filter={{filterBarType:FilterBarType.DatePicker}} width="160px" clipMode={ClipMode.EllipsisWithTooltip}/>
          <Column field="AppointmentDate" headerText="Appointment Date" type={ColumnType.Date} format={dateFormatOptions} textAlign={TextAlign.Right} edit={appointmentDateParams} filter={{filterBarType:FilterBarType.DatePicker}} width="160px" clipMode={ClipMode.EllipsisWithTooltip}/>
          <Column field="ServiceFee" headerText="Service Fee" format="C2" textAlign={TextAlign.Right} edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} width="140px" />
        </Columns>
      </Grid>
    </div>
  );
};