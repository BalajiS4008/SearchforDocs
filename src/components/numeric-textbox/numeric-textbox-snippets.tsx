import { SnippetItem } from '../../common/snippet'

export const numerictextboxNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-inputs' }
];

export const numerictextboxImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { NumericTextBox } from "@syncfusion/react-inputs";' }
];

export const numerictextboxCode: SnippetItem[] = [
    { title: "App.tsx", code: `import {  NumericTextBox } from "@syncfusion/react-inputs";
import './App.css';

export default function App() {
    return (
        <div className="component-section">
            <NumericTextBox
                placeholder="Enter value"
                width='15.625em'
                defaultValue={20}
            />
        </div>
    );
};` }
];

export const numerictextboxStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-inputs/styles/material3.css';` }
];
