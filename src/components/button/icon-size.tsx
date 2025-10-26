import { Button, Size, Variant } from '@syncfusion/react-buttons';
import { ImageIcon } from "@syncfusion/react-icons"

export default function App() {
  return (
    <>
      <div className="component-section sf-align-center gap-10">
        <Button variant={Variant.Standard} size={Size.Small} icon={<ImageIcon/>} aria-label={"Small Button"}></Button>
        <Button variant={Variant.Standard} icon={<ImageIcon/>} aria-label={"Default Button"}></Button>
        <Button variant={Variant.Standard} size={Size.Large} icon={<ImageIcon/>} aria-label={"Large Button"}></Button>
      </div>
    </>
  );
};