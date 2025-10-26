import { RadioButton } from '@syncfusion/react-buttons';
import { DatePicker, CalendarView, ViewChangeEvent } from '@syncfusion/react-calendars';
import { useState } from 'react';
import './App.css';

const viewOptions = [
    { value: CalendarView.Month, label: 'Month' },
    { value: CalendarView.Year, label: 'Year' },
    { value: CalendarView.Decade, label: 'Decade' },
];

export default function App() {
    const [initialView, setInitialView] = useState(viewOptions[0].value);
    const [selectedValue, setSelectedValue] = useState('Month');

    const onNavigate = (args: ViewChangeEvent) => {
        setSelectedValue(args.view as string);
    };

    return (
        <div className="component-section datepicker-view-container">
            <div className="datepicker-view-options">
                <span className="datepicker-view-label">Initial view:</span>
                <div className="datepicker-radio-group">
                    {viewOptions.map((option) => (
                        <div className="datepicker-radio-option" key={option.value}>
                            <RadioButton
                                label={option.label}
                                value={option.value}
                                checked={initialView === option.value}
                                onChange={() => {
                                    setInitialView(option.value);
                                    setSelectedValue(option.label);
                                }}
                                labelPlacement="After"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="datepicker-current-view">
                <label id="date_label">Current View: {selectedValue}</label>
            </div>

            <DatePicker
                start={initialView}
                depth={CalendarView.Month}
                onViewChange={onNavigate}
            />
        </div>
    );
};