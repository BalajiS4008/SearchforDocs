import { Calendar } from '@syncfusion/react-calendars';

export default function App() {
    const values = [new Date('1/1/2025'), new Date('1/15/2025'), new Date('1/3/2025'), new Date('1/25/2025')];
    return (
        <div className="component-section">
            <Calendar multiSelect={true} defaultValue={values}/>
        </div>
    );
}