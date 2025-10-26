import { ContextMenu, MenuItem } from '@syncfusion/react-navigations';
import { useRef } from 'react';
import { CopyIcon, CutIcon, RenameIcon } from '@syncfusion/react-icons';
import './App.css';

export default function App() {
    const targetRef = useRef<HTMLImageElement>(null);
    return (
        <div className="component-section">
            <img ref={targetRef} src={'/images/tooltip/mountain.png'} alt="Mountain" className='context-menu-image' />
            <ContextMenu targetRef={targetRef as React.RefObject<HTMLElement>}>
                <MenuItem text="Cut" icon={<CutIcon />} />
                <MenuItem text="Copy" icon={<CopyIcon />} />
                <MenuItem text="Rename" icon={<RenameIcon />} />
            </ContextMenu>
        </div>
    );
};