import { Message, Severity } from '@syncfusion/react-notifications';
import './App.css';

export default function App() {
  return (
    <div className="component-section">
      <Message severity={Severity.Success}>Your message has been sent successfully</Message>
    </div>
  );
}