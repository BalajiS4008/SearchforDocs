import { Toolbar, ToolbarItem, ToolbarSpacer } from '@syncfusion/react-navigations';
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
}