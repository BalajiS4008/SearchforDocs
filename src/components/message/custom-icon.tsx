import { Message } from '@syncfusion/react-notifications';

export default function App() {

  const speakerIcon = (
    <svg className="sf-icon-size sf-font-size-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );

  const msgCloseIcon = (
    <svg className="sf-icon-size sf-font-size-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
  );

  return (
    <div className="component-section message-custom-icon">
      <Message icon={speakerIcon} closeIcon={msgCloseIcon}>We’re excited to announce the launch of <b>Syncfusion Core React components</b> — a suite of UI components built from the ground up specifically for React.</Message>
    </div>
  );
}