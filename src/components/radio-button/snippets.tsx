import { SnippetItem } from '../../common/snippet'

export const radiobuttonNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-buttons' }
];

export const radiobuttonImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { RadioButton } from "@syncfusion/react-buttons";' }
];

export const radiobuttonCss: SnippetItem[] = [
    { title: "App.tsx", code: `<div className="e-radiobtn">
    <div className="e-button-content">..content..</div>
</div>` }
];

export const radiobuttonComponent: SnippetItem[] = [
    { title: "App.tsx", code: `import { RadioButton } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
    return (
    <div className="component-section" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <RadioButton name='theme' value='light' defaultChecked={true} label='Light Mode' />
        <RadioButton name='theme' value='dark' label='Dark Mode' />
        <RadioButton name='theme' value='system' disabled={false} label='System Default' />
    </div>
    );
}` }
];

export const radiobuttonStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-buttons/styles/material3.css';` }
];