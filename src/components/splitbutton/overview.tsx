import { SplitButton, Variant } from '@syncfusion/react-splitbuttons';
import './App.css';

export default function App() {
  const items = [
    { text: 'My Profile' },
    { text: 'Friend Requests' },
    { text: 'Account Settings' },
    { text: 'Support' },
    { text: 'Log Out' }
  ];
  return (
    <div className='splitbutton-section'>
      <SplitButton items={items} >Default</SplitButton>
      <SplitButton items={items} variant={Variant.Outlined}>Outline</SplitButton>
      <SplitButton items={items} variant={Variant.Standard}>Flat</SplitButton>
    </div>
  );
}