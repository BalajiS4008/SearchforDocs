import { useState } from 'react';
import { Tooltip } from '@syncfusion/react-popups';
import { Button, Color } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

    return (
        <div className="component-section tooltip-section">
            <Tooltip open={open} onClose={handleClose} onOpen={handleOpen}content={<>Controlled Tooltip</>}>
                <Button color={Color.Primary}>Hover Me</Button>
            </Tooltip>
        </div>
    );
}
