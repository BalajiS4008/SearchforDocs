import { Dialog } from '@syncfusion/react-popups';
import { Button, Variant } from '@syncfusion/react-buttons';
import { useState } from 'react';

export default function App() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="component-section">
            <Button onClick={() => setVisible(true)}>Open Dialog</Button>
            <Dialog
                header="Cookie Policy"
                open={visible}
                onClose={() => setVisible(false)}
                style={{ maxWidth: '400px' }}
                footer={<Button onClick={() => setVisible(false)} variant={Variant.Standard}>OK</Button>}
            >
                <div>
                    This website uses cookies to improve your browsing experience.
                    By continuing to use our site, you agree to our use of cookies in accordance
                    with our Privacy Policy. Cookies help us remember your preferences and
                    understand how visitors interact with our website.
                </div>
            </Dialog>
        </div>
    );
}