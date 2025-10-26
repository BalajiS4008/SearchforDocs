import { Button, Color, Variant } from '@syncfusion/react-buttons';
import { CopyIcon, CutIcon, SaveIcon } from "@syncfusion/react-icons"

export default function App() {
  return (
    <div className="component-section sf-align-center gap-10">
      <Button variant={Variant.Filled} color={Color.Error} icon={<CopyIcon/>} aria-label={"Copy Button"}></Button>
      <Button variant={Variant.Outlined} color={Color.Info} icon={<CutIcon/>} aria-label={"Cut Button"}></Button>
      <Button variant={Variant.Standard} color={Color.Success} icon={<SaveIcon/>} aria-label={"Save Button"}></Button>
    </div>
  );
};