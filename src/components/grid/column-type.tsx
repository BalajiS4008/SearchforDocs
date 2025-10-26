import { Grid, Columns, Column, SortSettings, PageSettings, ClipMode, ColumnType, TextAlign, FilterSettings, EditSettings, EditType, FilterBarType, SaveEvent, DeleteEvent } from '@syncfusion/react-grid';
import { appointmentSchedule } from './appointmentDetails';
import { useState } from 'react';

export default function App() {
    // State to manage sort, filter, edit and toolbar settings. 
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [filterSettings] = useState<FilterSettings>({enabled: true});  
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
                <Column field="AppointmentID" headerText="ID" type={ColumnType.Number} isPrimaryKey={true} validationRules={primaryValueRules} filter={{filterBarType:FilterBarType.NumericTextBox}} visible={false} />
                <Column field="ServiceItem" headerText="Product" width="130px"/>
                <Column field="CustomerName" headerText="Customer Name" type={ColumnType.String} validationRules={customerNameRules} clipMode={ClipMode.EllipsisWithTooltip} width="160px" />
                <Column field="AppointmentDate" headerText="Appointment Date" type={ColumnType.Date} edit={{ type:EditType.DatePicker}} filter={{filterBarType:FilterBarType.DatePicker}} format="yMd" textAlign={TextAlign.Right} width="180px" clipMode={ClipMode.EllipsisWithTooltip}/>
                <Column field="FollowUpDate" headerText="Follow-Up Date" type={ColumnType.Date} edit={{ type:EditType.DatePicker}} allowEdit={false} allowFilter={false} format="dd/MM/yyyy hh:mm a" textAlign={TextAlign.Right} width="180px" />
                <Column field="ServiceType" headerText="Service Type" type={ColumnType.String} width="130px" />
                <Column field="ServiceFee" headerText="Service Fee" type={ColumnType.Number} edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} format="C2" textAlign={TextAlign.Right} width="120px" clipMode={ClipMode.EllipsisWithTooltip}/>
                </Columns>
            </Grid>
        </div>
    );
};
