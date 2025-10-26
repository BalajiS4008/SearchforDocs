import { Dialog } from '@syncfusion/react-popups';
import { Button, IButton, Variant } from '@syncfusion/react-buttons';
import { Message, Severity } from '@syncfusion/react-notifications';
import { useRef, useState } from 'react';

export default function App() {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [messageVisible, setMessageVisible] = useState(false);
    const [result, setResult] = useState('');
    const [severity, setSeverity] = useState<Severity>();
    const buttonRef = useRef<IButton>(null);

    const openDialog = () => {
        setDialogVisible(true);
        setResult('');
    };

    const handleConfirm = () => {
        setResult('Changes saved successfully');
        setSeverity(Severity.Success);
        setDialogVisible(false);
        setMessageVisible(true);
    };

    const handleCancel = () => {
        setResult('Changes discarded');
        setSeverity(Severity.Info);
        setDialogVisible(false);
        setMessageVisible(true);
    };

    return (
        <div className="component-section">
            <div style={{ textAlign: 'center' }}>
                <Button onClick={openDialog}>Open Confirmation Dialog</Button>
                {result != '' && <Message className='dialog-message' severity={severity} visible={messageVisible} closeIcon={true} onClose={() => setMessageVisible(false)}>{result}</Message>}
            </div>
            <Dialog
                header="Unsaved Changes"
                open={dialogVisible}
                style={{ maxWidth: '400px' }}
                initialFocusRef={buttonRef as React.RefObject<HTMLElement>}
                footer={
                    <>
                        <Button onClick={handleCancel} variant={Variant.Standard}>Discard</Button>
                        <Button ref={buttonRef} onClick={handleConfirm} variant={Variant.Standard}>Save</Button>
                    </>
                }
                onClose={() => setDialogVisible(false)}
            >
                <div>You have unsaved changes. Would you like to save them before leaving this page?</div>
            </Dialog>
        </div>
    );
}