import { Dialog } from '@syncfusion/react-popups';
import { Button, Variant } from '@syncfusion/react-buttons';
import { useState } from 'react';

export default function App() {
    const [visible, setVisible] = useState(false);

    const openDialog = () => {
        setVisible(true);
    };

    const closeDialog = () => {
        setVisible(false);
    };

    return (
        <div className="component-section">
            <Button onClick={openDialog}>Open Alert Dialog</Button>
            <Dialog
                header="Alert"
                open={visible}
                footer={
                    <Button onClick={closeDialog} variant={Variant.Standard}>OK</Button>
                }
                closeIcon={false}
                onClose={closeDialog}
                style={{ maxWidth: '400px' }}
            >
                <div>An unexpected error occurred while processing your request. Please try again or contact system administrator if the problem persists.</div>
            </Dialog>
        </div>
    );
}