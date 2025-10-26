import { DatePicker } from '@syncfusion/react-calendars';
export default function App() {
    return (
        <div className="component-section" style={{ width: '290px' }}>
            <DatePicker disabled={true}  defaultValue={new Date()}/>
        </div>
    );
};