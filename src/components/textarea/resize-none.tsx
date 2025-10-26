import { ResizeMode, TextArea } from "@syncfusion/react-inputs";

export default function App() {
    return (
        <div className="component-section">
            <TextArea placeholder="Standard TextArea" resizeMode={ResizeMode.None} width={300} labelMode="Auto" />
        </div>
    );
};