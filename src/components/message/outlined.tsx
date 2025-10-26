import { Message, Severity, Variant } from '@syncfusion/react-notifications';
import './App.css';

export default function App() {
  return (
    <div className="component-section">
      <Message variant={Variant.Outlined}>Editing is restricted</Message>
      <Message severity={Severity.Info} variant={Variant.Outlined}>Please read the comments carefully</Message>
      <Message severity={Severity.Success} variant={Variant.Outlined}>Your message has been sent successfully</Message>
      <Message severity={Severity.Warning} variant={Variant.Outlined}>There was a problem with your network connection</Message>
      <Message severity={Severity.Error} variant={Variant.Outlined}>A problem occurred while submitting your data</Message>
    </div>
  );
}