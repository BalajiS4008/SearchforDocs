import { SnippetItem } from '../../common/snippet'

export const messageNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-notifications' }
];

export const messageStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-notifications/styles/material3.css';` }
];

export const messageImport: SnippetItem[] = [
    { title: "App.tsx", code: `import { Message } from '@syncfusion/react-notifications';` }
];

export const messageSnippet: SnippetItem[] = [
    { title: "App.tsx", code: `import { Message, Severity } from '@syncfusion/react-notifications';
import './App.css';

export default function App() {
    return (
    <div className="component-section">
        <Message severity={Severity.Success}>Your message has been sent successfully</Message>
    </div>
    );
}` }
];
