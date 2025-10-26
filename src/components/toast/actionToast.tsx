import { Button, Variant } from "@syncfusion/react-buttons";
import { Toast } from "@syncfusion/react-notifications";
import { useState } from "react";
import './App.css';

export default function App() {
    const [isToastVisible, setIsToastVisible] = useState(false);
    const showToast = () => {
        setIsToastVisible(true);
    };
    const hideToast = () => {
        setIsToastVisible(false);
    };
    const handleConfirm = () => {
        hideToast();
    };

    // Handler for the 'Cancel' action
    const handleCancel = () => {
        hideToast();
    };
    return (
        <>
            <div className="component-section">
                <Button onClick={showToast} disabled={isToastVisible}>
                    Show Confirmation Toast
                </Button>
            </div>
            <Toast
                open={isToastVisible}
                content="Confirm your action to proceed."
                position={{ xAxis: 'Right', yAxis: 'Top' }}
                timeout={3000}
                width={253}
                onClose={hideToast}
                actions={
                    <>
                        <Button onClick={handleConfirm} variant={Variant.Standard}>Undo</Button>
                        <Button onClick={handleCancel} variant={Variant.Standard}>Confirm</Button>
                    </>
                }
            >
            </Toast>
        </>
    );
};