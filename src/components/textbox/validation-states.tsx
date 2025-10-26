import { Color, TextBox, TextBoxChangeEvent, Variant } from "@syncfusion/react-inputs";
import { useState } from "react";
import './App.css';

export default function App() {
  const [warning, setWarning] = useState('Check this input');
  const changeWarning = (args?: TextBoxChangeEvent) => {
    if (args && args.value !== undefined) {
      setWarning(args.value);
    }
  };

  const [error, setError] = useState('Invalid input');
  const changeError = (args?: TextBoxChangeEvent) => {
    if (args && args.value !== undefined) {
      setError(args.value);
    }
  };

  const [success, setSuccess] = useState('Valid input');
  const changeSuccess = (args?: TextBoxChangeEvent) => {
    if (args && args.value !== undefined) {
      setSuccess(args.value);
    }
  };

  return (
    <div className="textbox-container">
      <div className="textbox-column">
        <div className="textbox-component">
          <TextBox
            placeholder="Warning"
            value={warning}
            variant={Variant.Outlined}
            color={Color.Warning}
            onChange={changeWarning}
            width="15.625em"
            labelMode="Auto"
          />
        </div>
      </div>

      <div className="textbox-column">
        <div className="textbox-component">
          <TextBox
            placeholder="Error"
            value={error}
            variant={Variant.Filled}
            color={Color.Error}
            onChange={changeError}
            width="15.625em"
            labelMode="Auto"
          />
        </div>
      </div>

      <div className="textbox-column">
        <div className="textbox-component">
          <TextBox
            placeholder="Success"
            value={success}
            width="15.625em"
            color={Color.Success}
            onChange={changeSuccess}
            labelMode="Auto"
          />
        </div>
      </div>
    </div>
  );
};