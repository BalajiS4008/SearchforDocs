import { Calendar, CalendarView } from '@syncfusion/react-calendars';
import { RadioButton, RadioButtonChangeEvent  } from '@syncfusion/react-buttons';
import './App.css';
import { useState } from 'react';

export default function App() {
    const [start, setStart] = useState<CalendarView>(CalendarView.Month);

    const handleViewChange = (args: RadioButtonChangeEvent) => {
        setStart(args.value as CalendarView);
    };
    return (
        <div className="component-section views">
            <div className="calendar-control-section">
                    <div className="view-options">
                        <div className='content'>
                            <strong>Select Action View:</strong>
                        </div>
                        <div className='radio-button'>
                            <RadioButton
                                label="Month"
                                value="Month"
                                name="start-view"
                                checked={start === CalendarView.Month}
                                onChange={(e) => handleViewChange(e)}
                            />
                            <RadioButton
                                label="Year"
                                value="Year"
                                name="start-view"
                                checked={start === CalendarView.Year}
                                onChange={(e) => handleViewChange(e)}
                            />
                            <RadioButton
                                label="Decade"
                                value="Decade"
                                name="start-view"
                                checked={start === CalendarView.Decade}
                                onChange={(e) => handleViewChange(e)}
                            />
                        </div>
                    </div>

                    <Calendar start={start} />
                </div>
        </div>
    );
}