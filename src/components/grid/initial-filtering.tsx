import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings, TextAlign, FilterBarType, ColumnType, ClipMode } from '@syncfusion/react-grid';
import { bookingRecords } from './hotelBookingDetails';
import { useState } from 'react';

export default function App() {
   // State to enable sorting in the grid.
    const [sortSettings] = useState<SortSettings>({ enabled: true }); 

    // State to enable paging with page size and count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 }); 

    // State to enable filtering with predefined filter conditions.
    const [filterSettings] = useState<FilterSettings>({
        enabled: true,
        columns: [
            { field: 'GuestName', operator: 'equal', value: 'Anika Bose' },
            { field: 'RoomType', operator: 'equal', value: 'Suite' }
        ]
    });

	return (
		<div>
			<Grid dataSource={bookingRecords} pageSettings={pageSettings} filterSettings={filterSettings} sortSettings={sortSettings} clipMode={ClipMode.EllipsisWithTooltip} >
				<Columns>
					<Column field="BookingID" headerText="Booking ID" />
					<Column field="GuestName" headerText="Name" width={155} />
					<Column field="CheckInDate" headerText="Check In" format="yMd" type={ColumnType.Date} textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.DatePicker}} width={180}/>
					<Column field="CheckOutDate" headerText="Check Out" format="yMd" type={ColumnType.Date} textAlign={TextAlign.Right} filter={{filterBarType: FilterBarType.DatePicker}} width={180}/>
					<Column field="RoomType" headerText="Room Type" />
					<Column field="PaymentStatus" headerText="Payment Status" />
				</Columns>
			</Grid>
		</div>
	);
};
