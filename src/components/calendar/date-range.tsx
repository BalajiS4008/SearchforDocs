import { Calendar } from '@syncfusion/react-calendars';

export default function App() {
    return (
        <div className="component-section">
            <Calendar defaultValue={new Date(new Date().setDate(14))} minDate={new Date(new Date().getFullYear(), new Date().getMonth(), 7)} maxDate={new Date(new Date().getFullYear(), new Date().getMonth(), 27)} />
        </div>
    );
}