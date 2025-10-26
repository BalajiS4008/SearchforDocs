import { DatePicker, CalendarView } from '@syncfusion/react-calendars';
export default function App() {
    return (
        <div className="component-section" style={{ width: '290px' }}>
            <DatePicker defaultValue={new Date()} start={CalendarView.Year} depth={CalendarView.Year} />
        </div>
    );
};