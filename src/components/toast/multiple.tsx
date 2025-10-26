import { Button, Color } from "@syncfusion/react-buttons";
import { IToast, Severity, Toast } from "@syncfusion/react-notifications";
import { useRef } from "react";
import './App.css';

export default function App() {
    const ref = useRef<IToast>(null);
    const toggleToast: () => void = () => {
        ref.current?.show(<div>document.pdf</div>);
        ref.current?.show(<div>image.png</div>);
        ref.current?.show(<div>archive.zip</div>);
        ref.current?.show(<div>spreadsheet.zip</div>);
    };
    return (
        <>
            <div className="component-section">
                <Button toggleable={true} onClick={toggleToast} color={Color.Secondary}>
                    Simulate File Uploads
                </Button>
            </div>
            <Toast
                ref={ref}
                title='Uploaded'
                position={{ xAxis: 'Right', yAxis: 'Top' }}
                timeout={3000}
                closeButton={true}
                width={253}
                severity={Severity.Success}
            >
            </Toast>
        </>
    );
};