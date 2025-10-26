import { SnippetItem } from '../../common/snippet'

export const datePickerNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-calendars' }
];

export const datePickerImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { DatePicker } from "@syncfusion/react-calendars";' }
];

export const datePickerStyles: SnippetItem[] = [
    {
        title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-calendars/styles/material3.css';` }
];

export const datePickerDependency: SnippetItem[] = [
    {
        title: "Packages", code: `|-- @syncfusion/react-calendars
   |-- @syncfusion/react-base` }
];

export const datePickerSnippet: SnippetItem[] = [
    {
        title: "App.tsx", code: `
import { DatePicker } from '@syncfusion/react-calendars';

export default function App() {
    return (
       <div className="component-section">
         <DatePicker />
        </div>
    );
};` }
];