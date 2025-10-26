import { SnippetItem } from '../../common/snippet'

export const calendarNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-calendars' }
];

export const calendarImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { Calendar } from "@syncfusion/react-calendars";' }
];

export const calendarStyles: SnippetItem[] = [
    {
        title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-calendars/styles/material3.css';` }
];

export const calendarSnippet: SnippetItem[] = [
    {
        title: "App.tsx", code: `import { Calendar } from '@syncfusion/react-calendars';
import './App.css';

export default function App() {
    return (
        <div className="component-section">
            <Calendar />
        </div>
    );
};` }
];