import { TextBox, TextBoxChangeEvent } from "@syncfusion/react-inputs";
import { useState } from "react";
import './App.css';

export default function App() {
    const [value, setValue] = useState('John');
    const handleChange = (args?: TextBoxChangeEvent) => {
        if (args && args.value !== undefined) {
            setValue(args.value);
        }
    };

    return (
        <div className="textbox-container">
            <div className="textbox-column">
                <div className="textbox-component">
                    <TextBox
                        placeholder="Controlled"
                        value={value}
                        width="15.625em"
                        labelMode="Auto"
                        onChange={handleChange} />
                </div>
            </div>
            <div className="textbox-column">
                <div className="textbox-component">
                    <TextBox
                        placeholder="Uncontrolled"
                        width="15.625em"
                        labelMode="Auto"
                        defaultValue='James' >
                    </TextBox>
                </div>
            </div>
        </div>
    );
};