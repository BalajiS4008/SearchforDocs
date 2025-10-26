import { Button, Color } from "@syncfusion/react-buttons";
import { Toast } from "@syncfusion/react-notifications";
import { useState } from "react";
import './App.css';


export default function App() {
    const [isToastVisible, setIsToastVisible] = useState(false);
    const [otp, setOtp] = useState('');

    const showToast = () => {
        // Reset countdown and show the toast
        const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
        setOtp(newOtp);
        setIsToastVisible(true);
    };

    const hideToast = () => {
        setIsToastVisible(false);
    };

    return (
        <>
            <div className="component-section">
                <Button onClick={isToastVisible ? hideToast : showToast} color={Color.Secondary}>
                    {isToastVisible ? 'Hide OTP Notification' : 'Show OTP Notification'}
                </Button>
            </div>
            <Toast
                open={isToastVisible}
                title="OTP Verification"
                content={`Your one-time password is ${otp} and it will expire in 10 seconds.`}
                position={{ xAxis: 'Right', yAxis: 'Top' }}
                timeout={10000}
                onClose={hideToast}
                progressBar={true}
            >
            </Toast>
        </>
    );
};