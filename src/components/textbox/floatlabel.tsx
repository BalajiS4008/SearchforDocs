import { TextBox, Variant } from "@syncfusion/react-inputs";
import './App.css';

export default function App() {

    return (
        <div className="textbox-container">
            <div className="textbox-column">
                <div className="textbox-component">
                    <TextBox
                        placeholder="Auto"
                        width="15.625em"
                        variant={Variant.Outlined}
                        labelMode="Auto" />
                </div>
            </div>
            <div className="textbox-column">
                <div className="textbox-component-1">
                    <TextBox
                        placeholder="Always"
                        width="15.625em"
                        variant={Variant.Filled}
                        labelMode="Always"
                    />
                </div>
            </div>
            <div className="textbox-column">
                <div className="textbox-component">
                    <TextBox
                        placeholder="Never"
                        width="15.625em"
                        labelMode="Never" />
                </div>
            </div>
        </div>
    );
};