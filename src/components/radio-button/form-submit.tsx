import React, { useState, useEffect } from 'react';
import { Button, RadioButton, RadioButtonChangeEvent } from '@syncfusion/react-buttons';

export default function App() {
    const [selectedTheme, setSelectedTheme] = useState<string | null>('material');
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | '' }>({ text: '', type: '' });

    const themeOptions = [
        { value: 'material', label: 'Material' },
        { value: 'bootstrap', label: 'Bootstrap' },
        { value: 'fluent', label: 'Fluent' },
        { value: 'tailwind', label: 'Tailwind' }
    ];

    const handleRadioChange = (args: RadioButtonChangeEvent) => {
        setSelectedTheme(args.value);
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!selectedTheme) {
            setMessage({ text: 'Please select a theme.', type: 'error' });
            return;
        }
        setMessage({ text: 'Form submitted!', type: 'success' });
    };

    useEffect(() => {
        if (message.text) {
            const timer = setTimeout(() => setMessage({ text: '', type: '' }), 1000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className="component-section flex-column gap-20">
            <form onSubmit={handleFormSubmit}>
                <p>Select Your Preferred Theme:</p>
                {themeOptions.map((option) => (
                    <div key={option.value} style={{ marginBottom: 10 }}>
                        <RadioButton
                            name="theme"
                            value={option.value}
                            label={option.label}
                            checked={selectedTheme === option.value}
                            onChange={handleRadioChange}
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
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};