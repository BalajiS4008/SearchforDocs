import { TextBox } from "@syncfusion/react-inputs";
import './App.css';

export default function App() {
    return (
        <div className="textbox-container">
            <div className="textbox-column">
                <div className="textbox-component">
                    <TextBox placeholder="Default type" width="15.625em" type='text' />
                </div>
                <div className="textbox-component">
                    <TextBox placeholder="Password type" width="15.625em" type='password' />
                </div>
                <div className="textbox-component">
                    <TextBox placeholder="Search Type" width="15.625em" type='search' />
                </div>
            </div>
            <div className="textbox-column">
                <div className="textbox-component">
                    <TextBox placeholder="Email type" width="15.625em" type='email' />
                </div>
                <div className="textbox-component">
                    <TextBox placeholder="+1 234 567 8900" width="15.625em" type='tel' />
                </div>
                <div className="textbox-component">
                    <TextBox placeholder="URL type" width="15.625em" type='url' />
                </div>
            </div>
        </div>
    );
}