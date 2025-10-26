import { SnippetItem } from '../../common/snippet'

export const dropdownNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-splitbuttons' }
];

export const dropdownImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { DropDownButton } from "@syncfusion/react-splitbuttons";' }
];

export const dropdownCss: SnippetItem[] = [
    { title: "App.tsx", code: `<div className="e-splitbutton">
    <div className="e-splitbutton-content">..content..</div>
</div>` }
];

export const dropdownCssComponent: SnippetItem[] = [
    { title: "App.tsx", code: `<div className="e-message">
    <span className="e-splitbutton-icon"></span>
    <div className="e-splitbutton-content">..content..</div>
</div>` }
];

export const dropdownStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/react-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/react-popups/styles/material3.css';` }
];

export const dropdownSnippet: SnippetItem[] = [
    { title: "App.tsx", code: `import { Variant } from '@syncfusion/react-buttons';
import { DropDownButton } from '@syncfusion/react-splitbuttons';
import { UserIcon, EditIcon, FlagsIcon, TrashIcon, FilterIcon } from '@syncfusion/react-icons';
import './App.css';

export default function App() {
    const items = [
    { text: 'Edit', icon: <EditIcon width={16} height={16} />, },
    { text: 'Flagged', icon: <FlagsIcon width={16} height={16} />, },
    { text: 'Remove', icon: <TrashIcon width={16} height={16} />, },
    { text: 'More filters', icon: <FilterIcon width={16} height={16} />, },
    { text: 'Log Out', icon: <UserIcon width={16} height={16} />, }
    ];
    return (
    <div className='dropdown-center' >
        <DropDownButton items={items} >Default</DropDownButton>
        <DropDownButton items={items} variant={Variant.Outlined} >Outline</DropDownButton>
        <DropDownButton items={items} variant={Variant.Flat} >Flat</DropDownButton>
    </div>
    );
}` }
];