import { SnippetItem } from '../../common/snippet'

export const fabNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-buttons' }
];

export const fabImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { Fab } from "@syncfusion/react-buttons";' }
];

export const fabCss: SnippetItem[] = [
    { title: "App.tsx", code: `<div className="e-fab">
    <div className="e-fab-content">..content..</div>
</div>` }
];

export const fabComponent: SnippetItem[] = [
    { title: "App.tsx", code: `import { Fab, FabPosition } from '@syncfusion/react-buttons';
import { SaveIcon } from '@syncfusion/react-icons';

export default function App() {
    return (
        <div style={{ position: 'relative', display: 'flex', minWidth: '50px', minHeight: '50px', justifyContent: 'center', }}>
            <Fab icon={<SaveIcon height={16} width={16}  />} position={FabPosition.MiddleCenter}>FAB</Fab>
        </div>

    );
}` }
];

export const fabStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-buttons/styles/material3.css';` }
];