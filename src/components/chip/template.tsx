import { Chip } from '@syncfusion/react-buttons';
import { useState, useEffect } from 'react';
import { ClockIcon } from "@syncfusion/react-icons"
import './App.css';

export default function App() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [currentTime]);

    const newYorkTime = currentTime.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const indiaTime = currentTime.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    return (
        <div className="component-section chip-section">
            <Chip className="time-chip">
                <ClockIcon className='clock-icon' />
                <span className="location">New York</span>
                <span className="time">{newYorkTime}</span>
            </Chip>
            <Chip className="time-chip">
                <ClockIcon className='clock-icon' />
                <span className="location">India</span>
                <span className="time">{indiaTime}</span>
            </Chip>
        </div>
    );
}