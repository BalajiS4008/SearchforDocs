import { SnippetItem } from '../../common/snippet'

export const chipListNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-buttons' }
];

export const chipListImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { ChipList } from "@syncfusion/react-buttons";' }
];

export const chipListStyles: SnippetItem[] = [
    {
        title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-buttons/styles/material3.css';` }
];

export const chipListDependency: SnippetItem[] = [
    {
        title: "Packages", code: `|-- @syncfusion/react-buttons
   |-- @syncfusion/react-base` }
];

export const chipListSnippet: SnippetItem[] = [
    {
        title: "App.tsx", code: `import { ChipList, ChipItemProps } from '@syncfusion/react-buttons';
import MargaretImage from '../chip/images/margaret.png';
import UserIcon from '../chip/user-icon';
import './App.css';

export default function App() {
    const users: ChipItemProps[] = [
        { text: 'Margaret', value: '1', leadingIconUrl: MargaretImage },
        { text: 'Michael', value: '2', leadingIcon: <UserIcon /> }
    ];

    return (
        <div className="component-section">
            <ChipList chips={users} aria-label='User display list'>
            </ChipList>
        </div>
    );
}` }
];