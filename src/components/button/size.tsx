import { Button, Size, Variant } from '@syncfusion/react-buttons';

export default function App() {
  return (
    <div className='component-section' style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
        <Button size={Size.Small} variant={Variant.Standard}>Small</Button>
        <Button variant={Variant.Standard}>Normal</Button>
        <Button size={Size.Large} variant={Variant.Standard}>Large</Button>
      </div>
      <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
        <Button size={Size.Small} variant={Variant.Outlined}>Small</Button>
        <Button variant={Variant.Outlined}>Normal</Button>
        <Button size={Size.Large} variant={Variant.Outlined}>Large</Button>
      </div>
      <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
        <Button size={Size.Small} variant={Variant.Filled}>Small</Button>
        <Button variant={Variant.Filled}>Normal</Button>
        <Button size={Size.Large} variant={Variant.Filled}>Large</Button>
      </div>
    </div>
  );
};