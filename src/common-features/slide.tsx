import { useState } from 'react';
import { Slide } from '@syncfusion/react-base';
import { Button } from '@syncfusion/react-buttons';
import './animation.css';

type SlideDirection = "Left" | "Top" | "Bottom" | "Right";

export default function App() {
  const [show, setShow] = useState(true);
  const [direction, setDirection] = useState<SlideDirection>('Bottom');
  const directions: SlideDirection[] = ['Top', 'Bottom', 'Left', 'Right'];
  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setDirection(event.target.value as SlideDirection);
  };
  
  return (
    <div key={"slide"} style={{ height: '250px', position: 'relative' , overflow: 'hidden'}}>
      <div style={{display: 'flex'}}>
        <Button onClick={() => setShow(!show)} className="fixed-width-button">
          {show ? 'Hide' : 'Show'}
        </Button>
        <select
         className='animation-select'
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
      <div className="animation-container" style={{position: 'absolute', width: '100%', height:'100%'}}>
        <Slide in={show} direction={direction} duration={500}>
          <div key={"slide"} className="animation-box">Slide</div>
        </Slide> 
      </div>
    </div>
  );
}