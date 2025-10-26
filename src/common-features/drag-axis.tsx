import { Draggable, Droppable, DragDrop, DropEvent } from '@syncfusion/react-base';
import { RadioButton, RadioButtonChangeEvent } from '@syncfusion/react-buttons';
import { useState, useEffect } from 'react';
import './drag.css';

export default function App() {
    const [axis, setAxis] = useState<'x' | 'y' | undefined>('x');
    const [key, setKey] = useState(0);
    const handleAxisChange = (e: RadioButtonChangeEvent) => {
        if (e.value) {
            setAxis(e.value as 'x' | 'y');
        } else {
            setAxis(undefined);
        }
    };
    useEffect(() => {
        setKey(prevKey => prevKey + 1);
    }, [axis]);
    const handleDrop = (args: DropEvent) => {
        const dragElement = args.droppedElement;
        if (dragElement) {
            dragElement.textContent = 'Dropped';
        }
    }
    return (
        <div className='draggable-demo drag-axis' style={{ padding: '20px', position: 'relative', height: '300px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <RadioButton 
                    label="Horizontal (X-axis)" 
                    checked={axis === 'x'} 
                    value="x" 
                    onChange={handleAxisChange}
                    name="axisGroup"
                    style={{ marginLeft: '10px' }}
                />
                <RadioButton 
                    label="Vertical (Y-axis)" 
                    checked={axis === 'y'} 
                    value="y" 
                    onChange={handleAxisChange}
                    name="axisGroup"
                    style={{ marginLeft: '10px' }}
                />
            </div>
            <DragDrop key={key}>
                <div  className="scoped-container" style={{ marginTop: '20px', marginBottom: '20px', display:'flex' }}>
                    <div style={{ marginTop: '25px', height: '20px', zIndex:'100' }}>
                        <Draggable clone={false} axis={axis} scope={axis}>
                            <div className="draggable" data-type="Axis restricted item">
                                Drag me
                            </div>
                        </Draggable>
                    </div>
                     <Droppable drop={handleDrop} scope={'x'}>
                        <div className="droppable" style={{
                            position: 'absolute',
                            borderColor: '#2196f3',
                            right: '1px',
                            margin: '0px'
                        }}>
                            Drop here
                        </div>
                    </Droppable>
                </div>
                <div style={{position: 'absolute', bottom: '1px'}}>
                    <Droppable drop={handleDrop} scope={'y'}>
                        <div className="droppable" style={{
                            borderColor: '#4caf50',
                            margin: '0'
                        }}>
                            Drop here
                        </div>
                    </Droppable>
                </div>
            </DragDrop>
        </div>
    );
}