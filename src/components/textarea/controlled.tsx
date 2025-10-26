import { ResizeMode, TextArea, TextAreaChangeEvent } from '@syncfusion/react-inputs';
import * as React from 'react';

export default function App() {
    const [value, setValue] = React.useState<string>('Controlled');
    const handleChange = (args?: TextAreaChangeEvent) => {
        if (args && args.value !== undefined) {
            setValue(args.value);
        }
    };

    return (
        <div className='component-content' style={{ display: 'flex', gap: '20px', margin: '0px auto' }}>
            <div>
                <TextArea
                    value={value}
                    onChange={handleChange}
                    rows={2}
                    resizeMode={ResizeMode.None}
                    width={200}
                />
            </div>
            <div>
                <TextArea
                    rows={2}
                    width={200}
                    resizeMode={ResizeMode.None}
                    defaultValue='Uncontrolled'
                ></TextArea>
            </div>
        </div>
    );
}