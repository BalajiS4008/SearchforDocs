import { CalendarCell, CalendarCellProps, DatePicker } from '@syncfusion/react-calendars';
export default function App() {
    const onRenderDayCell = (props: CalendarCellProps) => {
        if (typeof props === 'string' || typeof props === 'boolean') {
            return null;
        }
        const { date, isWeekend } = props;
        let dayOfMonth: number = 0;

        if (date instanceof Date) {
            dayOfMonth = date.getDate();
        }
            
        if (isWeekend) {
            return (
                <CalendarCell {...props} isDisabled={true}>
                    <span className='sf-day sf-weekend'>
                        {dayOfMonth}
                    </span>
                </CalendarCell>
            );
        }
    
        return (
            <CalendarCell {...props}>
                <span className='sf-day'>{dayOfMonth}</span>
            </CalendarCell>
        );
    };
    return (
        <div className="component-section" style={{ width: '250px' }}>
            <DatePicker placeholder='Choose a date' cellTemplate={onRenderDayCell} />
        </div>
    );
};