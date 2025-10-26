import { useState } from 'react';
import { Fade } from '@syncfusion/react-base';
import { Button } from '@syncfusion/react-buttons';
import './animation.css';

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ height: '250px' }}>
      <Button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </Button>
      <div className="animation-container">
        <Fade in={show} duration={500}>
          <div className="animation-box">Fade</div>
        </Fade>
      </div>
    </div>
  );
}