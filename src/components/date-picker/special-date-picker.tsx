import { DatePicker, CalendarCellProps, CalendarCell } from '@syncfusion/react-calendars';

export default function App() {

    const cellTemplate = (props: CalendarCellProps | string | boolean): React.ReactNode => {
        if (typeof props === 'string' || typeof props === 'boolean') {
            return null;
        }

        const { date, isWeekend } = props;

        if (!date || !(date instanceof Date)) {
            return <CalendarCell {...props} />;
        }

        const dayOfMonth = date.getDate();
        if (isWeekend) {
            return (
                <CalendarCell {...props}>
                    <span className='sf-day sf-weekend'>
                        {dayOfMonth}
                    </span>
                </CalendarCell>
            );
        }

        if (dayOfMonth === 4) {
            return (
                <CalendarCell {...props} title="Birthday">
                    <span className='sf-day sf-specialDay-4'>
                        {dayOfMonth}
                    </span>
                    <span className="highlight-day" />
                </CalendarCell>
            );
        } else if (dayOfMonth === 15) {
            return (
                <CalendarCell {...props} title="Farewell">
                    <span className='sf-day'>{dayOfMonth}</span>
                    <span className="highlight-day" />
                </CalendarCell>
            );
        } else if (dayOfMonth === 25) {
            return (
                <CalendarCell {...props} title="Vacation">
                    <span className='sf-day'>{dayOfMonth}</span>
                    <span className="highlight-day" />
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
            <DatePicker
                id='specialdate'
                placeholder='Choose a date'
                defaultValue={new Date()}
                cellTemplate={cellTemplate}
            />
        </div>
    );
}
