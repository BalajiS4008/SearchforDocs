import { NumericChangeEvent, NumericTextBox } from "@syncfusion/react-inputs";
import { useState } from "react";
import './App.css';

export default function App() {

    const [value, setValue] = useState(5);
    const handleChange = (args: NumericChangeEvent) => {
        if (args.value) {
            setValue(args.value);
        }
    };
    const [percentage, setPercentage] = useState(0.7);
    const handlePercentage = (args: NumericChangeEvent) => {
        if (args.value) {
            setPercentage(args.value);
        }
    };
    const [Currency, setCurrency] = useState(100);
    const handleCurrency = (args: NumericChangeEvent) => {
        if (args.value) {
            setCurrency(args.value);
        }
    };
    const [custom, setCustom] = useState(53);
    const handleCustom = (args: NumericChangeEvent) => {
        if (args.value) {
            setCustom(args.value);
        }
    };

    return (
        <div className="numerictectbox-container">
            <div className="numerictectbox-column">
                <div className="numerictectbox-component">
                    <NumericTextBox
                        width='15.625em'
                        format="n2"
                        value={value}
                        onChange={handleChange}
                        placeholder="Decimal"
                        labelMode="Auto"
                    />
                </div>
                <div className="numerictectbox-component">
                    <NumericTextBox
                        width='15.625em'
                        format="p2"
                        min={0}
                        max={1}
                        step={0.01}
                        value={percentage}
                        onChange={handlePercentage}
                        placeholder="Percentage"
                        labelMode="Auto"
                    />
                </div>
            </div>
            <div className="numerictectbox-column">
                <div className="numerictectbox-component">
                    <NumericTextBox
                        width='15.625em'
                        value={Currency}
                        onChange={handleCurrency}
                        format="c2"
                        min={0}
                        placeholder="Currency"
                        labelMode="Auto"
                    />
                </div>
                <div className="numerictectbox-component">
                    <NumericTextBox
                        width='15.625em'
                        value={custom}
                        onChange={handleCustom}
                        min={0}
                        format='###.## euros'
                        placeholder="Currency with format options"
                        labelMode="Auto"
                    />
                </div>
            </div>
        </div>

    );
}