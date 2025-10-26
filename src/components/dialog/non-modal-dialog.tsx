import { Dialog } from '@syncfusion/react-popups';
import { Button, Variant } from '@syncfusion/react-buttons';
import { useState } from 'react';

export default function App() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="component-section">
            <Button onClick={() => setVisible(true)}>Open Non-Modal Dialog</Button>
            <Dialog
                header="Editor Shortcuts"
                open={visible}
                modal={false}
                style={{ maxWidth: '400px' }}
                onClose={() => setVisible(false)}
                footer={<Button variant={Variant.Standard} onClick={() => setVisible(false)}>Close</Button>}
            >
                <div>
                    <ul style={{ padding: '0 20px' }}>
                        <li>Ctrl+B: Bold text</li>
                        <li>Ctrl+I: Italic text</li>
                        <li>Ctrl+U: Underline text</li>
                        <li>Ctrl+S: Save document</li>
                        <li>Ctrl+P: Print document</li>
                    </ul>
                    <p style={{margin: '0px'}}>You can continue editing your document while this guide is open.</p>
                </div>
            </Dialog>
        </div>
    );
}