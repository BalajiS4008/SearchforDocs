import { ResizeMode, TextArea } from "@syncfusion/react-inputs";

export default function App() {
    return (
        <div className="component-section">
            <TextArea placeholder="Horizantally Resizable" resizeMode={ResizeMode.Horizontal} width={300} labelMode="Auto" />
        </div>
    );
};