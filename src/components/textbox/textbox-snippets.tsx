import { SnippetItem } from '../../common/snippet'

export const TextBoxNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-inputs' }
];

export const TextBoxImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { TextBox } from "@syncfusion/react-inputs";' }
];

export const TextBoxCode: SnippetItem[] = [
    { title: "App.tsx", code: `import { TextBox } from "@syncfusion/react-inputs";
import './App.css';

export default function App() {
    return (
        <div className="component-section">
            <TextBox placeholder="Enter your name" width="15.625em" labelMode="Auto"/>
        </div>
    );
};` }
];

export const TextBoxStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-inputs/styles/material3.css';` }
];
