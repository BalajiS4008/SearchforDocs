import { Dialog } from '@syncfusion/react-popups';
import { Button, Variant } from '@syncfusion/react-buttons';
import { useState } from 'react';
import { TextBox, TextBoxChangeEvent } from '@syncfusion/react-inputs';

export default function App() {
    const [visible, setVisible] = useState(false);
    const [code, setCode] = useState('');

    const handleVerify = () => {
        if (code) {
            setCode('');
        }
        setVisible(false);
    };

    return (
        <div className="component-section">
            <Button onClick={() => setVisible(true)}>Open Draggable Dialog</Button>
            <Dialog
                header="Security Verification"
                open={visible}
                draggable={true}
                onClose={() => setVisible(false)}
                style={{ maxWidth: '400px' }}
                footer={<> <Button onClick={() => setVisible(false)} variant={Variant.Standard}>CANCEL</Button>
                    <Button variant={Variant.Standard} onClick={handleVerify} >VERIFY</Button> </>}
            >
                <div >
                    <p > For your account security, please enter the 6-digit verification code that was sent to your mobile device. </p>
                    <TextBox
                        type="text"
                        value={code}
                        onChange={(args: TextBoxChangeEvent) => setCode(args.value || '')}
                        placeholder="Verification code"
                        maxLength={6}
                    />

                </div>
            </Dialog>
        </div>
    );
}