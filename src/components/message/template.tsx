import { Message, Severity } from '@syncfusion/react-notifications';
import { Button } from '@syncfusion/react-buttons';
import { useState } from 'react';
import './template.css';

export default function App() {
    const [visible, setVisible] = useState(true);
    const [cssClass, setCssClass] = useState('sf-outline sf-primary sf-success msg-hidden');
    const showClick = () => {
        setVisible(true);
        setCssClass('sf-outline sf-primary sf-success msg-hidden');
    };
    const dismissClick = () => {
        setVisible(false);
        setCssClass('sf-outline sf-primary sf-success');
    };

    const contentTemplate = () => {
        return (
            <div>
                <h1>Merged pull request</h1>
                <p>Pull request #41 merged after a successful build</p>
                <Button id="commitBtn" className="sf-link">View commit</Button>
                <Button id="closeBtn" className="sf-link" onClick={dismissClick}>Dismiss</Button>
            </div>
        );
    };

    return (
        <div className="msg-template-section component-section">
            <Button id="showBtn" className={cssClass} onClick={showClick}>Show pull request</Button>
            <Message id="msg_template" visible={visible} severity={Severity.Success}>{contentTemplate()}</Message>
        </div>
    );
}