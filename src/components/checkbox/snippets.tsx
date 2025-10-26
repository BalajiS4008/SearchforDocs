import { SnippetItem } from '../../common/snippet'

export const checkboxNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-buttons' }
];

export const checkboxImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { Checkbox } from "@syncfusion/react-buttons";' }
];

export const checkboxCss: SnippetItem[] = [
    { title: "App.tsx", code: `<div className="e-checkbox">
    <div className="e-checkbox-content">..content..</div>
</div>` }
];

export const checkboxComponent: SnippetItem[] = [
    { title: "App.tsx", code: `import { Checkbox } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
    return (
    <div className="component-section">
        <Checkbox label='Checkbox' defaultChecked/>
    </div>
    );
}` }
];

export const checkboxStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-buttons/styles/material3.css';` }
];