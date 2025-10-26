import { Dialog, DialogPosition } from '@syncfusion/react-popups';
import { Button, IButton, Variant } from '@syncfusion/react-buttons';
import { DropDownButton, ItemModel, ButtonSelectEvent } from '@syncfusion/react-splitbuttons';
import { useRef, useState } from 'react';
import './App.css';

export default function App() {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState<DialogPosition>("Center");
    const buttonRef = useRef<IButton>(null);
    const positionItems: ItemModel[] = [
        { id: 'LeftTop', text: 'Left Top' },
        { id: 'CenterTop', text: 'Center Top' },
        { id: 'RightTop', text: 'Right Top' },
        { id: 'LeftCenter', text: 'Left Center' },
        { id: 'Center', text: 'Center' },
        { id: 'RightCenter', text: 'Right Center' },
        { id: 'LeftBottom', text: 'Left Bottom' },
        { id: 'CenterBottom', text: 'Center Bottom' },
        { id: 'RightBottom', text: 'Right Bottom' }
    ];


    const handlePositionSelect = (e: ButtonSelectEvent) => {
        if (e.item && e.item.id) {
            setPosition(e.item.id as DialogPosition);
        }
    };

    const openDialog = () => {
        setVisible(true);
    };

    return (
        <div className="component-section">
            <DropDownButton
                items={positionItems}
                onSelect={(e) => {
                    handlePositionSelect(e as ButtonSelectEvent);
                    openDialog();
                }}
                className="position-dropdown-button"
                popupWidth={250}
                style={{ width: '250px' }}
            >
                Open Positioning Dialog
            </DropDownButton>
            <Dialog
                header="Location Access"
                open={visible}
                position={position}
                onClose={() => setVisible(false)}
                initialFocusRef={buttonRef as React.RefObject<HTMLElement>}
                style={{ maxWidth: '400px' }}
                footer={
                    <div className="dialog-footer">
                        <Button variant={Variant.Standard} onClick={() => setVisible(false)}>Not Now</Button>
                        <Button ref={buttonRef} variant={Variant.Standard} onClick={() => setVisible(false)}>Allow Access</Button>
                    </div>
                }
            >
                This app would like to access your device's location to provide you with personalized recommendations and nearby services.

            </Dialog>
        </div>
    );
}