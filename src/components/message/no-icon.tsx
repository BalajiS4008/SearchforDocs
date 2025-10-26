import { Message, Severity } from '@syncfusion/react-notifications';

export default function App() {
  return (
    <div className="component-section">
      <Message severity={Severity.Success} icon={false}>This is a success message without icon</Message>
    </div>
  );
}