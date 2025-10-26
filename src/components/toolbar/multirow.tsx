import { Toolbar, ToolbarItem, ToolbarSeparator, OverflowMode } from '@syncfusion/react-navigations';
import { Button, Variant, Color } from '@syncfusion/react-buttons';
import { CutIcon, CopyIcon, PasteIcon, BoldIcon, ItalicIcon, UnderlineIcon, AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from '@syncfusion/react-icons';
import './App.css';

export default function App() {
    return (
        <div className="component-section toolbar-demo-container">
            <Toolbar overflowMode={OverflowMode.MultiRow} aria-label="Text editor">
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<CutIcon />}>Cut</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<CopyIcon />}>Copy</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<PasteIcon />}>Paste</Button>
                </ToolbarItem>
                <ToolbarSeparator />
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<BoldIcon />}>Bold</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<ItalicIcon />}>Italic</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<UnderlineIcon />}>Underline</Button>
                </ToolbarItem>
                <ToolbarSeparator />
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<AlignLeftIcon />}>Left</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<AlignCenterIcon />}>Center</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<AlignRightIcon />}>Right</Button>
                </ToolbarItem>
            </Toolbar>
        </div>
    );
}