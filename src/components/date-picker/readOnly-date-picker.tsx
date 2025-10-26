import { DatePicker } from '@syncfusion/react-calendars';
export default function App() {
    return (
        <div className="component-section" style={{ width: '290px' }}>
            <DatePicker defaultValue={new Date()} readOnly={true} />
        </div>
    );
};