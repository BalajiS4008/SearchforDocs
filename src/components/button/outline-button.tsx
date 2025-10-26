import { Button, Variant } from '@syncfusion/react-buttons';

export default function App() {
  return (
    <div className="component-section sf-align-center gap-10">
      <Button variant={Variant.Outlined} >Outlined Button</Button>
      <Button variant={Variant.Outlined} disabled>Disabled Button</Button>
      <Button  variant={Variant.Outlined} isLink>Link</Button>
    </div>
  );
};