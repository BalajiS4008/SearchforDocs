import { SnippetItem } from '../../common/snippet'

export const ToastNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-notifications' }
];

export const ToastImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { Toast } from "@syncfusion/react-notifications";' }
];

export const ToastCode: SnippetItem[] = [
    { title: "App.tsx", code: `import { Button, Color } from "@syncfusion/react-buttons";
import { Toast } from "@syncfusion/react-notifications";
import { useState } from "react";
import './App.css';

export default function App() {
    const [isToastVisible, setIsToastVisible] = useState(false);
    const toggleToast: () => void = () => {
        if (isToastVisible) {
            setIsToastVisible(false);
        } else {
            setIsToastVisible(true);
        }
    };
    return (
        <>
            <div className="component-section">
                <Button toggleable={true} onClick={toggleToast} color={Color.Secondary}>
                    {isToastVisible ? 'Hide' : 'Show'}
                </Button>
            </div>
            <Toast
                open={isToastVisible}
                content={"Show button clicked"}
                position={{ xAxis: 'Right', yAxis: 'Top' }}
                timeout={3000}
                onClose={() => setIsToastVisible(false)}
            >
            </Toast>
        </>
    );
};` }
];

export const ToastStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-notifications/styles/material3.css';` }
];

export const ToastDependency: SnippetItem[] = [
    { title: "Packages", code: `|-- @syncfusion/react-notifications
   |-- @syncfusion/react-base` }
];