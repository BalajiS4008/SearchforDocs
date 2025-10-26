import { Tooltip } from '@syncfusion/react-popups';
import { UserIcon } from "@syncfusion/react-icons"
import { Button, Variant, Color, Size } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
    return (<div className="component-section tooltip-section">
        <Tooltip content={<>Profile</>} >
            <Button variant={Variant.Standard} color={Color.Secondary} icon={<UserIcon />} size={Size.Large}></Button>
        </Tooltip>
    </div>);
}