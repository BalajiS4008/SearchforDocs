import { Button, Color, Variant } from '@syncfusion/react-buttons';

export default function App() {
  return ( 
    <div className="component-section sf-align-center gap-10">
      <Button variant={Variant.Standard} color={Color.Primary} >Flat Button</Button>
      <Button variant={Variant.Standard} disabled>Disabled Button</Button>
      <Button variant={Variant.Standard} isLink>Link</Button>
    </div>
  );
};