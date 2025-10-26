import { RadioButton } from '@syncfusion/react-buttons';
import { DatePicker } from '@syncfusion/react-calendars';
import { useState } from 'react';
import './App.css';

const formats = [
    { value: 'dd-MMM-yy', label: 'dd-MMM-yy' },
    { value: 'yyyy-MM-dd', label: 'yyyy-MM-dd' },
    { value: 'dd-MMMM', label: 'dd-MMMM' },
];

export default function App() {
    const [format, setFormat] = useState(formats[0].value);

    return (
        <div className="component-section datepicker-view-container">
            <div className="datepicker-view-options">
                <span className="datepicker-view-label">Date format:</span>
                <div className="datepicker-radio-group">
                    {formats.map((f) => (
                        <div className="datepicker-radio-option" key={f.value}>
                            <RadioButton
                                label={f.label}
                                value={f.value}
                                checked={format === f.value}
                                onChange={() => setFormat(f.value)}
                                labelPlacement="After"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <DatePicker format={format} defaultValue={new Date()} /> 
        </div>
    );
};