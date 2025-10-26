import { Calendar, ChangeEvent } from '@syncfusion/react-calendars';
import { useState } from 'react';

export default function App() {
    const [controlledValue, setControlledValue] = useState<Date>(new Date());
    const uncontrolledValue = new Date();
    return (
        <div className="component-section controlled-container">
            <div style={{ display: 'flex', gap: '40px' }}>
                <div>
                    <h4>Controlled Calendar</h4>    
                    <Calendar
                        value={controlledValue}
                        onChange={(e: ChangeEvent) => {
                            const value = (e as unknown as { value: Date }).value;
                            setControlledValue(value);
                        }}
                    />
                </div>
                <div>
                    <h4>Uncontrolled Calendar</h4>
                    <Calendar
                        defaultValue={uncontrolledValue}
                    />
                </div>
            </div>
        </div>
    );
}