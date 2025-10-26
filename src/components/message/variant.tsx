import { Message, Severity, Variant } from '@syncfusion/react-notifications';
import './App.css';

export default function App() {
  return (
    <div className="component-section">
      <Message variant={Variant.Standard}>Editing is restricted</Message>
      <Message severity={Severity.Info} variant={Variant.Standard}>Please read the comments carefully</Message>
      <Message severity={Severity.Success} variant={Variant.Standard}>Your message has been sent successfully</Message>
      <Message severity={Severity.Warning} variant={Variant.Standard}>There was a problem with your network connection</Message>
      <Message severity={Severity.Error} variant={Variant.Standard}>A problem occurred while submitting your data</Message>
    </div>
  );
}