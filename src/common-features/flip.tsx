import { useState } from 'react';
import { Flip } from '@syncfusion/react-base';
import { Button } from '@syncfusion/react-buttons';
import './animation.css';

type FlipDirection = "LeftDown" | "LeftUp" | "RightDown" | "RightUp" | "XDown" | "XUp" | "YLeft" | "YRight";

export default function App() {
  const [show, setShow] = useState(true);
  const [direction, setDirection] = useState<FlipDirection>('XDown');
  const directions: FlipDirection[] = [
    'LeftDown', 'LeftUp', 'RightDown', 'RightUp',
    'XDown', 'XUp', 'YLeft', 'YRight'
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setDirection(event.target.value as FlipDirection);
  };

  return (
    <div style={{ height: '250px', position: 'relative', overflow: 'hidden' }}>
      <div style={{display: 'flex'}}>
        <Button onClick={() => setShow(!show)} className="fixed-width-button">
          {show ? 'Hide' : 'Show'}
        </Button>
        <select
          className="animation-select"
          style={{ width: '150px', marginLeft: '10px' }}
          value={direction}
          onChange={handleChange}
        >
          {directions.map(dir => (
            <option key={dir} value={dir}>
              {dir}
            </option>
          ))}
        </select>
      </div>
      <div className="animation-container" style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Flip in={show} direction={direction} duration={500}>
          <div className="animation-box">Flip</div>
        </Flip>
      </div>
    </div>
  );
}