import { Message, Severity } from '@syncfusion/react-notifications';
import './App.css';

export default function App() {
  return (
    <div className="component-section">
      <Message severity={Severity.Success}>Your license has been activated successfully</Message>
      <Message className="sf-content-center" severity={Severity.Warning}>The license will expire today</Message>
      <Message className="sf-content-right" severity={Severity.Error}>The license key is invalid</Message>
    </div>
  );
}