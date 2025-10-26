import { Button, Color, Position, Variant ,Size} from '@syncfusion/react-buttons';
import { SearchIcon, PrintIcon, ChevronDownIcon, CloseIcon } from "@syncfusion/react-icons"

export default function App() {
  return (
    <div className="component-section sf-align-center gap-10">
      <Button color={Color.Info} variant={Variant.Outlined} size={Size.Large} iconPosition={Position.Top} icon={<SearchIcon/>}>Browse</Button>
      <Button color={Color.Warning} variant={Variant.Standard} iconPosition={Position.Bottom} icon={<ChevronDownIcon/>}>Open</Button>
      <Button color={Color.Success} iconPosition={Position.Left} icon={<PrintIcon/>}>Print</Button>
      <Button color={Color.Error} iconPosition={Position.Right} icon={<CloseIcon/>}>Close</Button>
    </div>
  );
};