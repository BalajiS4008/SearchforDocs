import { Draggable, Droppable, DragDrop, DropEvent } from '@syncfusion/react-base';
import './drag.css';

export default function App() {
  const handleDrop = (args: DropEvent) => {
    const dragElement = args.droppedElement;
    if (args.target && args.target.classList.contains('droppable')) {
      args.target.style.borderColor = '#4caf50';
    }
    if (dragElement) {
      dragElement.textContent = 'Dropped';
    }
  }

  return (
    <div className='draggable-demo' style={{ padding: '20px', textAlign: 'center', position: 'relative', height: '200px' }}>
      <DragDrop>
        <div style={{ height: '20px' }}>
          <Draggable clone={false}>
            <div className="draggable">
              Drag me
            </div>
          </Draggable>
        </div>
        <Droppable drop={handleDrop}>
          <div className="droppable">
            Drop here
          </div>
        </Droppable>
      </DragDrop>
    </div>
  );
}