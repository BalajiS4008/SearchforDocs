import { Button, Color, Variant } from '@syncfusion/react-buttons';

export default function App() {
  return (
      <div className="component-section sf-align-center gap-10">
        <Button color={Color.Warning} variant={Variant.Standard}>Warning</Button>
        <Button variant={Variant.Outlined} color={Color.Error}>Error</Button>
        <Button color={Color.Info}>Info</Button>
        <Button color={Color.Success}>Success</Button>
        <Button color={Color.Secondary}>Secondary</Button>
      </div>
  );
};