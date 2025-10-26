import { SnippetItem } from '../../common/snippet'

export const contextMenuNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-navigations' }
];

export const contextMenuImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { ContextMenu } from "@syncfusion/react-navigations";' }
];

export const contextMenuStyles: SnippetItem[] = [
    {
        title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-navigations/styles/material3.css';` }
];

export const contextMenuDependency: SnippetItem[] = [
    {
        title: "Packages", code: `|-- @syncfusion/react-navigations
   |-- @syncfusion/react-base` }
];

export const contextMenuSnippet: SnippetItem[] = [
    {
        title: "App.tsx", code: `import { ContextMenu, MenuItem } from '@syncfusion/react-navigations';
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
};` }
];