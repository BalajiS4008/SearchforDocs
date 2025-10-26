import React, { useState, useRef, useEffect } from 'react';
import { Draggable, DragEvent, HelperEvent } from '@syncfusion/react-base';
import { DragAndDropIcon } from '@syncfusion/react-icons';
import './drag.css';

export default function App() {
  const [listItems, setListItems] = useState<string[]>(['Andrew', 'Bella', 'Charlie', 'Diana', 'Ethan', 'Hannah']);
  const draggedItemIndex = useRef<number | null>(null);
  const [showClone, setShowClone] = useState(false);
  const cloneHelperRef = useRef<HTMLElement | null>(null);
  const currentItemsRef = useRef<string[]>(listItems);

  useEffect(() => {
    currentItemsRef.current = listItems;
  }, [listItems]);

  const isValidTarget = (element: HTMLElement): boolean => {
    return element && element.classList.contains('list-item');
  };

  const helper = (args: HelperEvent) => {
    const listItem = (args.sender?.target as HTMLElement).closest('.list-item') as HTMLElement;
    if (!listItem || !isValidTarget(listItem)) {
      return null;
    }
    const index = parseInt(listItem.getAttribute('data-index') || '0', 10);
    draggedItemIndex.current = index;
    setShowClone(true);
    return cloneHelperRef.current;
  };

  const dragStart = () => {
    if (cloneHelperRef.current) {
      cloneHelperRef.current.style.display = 'flex';
    }
  };

  const drag = () => {
    if (cloneHelperRef.current) {
      cloneHelperRef.current.style.opacity = '0.9';
    }
  };

  const dragStop = (args: DragEvent) => {
    setShowClone(false);
    if (draggedItemIndex.current === null) return;
    const targetElement = args.target?.closest('.list-item');
    if (targetElement) {
      const targetIndex = parseInt(targetElement.getAttribute('data-index') || '0', 10);
      if (targetIndex !== -1 && targetIndex !== draggedItemIndex.current) {
        const newItems = [...currentItemsRef.current];
        const draggedItem = newItems[draggedItemIndex.current];
        newItems.splice(draggedItemIndex.current, 1);
        newItems.splice(targetIndex, 0, draggedItem);
        setListItems(newItems);
      }
    }
    draggedItemIndex.current = null;
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden'  }}>
      <div className="list-container draggable-demo">
        <Draggable
          clone={true}
          enableTailMode={true}
          isPreventSelect={true}
          helper={helper}
          dragStart={dragStart}
          dragStop={dragStop}
          drag={drag}
        >
          <ul className="draggable-list">
            {(
              listItems.map((item, index) => (
                <li key={`item-${index}`} className="list-item" data-index={index}>
                  <span className="handle">
                    <DragAndDropIcon width={22} height={22}/>
                  </span>
                  <div className="item-content">{item}</div>
                </li>
              ))
            )}
          </ul>
        </Draggable>
      </div>
      {showClone && (
        <div
          ref={cloneHelperRef as React.RefObject<HTMLDivElement>}
          className="list-item-clone"
          style={{
            opacity: '0',
            padding: '5px',
            zIndex: '1000',
            justifyContent: 'center',
            textAlign: 'center',
            height: '36px',
            width: '100px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            pointerEvents: 'none',
            display: 'none',
          }}
        >
          <span className="handle">
            <DragAndDropIcon width={17} height={17}/>
          </span>
          <div className="item-content">
            {draggedItemIndex.current !== null && currentItemsRef.current[draggedItemIndex.current]}
          </div>
        </div>
      )}
    </div>
  );
};