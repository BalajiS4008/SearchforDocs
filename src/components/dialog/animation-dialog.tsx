import { Dialog, DialogEffect } from '@syncfusion/react-popups';
import { Button, Variant } from '@syncfusion/react-buttons';
import { useState } from 'react';

export default function App() {
    const [visible, setVisible] = useState(false);
    const [animationType, setAnimationType] = useState<DialogEffect>();

    const openDialog = (animation: DialogEffect) => {
        setAnimationType(animation);
        setVisible(true);
    };

    const closeDialog = () => {
        setVisible(false);
    };

    return (
        <div className="component-section">
            <div className="animation-buttons">
                <Button onClick={() => openDialog('Zoom')}>Zoom</Button>
                <Button onClick={() => openDialog('FadeZoom')}>Fade Zoom</Button>
                <Button onClick={() => openDialog('SlideBottom')}>Slide Bottom</Button>
                <Button onClick={() => openDialog('SlideTop')}>Slide Top</Button>
            </div>
            <Dialog
                header="New Message Notification"
                open={visible}
                animation={{
                    effect: animationType as DialogEffect,
                    duration: 400,
                    delay: 0
                }}
                onClose={closeDialog}
                closeIcon={false}
                footer={
                    <div className="dialog-buttons">
                        <Button variant={Variant.Standard} onClick={closeDialog}>Dismiss</Button>
                    </div>
                }
                style={{ maxWidth: '400px' }}
            >
                <div className="message-notification">
                    <div className="message-header">
                        <div className="avatar">JD</div>
                        <div>
                            <h4>John Doe</h4>
                            <div className="timestamp">2 minutes ago</div>
                        </div>
                    </div>

                    <div className="message-content">
                        <p>Hi team,</p>
                        <p>I just reviewed the project proposal and have some feedback to share with the team. Can we schedule a quick call today to discuss the timeline adjustments?</p>
                        <p>Thanks,<br />John</p>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}