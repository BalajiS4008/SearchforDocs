import { NumericTextBox, NumericChangeEvent } from "@syncfusion/react-inputs";
import { useState } from "react";
import './App.css';

export default function App() {
    const [value, setValue] = useState<number | null>(20);

    const handleChange = (args: NumericChangeEvent) => {
        setValue(args.value ?? null);
    }

    return (
        <div className="numerictectbox-container">
            <div className="numerictectbox-column">
                <label>Controlled</label>
                <div className="numerictectbox-component">
                    <NumericTextBox
                        placeholder="Enter value"
                        width={250}
                        value={value}
                        onChange={handleChange}
                        clearButton={true}
                    />
                </div>
            </div>
            <div className="numerictectbox-column">
                <label>Uncontrolled</label>
                <div className="numerictectbox-component">
                    <NumericTextBox
                        placeholder="Enter value"
                        width={250}
                        defaultValue={20}
                        clearButton={true}
                    />
                </div>
            </div>
        </div>
    );
};