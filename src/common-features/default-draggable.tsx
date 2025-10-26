import { Draggable } from '@syncfusion/react-base';
import './drag.css';

export default function App() {
  return (
    <div className='draggable-demo' style={{ padding: '20px', textAlign: 'center', position: 'relative', height: '200px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Draggable clone={false}>
            <div className="draggable">
                Drag me
            </div>
          </Draggable>
        </div>
    </div>
  );
}