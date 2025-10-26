import {  NumericTextBox } from "@syncfusion/react-inputs";
import './App.css';

export default function App() {
    return (
        <div className="component-section">
            <NumericTextBox
                placeholder="Enter value"
                width='15.625em'
                defaultValue={20}
            />
        </div>
    );
};