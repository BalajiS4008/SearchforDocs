import { Button, Variant } from '@syncfusion/react-buttons';

export default function App() {
  return (
    <div className="component-section sf-align-center gap-10">
      <Button variant={Variant.Standard}>Flat</Button> 
      <Button variant={Variant.Outlined}>Outlined</Button>
      <Button variant={Variant.Filled}>Filled</Button>     
    </div>
  );
};