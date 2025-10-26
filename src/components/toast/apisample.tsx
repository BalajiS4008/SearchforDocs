import { IToast, Severity, Toast } from "@syncfusion/react-notifications";
import { useRef, useState } from "react";
import { Button } from "@syncfusion/react-buttons";
import './App.css';

export default function App() {
    const toastRef = useRef<IToast>(null);
    const [isToastVisible, setIsToastVisible] = useState(false);

    const toggleToast = () => {
        if (isToastVisible) {
            toastRef.current?.hide();
            setIsToastVisible(false);
        } else {
            toastRef.current?.show(
                <div className="delivery-notification">
                    <h6>Your order is on the way!</h6>
                    <p>
                        <strong>Tasty Bites Restaurant</strong> has dispatched your order.
                        <br />
                        Estimated delivery time: <strong>25 minutes</strong>
                    </p>
                    <div className="delivery-map">
                        <img
                            src={'/images/toast/location.png'}
                            alt="Delivery route map"
                            className="map-image"
                            onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="220" viewBox="0 0 800 220"><rect width="800" height="200" fill="%23e0e0e0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23555555">Delivery map not available</text></svg>';
                            }}
                        />
                    </div>
                </div>
            );
            setIsToastVisible(true);
        }
    };

    return (
        <div className="component-section">
                            <Button 
                    onClick={toggleToast}
                >
                    {isToastVisible ? "Hide Notification" : "Track your order"}
                </Button>
           
                <Toast
                    ref={toastRef}
                    position={{ xAxis: 'Right', yAxis: 'Bottom' }}
                    timeout={3000}
                    severity={Severity.Info}
                    animation={{
                        show: {name: 'FadeIn', duration: 300, timingFunction: 'ease-in-out'},
                        hide: { name: 'FadeOut', duration: 300, timingFunction: 'ease-in-out' }}}
                    target="#overview-label-containers"
                    onClose={() => setIsToastVisible(false)}
                />
        </div>
    );
};