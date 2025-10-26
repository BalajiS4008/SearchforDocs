import { NumericTextBox } from "@syncfusion/react-inputs";

export default function App() {
    return (
        <div className="component-section">
            <NumericTextBox placeholder="Disabled" labelMode="Always" defaultValue={11} disabled={true} width='15.625em' />
        </div>
    );
};