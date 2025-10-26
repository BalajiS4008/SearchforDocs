import { Tooltip } from '@syncfusion/react-popups';
import { Button } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
    return (
        <div className="component-section tooltip-section">
            <Tooltip content={<>Delayed Tooltip</>} openDelay={1000} closeDelay={1000}>
                <Button>Hover Me</Button>
            </Tooltip>
        </div>
    );
}
