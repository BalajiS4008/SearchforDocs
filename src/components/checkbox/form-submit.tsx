import { Button, Checkbox, Color, CheckboxChangeEvent } from '@syncfusion/react-buttons';
import { useState, useEffect } from 'react';

export default function App() {
    const [selectedSports, setSelectedSports] = useState<string[]>(['Football']);
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | '' }>({ text: '', type: '' });

    const sportsOptions = ['Football', 'Basketball', 'Baseball', 'Tennis'];

    const handleCheckboxChange = (args: CheckboxChangeEvent, sport: string) => {
        const isChecked = args.value; 
        setSelectedSports((prev) =>
            isChecked ? [...prev, sport] : prev.filter((item) => item !== sport)
        );
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (selectedSports.length === 0) {
            setMessage({ text: 'Please Select a sport.', type: 'error' });
            return;
        }

        console.log('Form submitted with:', selectedSports);
        setMessage({ text: 'Form submitted!', type: 'success' });
    };

    useEffect(() => {
        if (message.text) {
            const timer = setTimeout(() => setMessage({ text: '', type: '' }), 1000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className="content-section" style={{ maxWidth: 500, margin: '0 auto' }}>
            <form
                onSubmit={handleFormSubmit}
                style={{ textAlign: 'left',  padding: 20, borderRadius: 8 }}
            >
                <p>Select Your Favorite Sports:</p>
                {sportsOptions.map((sport) => (
                    <div key={sport} style={{ marginBottom: 10 }}>
                        <Checkbox
                            id={sport}
                            label={sport}
                            checked={selectedSports.includes(sport)}
                            onChange={(args) => handleCheckboxChange(args, sport)}
                        />
                    </div>
                ))}
                <div style={{ height: '20px', margin: '10px 0' }}>
                    <span
                        style={{
                            color: message.type === 'error' ? 'red' : 'green',
                            visibility: message.text ? 'visible' : 'hidden',
                        }}
                    >
                        {message.text || 'placeholder'}
                    </span>
                </div>
                <Button type="submit" color={Color.Primary}>
                    Sign Up
                </Button>
            </form>
        </div>
    );
};
