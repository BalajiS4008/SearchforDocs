import { RadioButton } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
  return (
    <div className="component-section flex-column gap-20">
      <RadioButton name='theme' value='light' defaultChecked={true} label='Light Mode' />
      <RadioButton name='theme' value='dark' label='Dark Mode' />
      <RadioButton name='theme' value='system' disabled={false} label='System Default' />
    </div>
  );
}