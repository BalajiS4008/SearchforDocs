import { Draggable, Droppable, DragDrop, DropEvent } from '@syncfusion/react-base';
import { Button, Variant } from '@syncfusion/react-buttons';
import { useState, useEffect } from 'react';
import './drag.css';

export default function App() {
    const [currentScope, setCurrentScope] = useState<'scope1' | 'scope2'>('scope1');
    const [key, setKey] = useState(0);
    const toggleScope = () => {
        setCurrentScope(prev => prev === 'scope1' ? 'scope2' : 'scope1');
    };
    useEffect(() => {
        setKey(prevKey => prevKey + 1);
    }, [currentScope]);
    const handleDrop = (args: DropEvent) => {
        const dragElement = args.droppedElement;
        if (dragElement) {
            dragElement.textContent = 'Dropped';
        }
    }

    return (
        <div className="droppable-demo" style={{ padding: '20px', position: 'relative' }}>
            <Button variant={Variant.Standard} onClick={toggleScope}>
                Switch scope
            </Button>
            <DragDrop key={key}>
                <div className="draggable-container" style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', gap: '20px' }}>
                    <div style={{ marginBottom: '20px', height: '20px', zIndex:'100' }}>
                        <Draggable clone={false} scope={currentScope}>
                            <div className="draggable" data-type="Item with scope">
                                Drag me
                            </div>
                        </Draggable>
                    </div>
                </div>
                <div className="droppable-container" style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
                    <Droppable scope="scope1" drop={handleDrop}>
                        <div className="droppable" style={{
                            borderColor: '#2196f3',
                        }}>
                            Drop here
                            {currentScope === 'scope1' && <span> - Active</span>}
                        </div>
                    </Droppable>

                    <Droppable scope="scope2" drop={handleDrop}>
                        <div className="droppable" style={{
                            borderColor: '#4caf50',
                        }}>
                            Drop here
                            {currentScope === 'scope2' && <span> - Active</span>}
                        </div>
                    </Droppable>
                </div>
            </DragDrop>
        </div>
    );
}