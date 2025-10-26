import { Dialog } from '@syncfusion/react-popups';
import { Button, Color, IButton, Variant } from '@syncfusion/react-buttons';
import { Message } from '@syncfusion/react-notifications';
import { useRef, useState } from 'react';
import './App.css';

export default function App() {
    const [visible, setVisible] = useState(false);
    const [action, setAction] = useState('');
    const buttonRef = useRef<IButton>(null);
    const openDialog = () => {
        setVisible(true);
        setAction('');
    };

    const closeDialog = () => {
        setVisible(false);
    };

    const handleAction = (actionType: string) => {
        setAction(`File ${actionType} successfully`);
        setVisible(false);
    };

    return (
        <div className="component-section">
            <div className="upload-actions-container">
                <Button onClick={openDialog} color={Color.Primary}>Open Action Dialog</Button>
                {action && <Message className='dialog-message' closeIcon={true}>Status: {action}</Message>}
            </div>

            <Dialog
                header="Upload Files"
                open={visible}
                initialFocusRef={buttonRef as React.RefObject<HTMLElement>}
                footer={
                    <div className="action-buttons">
                        <Button onClick={() => handleAction('canceled')} variant={Variant.Standard}>Cancel</Button>
                        <Button ref={buttonRef} onClick={() => handleAction('uploaded')} variant={Variant.Standard}>Upload</Button>
                    </div>
                }
                closeIcon={false}
                onClose={closeDialog}
                style={{ maxWidth: '420px' }}
            >
                <div>
                    <div className="file-details-container">
                        <p className="file-detail"><strong>Name:</strong> project-report.pdf</p>
                        <p className="file-detail"><strong>Size:</strong> 2.4 MB</p>
                        <p className="file-detail"><strong>Type:</strong> PDF Document</p>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}