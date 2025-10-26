import { Button, Variant } from '@syncfusion/react-buttons';

export default function App() {
  return (
    <div className="component-section sf-align-center gap-10">
      <Button variant={Variant.Filled} >Filled Button</Button>
      <Button variant={Variant.Filled}  disabled>Disabled Button</Button>
      <Button variant={Variant.Filled} isLink>Link</Button>
    </div>
  );
};