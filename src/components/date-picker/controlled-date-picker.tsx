import { DatePicker } from '@syncfusion/react-calendars';
import { useState } from 'react';
export default function App() {
    const [controlledValue, setControlledValue] = useState<Date>(new Date());
    const uncontrolledValue = new Date();
    return (
        <div className="component-section" style={{display: 'flex', flexDirection: 'row', gap: '40px' }}>
            <div style={{ width: '290px' }}>
                <h4>Controlled DatePicker</h4>
                <DatePicker
                    value={controlledValue}
                    onChange={(e) => {
                        const value = (e as unknown as { value: Date }).value;
                        setControlledValue(value);
                    }}
                />
            </div>
            <div style={{ width: '250px' }}>
                <h4>Uncontrolled DatePicker</h4>
                <DatePicker
                    defaultValue={uncontrolledValue}
                />
            </div>
        </div>
    );
};