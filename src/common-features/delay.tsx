import { useState } from 'react';
import { Fade, Severity } from '@syncfusion/react-base';
import { Button } from '@syncfusion/react-buttons';
import { NumericChangeEvent, NumericTextBox } from '@syncfusion/react-inputs';
import { Message } from '@syncfusion/react-notifications';

export default function App() {
  const [visible, setVisible] = useState(true);
  const [delay, setDelay] = useState(1000);
  const duration = 500;

  const handleHideWithDelay = () => {
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
    }, delay + duration);
  };

  const handleChange = (args: NumericChangeEvent) => {
    if (args.value) {
      setDelay(args.value)
    }
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
        <Button onClick={handleHideWithDelay} style={{minWidth: '80px'}}>
          Hide
        </Button>
        <NumericTextBox
          value={delay}
          format="n0"
          min={500}
          max={3000}
          step={250}
          onChange={handleChange}
          placeholder="Delay (ms)"
          width="120px"
        />
      </div>
      <div style={{paddingTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Fade
          in={visible}
          duration={duration}
          delay={visible ? 0 : delay}
        >
          <Message 
            style={{ width: "500px" }} 
            severity={Severity.Success}
          >
            This message demonstrates delay control. It will fade out after a {delay}ms delay.
          </Message>
        </Fade>
      </div>
    </>
  );
}
