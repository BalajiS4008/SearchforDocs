import { SnippetItem } from '../../common/snippet'

export const buttonNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-buttons' }
];

export const buttonImport: SnippetItem[] = [
    { title: "App.tsx", code: `import { Button } from "@syncfusion/react-buttons";` }
];

export const buttonCss: SnippetItem[] = [
    { title: "App.tsx", code: `<div className="e-button">
    <div className="e-button-content">..content..</div>
</div>` }
];

export const buttonCssComponent: SnippetItem[] = [
    { title: "App.tsx", code: `import { Button } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
  return (
    <div className="component-section">
      <Button>Default Button</Button>     
    </div>
  );
};` }
];

export const buttonStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-buttons/styles/material3.css';` }
];
