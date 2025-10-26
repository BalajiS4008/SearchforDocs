import { Message } from '@syncfusion/react-notifications';
import { useState } from 'react';

export default function App() {
    const [defaultVisible, setDefaultVisible] = useState(true);
    const [closeMessage, setCloseMessage] = useState('');

    const defaultClosed = () => {
        setDefaultVisible(false);
        setCloseMessage('Message component closed successfully');
    };

    return (
        <div className="component-section">
            <Message visible={defaultVisible} closeIcon={true} onClose={defaultClosed} icon={true}>Editing is restricted</Message>
            {closeMessage && <p className='sf-success'>{closeMessage}</p>}
        </div>
    );
}