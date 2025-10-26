import { TextBox, Variant } from "@syncfusion/react-inputs";
import './App.css';

export default function App() {
  return (
    <div className="textbox-container">
      <div className="textbox-column">
        <div className="textbox-component">
          <TextBox placeholder="Outlined TextBox" width="15.625em" variant={Variant.Outlined} labelMode="Auto" />
        </div>
      </div>
      <div className="textbox-column">
        <div className="textbox-component">
          <TextBox placeholder="Filled TextBox" width="15.625em" variant={Variant.Filled} labelMode="Auto" />
        </div>
      </div>
      <div className="textbox-column">
        <div className="textbox-component">
          <TextBox placeholder="Default TextBox" width="15.625em" labelMode="Auto" />
        </div>
      </div>
    </div>
  );
};