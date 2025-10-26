import { SnippetItem } from '../../common/snippet'

export const toolbarNpm: SnippetItem[] = [
  { title: "NPM", code: 'npm install @syncfusion/react-navigations' }
];

export const toolbarImport: SnippetItem[] = [
  { title: "App.tsx", code: 'import { Toolbar } from "@syncfusion/react-navigations";' }
];

export const toolbarStyles: SnippetItem[] = [
  {
    title: "App.css",
    code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/react-popups/styles/material3.css';
@import '../node_modules/@syncfusion/react-navigations/styles/material3.css';`
  }
];

export const toolbarComponent: SnippetItem[] = [
  {
    title: "App.tsx",
    code: `import { Toolbar, ToolbarItem, ToolbarSpacer } from '@syncfusion/react-navigations';
import { Button, Color, Variant } from '@syncfusion/react-buttons';
import { MenuIcon } from '@syncfusion/react-icons';
import './App.css';

export default function App() {
  return (
    <div className="component-section toolbar-demo-container">
      <Toolbar aria-label="Navigation header">
        <ToolbarItem>
          <Button variant={Variant.Standard} icon={<MenuIcon />} />
        </ToolbarItem>
        <ToolbarSpacer />
        <ToolbarItem>
          <Button variant={Variant.Standard}>Projects</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant={Variant.Standard}>Reports</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button title='Free Trial' color={Color.Primary} variant={Variant.Filled}>Free Trial</Button>
        </ToolbarItem>
      </Toolbar>
    </div>
  );
}`
  }
];
