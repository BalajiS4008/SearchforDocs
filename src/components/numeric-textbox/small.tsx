import { NumericChangeEvent, NumericTextBox, Size } from "@syncfusion/react-inputs";
import { useState } from "react";
import './App.css';

export default function App() {
  const [value, setValue] = useState(10);
  const handleChange = (args: NumericChangeEvent) => {
    if (args.value) {
      setValue(args.value);
    }
  };
  const [valueNormal, setValueNormal] = useState(20);
  const Change = (args: NumericChangeEvent) => {
    if (args.value) {
      setValueNormal(args.value);
    }
  };
  return (
    <div className="component-section">
      <div className="numerictectbox-component">
        <NumericTextBox placeholder="Small" labelMode="Always" width='15.625em' value={value} onChange={handleChange} size={Size.Small} />
      </div>
      <div className="numerictectbox-component">
        <NumericTextBox placeholder="Normal" labelMode="Always" width='15.625em' value={valueNormal} onChange={Change} />
      </div>
    </div>
  );
};