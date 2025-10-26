import { SnippetItem } from '../../common/snippet'

export const chipNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-buttons' }
];

export const chipImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { Chip } from "@syncfusion/react-buttons";' }
];

export const chipStyles: SnippetItem[] = [
    {
        title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-buttons/styles/material3.css';` }
];

export const chipDependency: SnippetItem[] = [
    {
        title: "Packages", code: `|-- @syncfusion/react-buttons
   |-- @syncfusion/react-base` }
];

export const chipSnippet: SnippetItem[] = [
    {
        title: "App.tsx", code: `import { Chip } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
    return (
        <div className="component-section">
            <Chip>Anne</Chip>
            <Chip>John</Chip>
            <Chip>Margaret</Chip>
        </div>
    );
}` }
];