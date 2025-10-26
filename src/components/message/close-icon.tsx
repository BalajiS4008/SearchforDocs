import { Message, Severity } from '@syncfusion/react-notifications';
import { Button } from '@syncfusion/react-buttons';
import { useState } from 'react';
import './close-icon.css';

export default function App() {
    const [successVisible, setSuccessVisible] = useState(true);
    const [successclassName, setSuccessclassName] = useState('sf-outline sf-primary sf-success msg-hidden');

    const successClick = () => {
        setSuccessVisible(true);
        setSuccessclassName('sf-outline sf-primary sf-success msg-hidden');
    };
    const successClosed = () => {
        setSuccessVisible(false);
        setSuccessclassName('sf-outline sf-primary sf-success');
    };
    return (
        <div className="msg-icon-section component-section">
            <Button className={successclassName} onClick={successClick}>Show Success Message</Button>
            <Message severity={Severity.Success} closeIcon={true} onClose={successClosed} visible={successVisible} >Your message has been sent successfully</Message>
        </div>
    );
}