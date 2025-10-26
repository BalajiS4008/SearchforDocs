import { Dialog } from '@syncfusion/react-popups';
import { Button, Variant } from '@syncfusion/react-buttons';
import { TextBox, ITextBox } from '@syncfusion/react-inputs';
import { useState, useRef } from 'react';
import './App.css';

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const InputRef = useRef<ITextBox>(null);
    return (
        <div className="component-section">
            <div className="focus-buttons">
                <Button onClick={() => setIsOpen(true)}>Open initial focus dialog</Button>
            </div>

            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                modal={true}
                initialFocusRef={InputRef as React.RefObject<HTMLElement>}
                header={`Create Contact`}
                style={{ minWidth: '300px' }}
                footer={
                    <div className="dialog-footer">
                        <Button onClick={() => setIsOpen(false)} variant={Variant.Standard}> Cancel </Button>
                        <Button variant={Variant.Standard} onClick={() => setIsOpen(false)}> Save </Button>
                    </div>
                }
            >
                <div className="focus-dialog-content">
                    <div className="form-field">
                        <TextBox ref={InputRef} placeholder="Full Name" labelMode='Always' />
                    </div>
                    <div className="form-field">
                        <TextBox placeholder="Mail Address" labelMode='Always' />
                    </div>
                </div>
            </Dialog>
        </div>
    );
}