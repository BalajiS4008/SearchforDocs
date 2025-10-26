// src/components/numeric-textbox/validate-on-type.tsx
import { NumericChangeEvent, NumericTextBox } from "@syncfusion/react-inputs";
import { useState } from "react";
import './App.css';
import { Checkbox } from "@syncfusion/react-buttons";

export default function App() {
  const [value, setValue] = useState<number | null>(12.321);
  const [validate, setvalidate] = useState<boolean>(false);

  const handleChange = (args: NumericChangeEvent) => {
    setValue(args.value ?? null);
  };

  return (
    <div className="component-section">
      <div style={{ marginBottom: 10 }}>
        <Checkbox
          label="Validate on type (resists the decimal values)"
          checked={validate}
          onChange={() => (setvalidate(!validate))}
        />
      </div>

      <NumericTextBox
        width='15.625em'
        value={value}
        placeholder="Enter a decimal value"
        labelMode="Always"
        decimals={3}
        validateOnType={validate}
        onChange={handleChange}
      />
    </div>
  );
}