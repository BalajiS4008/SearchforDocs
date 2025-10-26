import { Toolbar, ToolbarItem, ToolbarSeparator } from '@syncfusion/react-navigations';
import { CutIcon, CopyIcon, PasteIcon, BoldIcon, ItalicIcon, UnderlineIcon, UndoIcon, RedoIcon, SaveIcon } from '@syncfusion/react-icons';
import { Button, Variant, Size, Color } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
  return (
    <div className="component-section toolbar-demo">
      <Toolbar aria-label="Text formatting">
        <ToolbarItem >
          <Button title="Undo" variant={Variant.Standard} color={Color.Secondary} icon={<UndoIcon />} size={Size.Large} />
        </ToolbarItem>
        <ToolbarItem>
          <Button title="Redo" variant={Variant.Standard} color={Color.Secondary} icon={<RedoIcon />} size={Size.Large} />
        </ToolbarItem>
        <ToolbarSeparator />
        <ToolbarItem>
          <Button title="Paste" variant={Variant.Standard} color={Color.Secondary} icon={<PasteIcon />} size={Size.Large} />
        </ToolbarItem>
        <ToolbarItem>
          <Button title="Cut" variant={Variant.Standard} color={Color.Secondary} icon={<CutIcon />} size={Size.Large} />
        </ToolbarItem>
        <ToolbarItem>
          <Button title="Copy" variant={Variant.Standard} color={Color.Secondary} icon={<CopyIcon />} size={Size.Large} />
        </ToolbarItem>
        <ToolbarSeparator />
        <ToolbarItem>
          <Button title="Underline" variant={Variant.Standard} color={Color.Secondary} icon={<UnderlineIcon />} size={Size.Large} />
        </ToolbarItem>
        <ToolbarItem>
          <Button title="Bold" variant={Variant.Standard} color={Color.Secondary} icon={<BoldIcon />} size={Size.Large} />
        </ToolbarItem>
        <ToolbarItem>
          <Button title="Italic" variant={Variant.Standard} color={Color.Secondary} icon={<ItalicIcon />} size={Size.Large} />
        </ToolbarItem>
        <ToolbarItem>
          <Button title="Save" variant={Variant.Standard} color={Color.Secondary} icon={<SaveIcon />} size={Size.Large} />
        </ToolbarItem>
      </Toolbar>
    </div>
  );
}