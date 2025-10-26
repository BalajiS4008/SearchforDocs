import { Calendar } from '@syncfusion/react-calendars';

export default function App() {
    return (
        <div className="component-section">
            <Calendar defaultValue={new Date()}/>
        </div>
    );
}