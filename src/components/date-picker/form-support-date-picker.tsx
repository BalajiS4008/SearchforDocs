import { DatePicker } from '@syncfusion/react-calendars';
import { Button } from '@syncfusion/react-buttons';
import { useState, useCallback } from 'react';
import './App.css';
export default function App() {
    // State for appointment booking form
    const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);
    const [isValidDate, setIsValidDate] = useState<boolean | undefined>(undefined);
    const [dateErrorMessage, setDateErrorMessage] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

    // Business hours: Monday-Friday, 9 AM to 5 PM
    const validateAppointmentDate = useCallback((value: Date | null) => {
        if (!value) {
            return { valid: false, message: 'Please select an appointment date' };
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Check if date is in the past
        if (value < today) {
            return { valid: false, message: 'Cannot book appointments in the past' };
        }

        // Check if date is more than 30 days in the future
        const maxDate = new Date();
        maxDate.setDate(today.getDate() + 30);
        if (value > maxDate) {
            return { valid: false, message: 'Appointments must be within the next 30 days' };
        }

        // Check if weekend (0 = Sunday, 6 = Saturday)
        const dayOfWeek = value.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            return { valid: false, message: 'Appointments are only available on weekdays' };
        }

        return { valid: true, message: '' };
    }, []);

    // eslint-disable-next-line
    const handleAppointmentDateChange = useCallback((args: any) => {
        setAppointmentDate(args.value);
        const result = validateAppointmentDate(args.value);
        setIsValidDate(result.valid);
        setDateErrorMessage(result.message);
    }, [validateAppointmentDate]);

    // Handle form submission
    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);

        if (isValidDate) {
            // Simulate API call to book appointment
            setTimeout(() => {
                setBookingSuccess(true);
            }, 1000);
        }
    }, [isValidDate]);

    return (
        <div className="component-section" style={{ width: '290px' }}>
            <div className="appointment-booking-form">
                <h3>Schedule Medical Appointment</h3>

                {bookingSuccess ? (
                    <div className="success-message">
                        <h4>Appointment Confirmed!</h4>
                        <p>Your appointment has been scheduled for {appointmentDate?.toLocaleDateString()} at our medical center.</p>
                        <p>You will receive a confirmation email shortly.</p>
                        <Button onClick={() => {
                            setAppointmentDate(null);
                            setBookingSuccess(false);
                            setSubmitted(false);
                        }}>Schedule Another Appointment</Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="appointment-date">Select Appointment Date:</label>
                            <DatePicker
                                id="appointment-date"
                                placeholder="Choose a date for your appointment"
                                value={appointmentDate as Date}
                                onChange={handleAppointmentDateChange}
                                minDate={new Date()}
                                maxDate={new Date(new Date().setDate(new Date().getDate() + 30))}
                                format="MMMM d, yyyy (EEEE)"
                                validityStyles={true}
                                valid={isValidDate}
                            />
                            {(!isValidDate && (submitted || appointmentDate)) && (
                                <div className="validation-message">{dateErrorMessage}</div>
                            )}
                        </div>

                        <div className="appointment-info">
                            <p>
                                <strong>Appointment Guidelines:</strong>
                            </p>
                            <ul>
                                <li>Appointments available Monday through Friday only</li>
                                <li>Must be scheduled at least 1 day in advance</li>
                                <li>Can be booked up to 30 days in advance</li>
                            </ul>
                        </div>

                        <Button type="submit" className="book-appointment-btn">
                            Book Appointment
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
};