import { NumericChangeEvent, NumericTextBox } from "@syncfusion/react-inputs";
import { useState } from "react";

export default function App() {
  const [miles, setMiles] = useState<number | null>(100);
  const handleMilesChange = (args: NumericChangeEvent) => {
    if (args) {
     setMiles(args.value ?? null);
    }
  };

 const convertMilesToKilometers = (miles: number): number => {
  return miles * 1.60934;
};

  return (
    <div className="component-section">
      <NumericTextBox
        width='15.625em'
        format="###.## miles"
        value={miles}
        placeholder="Enter miles"
        labelMode="Always"
        onChange={handleMilesChange}
      />
      <p style={{ marginTop: 15, fontWeight: 'bold' }}>
        Kilometers: {miles !== null ? convertMilesToKilometers(miles).toFixed(2) : ''}
      </p>
    </div>
  );
}