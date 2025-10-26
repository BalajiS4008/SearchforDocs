import { SnippetItem } from '../../common/snippet'

export const splitButtonNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-splitbuttons' }
];

export const splitButtonImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { SplitButton  } from "@syncfusion/react-splitbuttons";' }
];

export const splitButtonCss: SnippetItem[] = [
    { title: "App.tsx", code: `<div className="e-splitbutton">
    <div className="e-splitbutton-content">..content..</div>
</div>` }
];

export const splitButtonCssComponent: SnippetItem[] = [
    { title: "App.tsx", code: `<div className="e-message">
    <span className="e-splitbutton-icon"></span>
    <div className="e-splitbutton-content">..content..</div>
</div>` }
];

export const splitButtonStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/react-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/react-popups/styles/material3.css';` }
];

export const splitButtonSnippet: SnippetItem[] = [
    { title: "App.tsx", code: `import { Variant } from '@syncfusion/react-buttons';
import { SplitButton } from '@syncfusion/react-splitbuttons';
import './App.css';

export default function App() {
const items = [
    { text: 'My Profile' },
    { text: 'Friend Requests' },
    { text: 'Account Settings' },
    { text: 'Support' },
    { text: 'Log Out' }
    ];
return (
<div className='splitbutton-section'>
    <SplitButton items={items} >Default</SplitButton>
    <SplitButton items={items} variant={Variant.Outlined}>Outline</SplitButton>
    <SplitButton items={items} variant={Variant.Flat}>Flat</SplitButton>
</div>
);
}` }
];