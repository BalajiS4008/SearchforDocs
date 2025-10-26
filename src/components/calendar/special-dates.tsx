import { Calendar, CalendarCellProps, CalendarCell } from '@syncfusion/react-calendars';

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
                <CalendarCell className='sf-special' {...props} title="Birthday">
                    <span className='sf-day sf-specialDay-4'>
                        {dayOfMonth}
                    </span>
                    <span className="sf-special-indicator">🥳</span>
                </CalendarCell>
            );
        } else if (dayOfMonth === 18) {
            return (
                <CalendarCell className='sf-special' {...props} title="Farewell">
                    <span className='sf-day'>{dayOfMonth}</span>
                    <span className="sf-special-indicator">🥳</span>
                </CalendarCell>
            );
        } else if (dayOfMonth === 25) {
            return (
                <CalendarCell className='sf-special' {...props} title="Vacation">
                    <span className='sf-day'>{dayOfMonth}</span>
                    <span className="sf-special-indicator">🥳</span>
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
        <div className="component-section">
            <Calendar
                id='specialDateCalendar'
                defaultValue={new Date()}
                cellTemplate={cellTemplate}
            />
        </div>
    );
}
