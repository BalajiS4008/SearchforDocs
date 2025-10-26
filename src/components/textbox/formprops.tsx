import { TextBox, Variant } from "@syncfusion/react-inputs";
import './App.css';

export default function App() {
    return (
        <div className="textbox-container">
            <div className="textbox-column">
                <div className="textbox-component">
                    <TextBox placeholder="ReadOnly" readOnly={true} defaultValue='Jamy' width="15.625em" variant={Variant.Outlined} labelMode="Auto" />
                </div>
            </div>
            <div className="textbox-column">
                <div className="textbox-component">
                    <TextBox placeholder="ReadOnly" readOnly={true} defaultValue='Rohith' width="15.625em" variant={Variant.Filled} labelMode="Auto" />
                </div>
            </div>
            <div className="textbox-column">
                <div className="textbox-component">
                    <TextBox placeholder="ReadOnly" readOnly={true} defaultValue='Tim' width="15.625em" labelMode="Auto" />
                </div>
            </div>
        </div>
    );
}