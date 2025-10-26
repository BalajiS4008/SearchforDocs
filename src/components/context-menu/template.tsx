import { ContextMenu, MenuItem, MenuItemProps } from '@syncfusion/react-navigations';
import { useRef, useState } from 'react';
import { ChevronRightIcon, TrashIcon, CircleInfoIcon, SendIcon, FolderOpenIcon } from '@syncfusion/react-icons';
import './App.css';

export default function App() {
    const [open, setOpen] = useState(false);
    const fileManagerRef = useRef<HTMLDivElement>(null);

    const onOpen = (e: Event) => {
        if (e.target instanceof HTMLElement && e.target.closest('.file-item')) {
            setOpen(true);
        }
    };

    const itemTemplate = (item: MenuItemProps) => {
        let IconComponent = FolderOpenIcon;
        switch (item.text) {
            case 'Share':
                IconComponent = SendIcon;
                break;
            case 'Delete':
                IconComponent = TrashIcon;
                break;
            case 'Properties':
                IconComponent = CircleInfoIcon;
                break;
            default:
                IconComponent = FolderOpenIcon;
        }

        return (
            <>
                <span className='context-menu-template-icon' role="img" aria-label={item.text?.toLowerCase()}> <IconComponent /> </span>
                {item.text}
            </>
        );
    };

    return (
        <div className="component-section">
            <div ref={fileManagerRef} className="file-manager" tabIndex={0}>
                <div className="file-section-title">
                    This PC <ChevronRightIcon className='breadcrumb-icon' height={14} width={14} /> My Documents <ChevronRightIcon className='breadcrumb-icon' height={14} width={14} />
                </div>
                <div className="file-item">
                    <span className="file-icon">📄</span>
                    <span className="file-name">Report.pdf</span>
                </div>
                <div className="file-item">
                    <span className="file-icon">📁</span>
                    <span className="file-name">Project Files</span>
                </div>
                <div className="file-item">
                    <span className="file-icon">📊</span>
                    <span className="file-name">Analytics.xlsx</span>
                </div>
            </div>

            <ContextMenu itemTemplate={itemTemplate} open={open} onClose={() => setOpen(false)} onOpen={onOpen} onSelect={() => setOpen(false)} targetRef={fileManagerRef as React.RefObject<HTMLElement>} className="context-menu-template" >
                <MenuItem>
                    <span className='context-menu-template-icon' role="img" aria-label="open"><FolderOpenIcon/></span> <>Open</>
                </MenuItem>
                <MenuItem text='Share' />
                <MenuItem text='Delete' />
                <MenuItem text='Properties' />
            </ContextMenu>
        </div>
    );
};