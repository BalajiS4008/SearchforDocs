import { NumericChangeEvent, NumericTextBox } from "@syncfusion/react-inputs";
import { useState } from "react";

export default function App() {
    const [value, setValue] = useState(5);
    const handleChange = (args: NumericChangeEvent) => {
        if (args.value) {
            setValue(args.value);
        }
    };
    return (
        <div className="component-section">
            <NumericTextBox width='15.625em' value={value} onChange={handleChange} placeholder="Spin button disabled" labelMode="Always" spinButton={false} step={2} />
        </div>
    );

}