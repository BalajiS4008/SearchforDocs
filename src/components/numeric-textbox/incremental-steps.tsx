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
      <NumericTextBox
        width='15.625em'
        value={value}
        onChange={handleChange}
        step={3}
        placeholder="Enter Step"
        labelMode="Always"
      />
    </div>
  );
}
