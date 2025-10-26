import { Calendar, CalendarView, WeekDaysFormats } from '@syncfusion/react-calendars';
import './App.css';
import { RadioButton, RadioButtonChangeEvent } from '@syncfusion/react-buttons';
import { useState } from 'react';

export default function App() {

    const [weekDays, setWeekDay] = useState<WeekDaysFormats>(WeekDaysFormats.Short);

    const handleRadioChange = (args: RadioButtonChangeEvent) => {
        setWeekDay(args.value as WeekDaysFormats);
    }

    return (
           <>
            <div className='weekDays-radio'>
                <div>
                    <strong>Week Format:</strong>
                </div>
                <div className='radio-button'>
                    <RadioButton
                        label="Short"
                        value="Short"
                        checked={weekDays === WeekDaysFormats.Short}
                        onChange={(e) => handleRadioChange(e)}
                    />
                    <RadioButton
                        label="Narrow"
                        value="Narrow"
                        checked={weekDays === WeekDaysFormats.Narrow}
                        onChange={(e) => handleRadioChange(e)}
                    />
                    <RadioButton
                        label="Abbreviated"
                        value="Abbreviated"
                        checked={weekDays === WeekDaysFormats.Abbreviated}
                        onChange={(e) => handleRadioChange(e)}
                    />
                    <RadioButton
                        label="Wide"
                        value="Wide"
                        checked={weekDays === WeekDaysFormats.Wide}
                        onChange={(e) => handleRadioChange(e)}
                    />
                </div>
            </div>
            <div className="component-section">
                <Calendar
                    weekDaysFormat={weekDays}
                    start={CalendarView.Month}
                    depth={CalendarView.Month}
                />
            </div>
        </>
    );
}