import { Tooltip } from '@syncfusion/react-popups';
import { Button } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
    return (
        <div className="component-section tooltip-section">
            <Tooltip content={<>Select</>} animation={{ open: { effect: 'ZoomIn', duration: 400 }, close: { effect: 'ZoomOut', duration: 400 } }}>
                <Button>Zoom</Button>
            </Tooltip>
            <Tooltip content={<>Select</>} animation={{ open: { effect: 'FadeIn', duration: 400 }, close: { effect: 'FadeOut', duration: 400 } }}>
                <Button>Fade</Button>
            </Tooltip>
            <Tooltip content={<>Select</>} animation={{ open: { effect: 'FadeZoomIn', duration: 400 }, close: { effect: 'FadeZoomOut', duration: 400 } }}>
                <Button>Fade and Zoom</Button>
            </Tooltip>
        </div>
    );
}
