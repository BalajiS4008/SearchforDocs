import { Calendar, CalendarView } from '@syncfusion/react-calendars';

export default function App() {
    return (
        <div className="component-section">
            <Calendar defaultValue={new Date()} showTodayButton={false} start={CalendarView.Year} depth={CalendarView.Year} />
        </div>
    );
}