import { ResizeMode, TextArea } from "@syncfusion/react-inputs";

export default function App() {
  return (
    <div className="component-section">
      <TextArea placeholder="Both side resizable" resizeMode={ResizeMode.Both} width={300} labelMode="Auto" />
    </div>
  );
};