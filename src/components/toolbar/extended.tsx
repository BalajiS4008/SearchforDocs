import { Toolbar, ToolbarItem, ToolbarSeparator, OverflowMode } from '@syncfusion/react-navigations';
import { Button, Variant, Color } from '@syncfusion/react-buttons';
import { FileNewIcon, FolderOpenIcon, CloseIcon, ExportIcon, ImportIcon, SettingsIcon, CommentShowIcon, DescriptionIcon } from '@syncfusion/react-icons';
import './App.css';

export default function App() {
    return (
        <div className="component-section extended-toolbar">
            <Toolbar overflowMode={OverflowMode.Extended} aria-label="Document editor">
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<FileNewIcon />}>New</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<FolderOpenIcon />}>Open</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<CloseIcon />}>Close</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<ExportIcon />}>Export</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<ImportIcon />}>Import</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<SettingsIcon />}>Settings</Button>
                </ToolbarItem>
                <ToolbarSeparator />
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<CommentShowIcon />}>Help</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<DescriptionIcon />}>Feedback</Button>
                </ToolbarItem>
            </Toolbar>
        </div>
    );
}