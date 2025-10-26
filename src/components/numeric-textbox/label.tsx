import { NumericTextBox } from "@syncfusion/react-inputs";
import './App.css';

export default function App() {
    return (
        <div className="component-section">
            <div className="numerictectbox-component">
                    <NumericTextBox
                        placeholder="Auto"
                        width={250}
                        labelMode="Auto" />
            </div>
                <div className="numerictectbox-component">
                    <NumericTextBox
                        placeholder="Always"
                        width={250}
                        labelMode="Always"/>
            </div>
                <div className="numerictectbox-component">
                    <NumericTextBox
                        placeholder="Never"
                        width={250}
                        labelMode="Never" />
                </div>
        </div>
    );
};