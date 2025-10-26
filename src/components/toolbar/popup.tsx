import { Toolbar, ToolbarItem, ToolbarSeparator, OverflowMode } from '@syncfusion/react-navigations';
import { Button, Variant, Color } from '@syncfusion/react-buttons';
import { FolderOpenIcon, UndoIcon, RedoIcon, ZoomInIcon, ZoomOutIcon, ResetIcon } from '@syncfusion/react-icons';
import './App.css';

export default function App() {
    return (
        <div className="component-section popup-toolbar">
            <Toolbar overflowMode={OverflowMode.Popup} aria-label="Image editor">
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<FolderOpenIcon />}>Open</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<UndoIcon />}>Undo</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<RedoIcon />}>Redo</Button>
                </ToolbarItem>
                <ToolbarSeparator />
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<ZoomInIcon />}>Zoom In</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<ZoomOutIcon />}>Zoom Out</Button>
                </ToolbarItem>
                <ToolbarSeparator />
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<ResetIcon />}>Reset</Button>
                </ToolbarItem>
            </Toolbar>
        </div>
    );
}