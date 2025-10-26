import { useState } from 'react';
import { Zoom } from '@syncfusion/react-base';
import { Button } from '@syncfusion/react-buttons';
import { Dialog } from '@syncfusion/react-popups';
import { NumericChangeEvent, NumericTextBox } from '@syncfusion/react-inputs';

export default function App() {
  const [visible, setVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [duration, setDuration] = useState(400);

  const handleClose = () => {
    setIsClosing(true);
  };

  const handleChange = (args: NumericChangeEvent) => {
    if (args.value) {
      setDuration(args.value)
    }
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      setVisible(false);
      setIsClosing(false);
    }
  };

  const handleOpen = () => {
    setVisible(true);
    setIsClosing(false);
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button onClick={visible ? handleClose : handleOpen} style={{ minWidth: '120px' }}>
          {visible ? 'Close Dialog' : 'Open Dialog'}
        </Button>
        <NumericTextBox
          value={duration}
          min={100}
          max={5000}
          step={100}
          width="120px"
          placeholder="Duration"
          onChange={handleChange}
          format="n0"
        />
      </div>
      
      {visible && (
        <Zoom 
          in={!isClosing} 
          duration={duration}
          onEnd={handleAnimationEnd}
        >
          <Dialog
            open={true}
            header="Animation Settings"
            onClose={handleClose}
            modal={false}
            footer={
              <Button onClick={handleClose}>
                Close
              </Button>
            }
          >
            <div style={{ padding: '10px 0' }}>
              <p><strong>Duration:</strong> {duration}ms</p>
              <p>This dialog demonstrates custom duration controls for the Zoom animation component.</p>
            </div>
          </Dialog>
        </Zoom>
      )}
    </>
  );
}
