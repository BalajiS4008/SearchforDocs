import { Checkbox } from '@syncfusion/react-buttons';

export default function App() {
  return (
    <div className="component-section sf-align-center gap-20">
      <Checkbox defaultChecked={true} label='Checked'/>
      <Checkbox disabled label='Disabled'></Checkbox>
      <Checkbox label='Unchecked'></Checkbox>
      <Checkbox indeterminate={true} label='Indeterminate'></Checkbox>
    </div>
  );
}