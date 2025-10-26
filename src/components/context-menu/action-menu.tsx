import { ContextMenu, MenuItem, ContextMenuSelectEvent } from '@syncfusion/react-navigations';
import React, { useRef, useState } from 'react';
import { CheckTickIcon, CloseIcon, TrashIcon } from '@syncfusion/react-icons';
import './App.css';

export default function App() {
    const [items, setItems] = useState([
        { id: 1, name: 'Apples', completed: false },
        { id: 2, name: 'Milk', completed: false },
        { id: 3, name: 'Bread', completed: true }
    ]);

    const [selectedId, setSelectedId] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const listRef = useRef<HTMLUListElement>(null);

    const handleContextMenu = (e: Event) => {
        if ((e.target as HTMLElement).closest('li')) {
            setSelectedId(parseInt((e.target as HTMLElement).closest('li')?.dataset.id as string));
            setMenuOpen(true);
        }
    };

    const handleMenuSelect = (args: ContextMenuSelectEvent) => {
        if (!args.item?.text) return;
        if (args.item.text === 'Complete' || args.item.text === 'Incomplete') {
            setItems(items.map(item => item.id === selectedId ? { ...item, completed: args.item.text === 'Complete' } : item));
        } else if (args.item.text === 'Delete') {
            setItems(items.filter(item => item.id !== selectedId));
        }
        setMenuOpen(false)
    };

    return (
        <div className="component-section shopping-list">
            <div className='gallery-title shopping-title'>Shopping List</div>
            <ul ref={listRef}>
                {items.map(item => (
                    <li key={item.id} data-id={item.id} >
                        {item.name}
                        {item.completed && <span>✅</span>}
                    </li>
                ))}
                {items.length === 0 && <li className='no-record'> No Records Found </li>}
            </ul>

            <ContextMenu open={menuOpen} targetRef={listRef as React.RefObject<HTMLElement>} onOpen={handleContextMenu} onClose={() => setMenuOpen(false)} onSelect={handleMenuSelect} role='region' aria-label='Context Menu'>
                <MenuItem text="Complete" icon={<CheckTickIcon />} />
                <MenuItem text="Incomplete" icon={<CloseIcon />} />
                <MenuItem text="Delete" icon={<TrashIcon />} />
            </ContextMenu>
        </div>
    );
};