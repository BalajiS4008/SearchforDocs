import { Color, RadioButton } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
  return (
    <div className="component-section flex-column gap-20">
      <RadioButton name='customization' value={'Primary'} defaultChecked={true} color={Color.Primary} label='Primary' />
      <RadioButton name='customization' value='Success' color={Color.Success} label='Success' />
      <RadioButton name='customization' value='Info' color={Color.Info} label='Info' />
      <RadioButton name='customization' value='Warning' color={Color.Warning} label='Warning' />
      <RadioButton name='customization' value='Error' color={Color.Error} label='Error' />
    </div>
  );
}
