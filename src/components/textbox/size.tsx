import { TextBox, Variant, Size } from "@syncfusion/react-inputs";
import './App.css';

export default function App() {
    return (
        <div className="textbox-container">
            <div className="textbox-column">
                <div className="textbox-component">
                    <TextBox placeholder="Size" defaultValue='Small' width="15.625em" variant={Variant.Outlined} size={Size.Small} labelMode="Auto" />
                </div>
                <div className="textbox-component">
                    <TextBox placeholder="Size" defaultValue='Small' width="15.625em" variant={Variant.Filled} size={Size.Small} labelMode="Auto" />
                </div>
                <div className="textbox-component">
                    <TextBox placeholder="Size" defaultValue='Small' width="15.625em" size={Size.Small} labelMode="Auto" />
                </div>
            </div>

            <div className="textbox-column">
                <div className="textbox-component">
                    <TextBox placeholder="Size" defaultValue='Normal' width="15.625em" variant={Variant.Outlined} labelMode="Auto" />
                </div>
                <div className="textbox-component">
                    <TextBox placeholder="Size" defaultValue='Normal' width="15.625em" variant={Variant.Filled} labelMode="Auto" />
                </div>
                <div className="textbox-component">
                    <TextBox placeholder="Size" defaultValue='Normal' width="15.625em" labelMode="Auto" />
                </div>
            </div>
        </div>
    );
}