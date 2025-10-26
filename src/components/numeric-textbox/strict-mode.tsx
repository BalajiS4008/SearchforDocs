// src/components/numeric-textbox/strict-mode.tsx
import { useState } from 'react';
import { NumericChangeEvent, NumericTextBox } from "@syncfusion/react-inputs";
import { Checkbox } from "@syncfusion/react-buttons";

export default function App() {
  const [value, setValue] = useState<number | null>(33);
  const [strictMode, setStrictMode] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const min = 0;
  const max = 100;

  const handleChange = (args: NumericChangeEvent) => {
    setValue(args.value ?? null);
    
    // Only validate when strictMode is disabled
    if (!strictMode && args.value !== null && args.value != undefined) {
      if (args.value < min) {
        setError(`Value cannot be less than ${min}`);
      } else if (args.value > max) {
        setError(`Value cannot exceed ${max}`);
      } else {
        setError(''); // Clear error for valid inputs
      }
    } else {
      setError(''); // Clear error when strict mode is enabled or value is null
    }
  };

  const handleStrictModeChange = () => {
    setStrictMode(!strictMode);
    setError('');
  };

  return (
    <div className="component-section form-container">
      <div className="form-field">
        <div style={{ marginBottom: 16 }}>
          <Checkbox
            label="Strict mode (auto-correct to range)"
            checked={strictMode}
            onChange={handleStrictModeChange}
          />
        </div>

        <div className="input-wrapper">
          <NumericTextBox
            width="100%"
            format="###.##"
            value={value}
            placeholder="Enter value between 0 and 100"
            labelMode="Always"
            min={min}
            max={max}
            strictMode={strictMode}
            onChange={handleChange}
            className={error ? 'sf-error' : undefined}
          />
          
          {/* Custom error message - only show when strictMode is false and there's an error */}
          {error && <div className="sf-form-error">{error}</div>}
        </div>
      </div>

      <p style={{ marginTop: 15, fontWeight: 'bold' }}>
        Current Value: {value}
      </p>
    </div>
  );
}