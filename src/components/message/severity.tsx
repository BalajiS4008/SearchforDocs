import { Message, Severity } from '@syncfusion/react-notifications';
import './App.css';

export default function App() {
  return (
    <div className="component-section">
      <Message>Editing is restricted</Message>
      <Message severity={Severity.Info}>Please read the comments carefully</Message>
      <Message severity={Severity.Success}>Your message has been sent successfully</Message>
      <Message severity={Severity.Warning}>There was a problem with your network connection</Message>
      <Message severity={Severity.Error}>A problem occurred while submitting your data</Message>
    </div>
  );
}
