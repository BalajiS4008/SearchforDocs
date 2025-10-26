import { Toast } from "@syncfusion/react-notifications";
import { Button, Color, Variant } from "@syncfusion/react-buttons";
import './type.css';
import React from "react";

export default function App() {
    const [activeToast, setActiveToast] = React.useState<string | null>(null);
    const [timeout, setTimeout] = React.useState<number>(3000);

    const toggleToast = (toastId: string) => {
        if (activeToast === toastId) {
            setActiveToast(null);
        } else {
            setActiveToast(toastId);
            setTimeout(3000);
        }
    };

    return (
        <div className="component-section positioned">
            <div className="toast-grid">
                <div className="toast-row">
                    <Button onClick={() => toggleToast("topCenter")} variant={Variant.Standard} color={Color.Secondary} >TOP-CENTER</Button>
                </div>

                <div className="toast-row mid-row">
                    <div className="left-col">
                        <Button onClick={() => toggleToast("leftTop")} variant={Variant.Standard} color={Color.Secondary} >TOP-LEFT</Button>
                        <Button onClick={() => toggleToast("leftBottom")} variant={Variant.Standard} color={Color.Secondary} >BOTTOM-LEFT</Button>
                    </div>

                    <div className="right-col">
                        <Button onClick={() => toggleToast("rightTop")} variant={Variant.Standard} color={Color.Secondary} >TOP-RIGHT</Button>
                        <Button onClick={() => toggleToast("rightBottom")} variant={Variant.Standard} color={Color.Secondary} >BOTTOM-RIGHT</Button>
                    </div>
                </div>

                <div className="toast-row">
                    <Button onClick={() => toggleToast("bottomCenter")} variant={Variant.Standard} color={Color.Secondary} >BOTTOM-CENTER</Button>
                </div>
            </div>

            <div className="toast-container">
                <Toast timeout={timeout} open={activeToast === "topCenter"}
                    content="Message Received" position={{ xAxis: 'Center', yAxis: 'Top' }} className="toast-type">
                </Toast>

                <Toast timeout={timeout} open={activeToast === "leftTop"}
                    content="Message Received" position={{ xAxis: 'Left', yAxis: 'Top' }} className="toast-type">
                </Toast>
                <Toast timeout={timeout} open={activeToast === "leftBottom"}
                    content="Message Received" position={{ xAxis: 'Left', yAxis: 'Bottom' }} className="toast-type">
                </Toast>

                <Toast timeout={timeout} open={activeToast === "rightTop"}
                    content="Message Received" position={{ xAxis: 'Right', yAxis: 'Top' }} className="toast-type">
                </Toast>
                <Toast timeout={timeout} open={activeToast === "rightBottom"}
                    content="Message Received" position={{ xAxis: 'Right', yAxis: 'Bottom' }} className="toast-type">
                </Toast>

                <Toast timeout={timeout} open={activeToast === "bottomCenter"}
                    content="Message Received" position={{ xAxis: 'Center', yAxis: 'Bottom' }} className="toast-type">
                </Toast>
            </div>
        </div>
    );
}