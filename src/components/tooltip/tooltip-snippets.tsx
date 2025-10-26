import { SnippetItem } from '../../common/snippet'

export const tooltipNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-popups' }
];

export const tooltipImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { Tooltip } from "@syncfusion/react-popups";' }
];

export const tooltipStyles: SnippetItem[] = [
    {
        title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-popups/styles/material3.css';` }
];

export const tooltipDependency: SnippetItem[] = [
    {
        title: "Packages", code: `|-- @syncfusion/react-popups
   |-- @syncfusion/react-base` }
];

export const tooltipSnippet: SnippetItem[] = [
    {
        title: "App.tsx", code: `import { Tooltip } from '@syncfusion/react-popups';
import { UserIcon } from "@syncfusion/react-icons"
import { Button, Variant, Color, Size } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
    return (<div className="component-section tooltip-section">
        <Tooltip content={<>Profile</>} >
            <Button variant={Variant.Standard} color={Color.Secondary} icon={<UserIcon />} size={Size.Large}></Button>
        </Tooltip>
    </div>);
}` }
];