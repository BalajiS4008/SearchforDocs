import * as React from 'react';
import { TextArea, TextAreaChangeEvent } from '@syncfusion/react-inputs';

export default function App() {
    const [value, setValue] = React.useState('');
    const max = 20;
    const handleChange = (args?: TextAreaChangeEvent) => {
        if (args && args.value !== undefined) {
            setValue(args.value);
        }
    };

    return (
        <div className="component-section">
            <TextArea
                maxLength={max}
                value={value}
                onChange={handleChange}
                width={300}
                placeholder='Maximum length of 20 characters'
            />
        </div>
    );
}