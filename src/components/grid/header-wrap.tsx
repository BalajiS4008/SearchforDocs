import { Grid, Columns, Column, PageSettings, TextWrapSettings, WrapMode, FilterBarType, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { appointmentSchedule } from './appointmentDetails';
import { useState } from 'react';

export default function App() {

    // Enable pagination with specified page size and count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });

    // Enable text wrapping for grid headers.
    const [textWrapSettings] = useState<TextWrapSettings>({ enabled: true, wrapMode: WrapMode.Header });

    return (
        <div>
            <Grid dataSource={appointmentSchedule} pageSettings={pageSettings} textWrapSettings={textWrapSettings} >      
                <Columns>
                    <Column field="ServiceItem" headerText="Service Item Identification" width="130px" />
                    <Column field="CustomerName" headerText="Full Customer Name" width="120px" />
                    <Column field="AppointmentDate" headerText="Scheduled Appointment Date" type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} format="yMd" textAlign={TextAlign.Right} width="130px" />
                    <Column field="FollowUpDate" headerText="Follow-Up Appointment Date" type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} format="yMd" textAlign={TextAlign.Right} width="160px" />
                    <Column field="ServiceType" headerText="Type of Service Provided" width="130px" />
                    <Column field="ServiceFee" headerText="Total Service Fee Charged" filter={{filterBarType:FilterBarType.NumericTextBox}} format="C2" textAlign={TextAlign.Right} width="120px" />
                </Columns>
            </Grid>
        </div>
    );
};
