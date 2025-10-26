import { SnippetItem } from '../../common/snippet'

export const TextAreaNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-inputs' }
];

export const TextAreaImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { TextArea } from "@syncfusion/react-inputs";' }
];

export const TextAreaStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-inputs/styles/material3.css';` }
];

export const textareaComponent: SnippetItem[] = [
    { title: "App.tsx", code: `<div className="textarea">
        <TextArea value="Textarea" />
</div>` }
];

export const textareaImport: SnippetItem[] = [
    { title: "App.tsx", code: `import { TextArea } from '@syncfusion/react-inputs';` }
];

export const textAreaSnippet: SnippetItem[] = [
    { title: "App.tsx", code: `import { TextArea } from '@syncfusion/react-inputs';
import './App.css';

export default function App() {

    return (
        <div className="component-section">
            <div>About me</div>
            <TextArea defaultValue={'Tell us a little bit about yourself...'} width={300} />
        </div>
    );
};` }
];