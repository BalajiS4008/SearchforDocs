import { ResizeMode, TextArea } from "@syncfusion/react-inputs";

export default function App() {
    return (
        <div className="component-section">
            <TextArea placeholder="Vertically Resizable" resizeMode={ResizeMode.Vertical} width={300} labelMode="Auto" />
        </div>
    );
};