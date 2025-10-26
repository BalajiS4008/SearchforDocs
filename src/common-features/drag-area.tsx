import { DragDrop, Draggable, DropEvent, Droppable, DragEvent } from '@syncfusion/react-base';
import { useRef } from 'react';
import './drag.css';

export default function App() {
    const dragAreaRef = useRef<HTMLDivElement>(null);

    const handleDrag = (args: DragEvent) => {
        const dragArea = dragAreaRef.current;
        if (!dragArea) return;
        const { event } = args;
        const { clientX, clientY } = event as MouseEvent;
        const rect = dragArea.getBoundingClientRect();
        const isInside = (
            clientX >= rect.left &&
            clientX <= rect.right &&
            clientY >= rect.top &&
            clientY <= rect.bottom
        );
        document.body.style.cursor = isInside 
            ? 'move' 
            : 'not-allowed';
    };

    const handleDragStop = () => {
        document.body.style.cursor = '';
    };

    const handleDrop = (args: DropEvent) => {
        const dragElement = args.droppedElement;
        if (args.target?.classList.contains('droppable')) {
            args.target.style.borderColor = '#4caf50';
        }
        if (dragElement) {
            dragElement.textContent = 'Dropped';
        }
    };

    return (
        <div 
            className='draggable-demo' 
            style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                textAlign: 'center', 
                position: 'relative', 
                overflow: 'hidden', 
            }}
        >
            <div id='dragarea' ref={dragAreaRef}>
                <DragDrop>
                    <div style={{ height: '20px' }}>
                        <Draggable 
                            clone={false} 
                            dragArea={'#dragarea'}
                            drag={handleDrag}
                            dragStop={handleDragStop}
                        >
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
        </div>
    );
}