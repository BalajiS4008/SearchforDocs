import { NumericChangeEvent, NumericTextBox } from "@syncfusion/react-inputs";
import { RadioButton } from '@syncfusion/react-buttons';
import { useState } from "react";
 
// Define range options
const rangeOptions = [
    { id: 'range1', label: '0 to 5', min: 0, max: 5 },
    { id: 'range2', label: '1 to 10', min: 1, max: 10 },
    { id: 'range3', label: '5 to 15', min: 5, max: 15 },
];
 
export default function App() {
    const [value, setValue] = useState(5);
    const [selectedRange, setSelectedRange] = useState(rangeOptions[0]);
   
   const handleChange = (args: NumericChangeEvent) => {
    if (args.value !== undefined && args.value !== null) {
        setValue(args.value);
    }
};
   
    const handleRangeChange = (range: typeof rangeOptions[0]) => {
        setSelectedRange(range);
        // Adjust current value if it's outside the new range
        if (value < range.min) {
            setValue(range.min);
        } else if (value > range.max) {
            setValue(range.max);
        }
    };
   
    return (
        <div className="component-section">
            <div className="numeric-range-options">
                <span className="numeric-range-label">Select range:</span>
                <div className="numeric-radio-group">
                    {rangeOptions.map((option) => (
                        <div className="numeric-radio-option" key={option.id}>
                            <RadioButton
                                label={option.label}
                                value={option.id}
                                checked={selectedRange.id === option.id}
                                onChange={() => handleRangeChange(option)}
                                labelPlacement="After"
                            />
                        </div>
                    ))}
                </div>
            </div>
           
            <div className="numeric-textbox-container" style={{ marginTop: '20px' }}>
                <NumericTextBox
                    width='15.625em'
                    value={value}
                    onChange={handleChange}
                    min={selectedRange.min}
                    max={selectedRange.max}
                    placeholder={`Enter value between ${selectedRange.min} to ${selectedRange.max}`}
                    labelMode="Always"
                />
            </div>
        </div>
    );
};