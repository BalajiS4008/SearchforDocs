import { Calendar, CalendarView } from '@syncfusion/react-calendars';
import './App.css';

export default function App() {
    return (
        <div className="component-section views">
            <div className="calendar-examples">
                <div className="calendar-example">
                    <h3>Decade View</h3>
                    <Calendar 
                        start={CalendarView.Decade} 
                        depth={CalendarView.Decade}
                        showTodayButton={false}
                    />
                </div>

                <div className="calendar-example">
                    <h3>Year View</h3>
                    <Calendar 
                        start={CalendarView.Year} 
                        depth={CalendarView.Year}
                        showTodayButton={false}
                    />
                </div>

                <div className="calendar-example">
                    <h3>Month View</h3>
                    <Calendar 
                        start={CalendarView.Month} 
                        depth={CalendarView.Month}
                    />
                </div>
            </div>
        </div>
    );
}