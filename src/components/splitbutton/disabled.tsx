import { SplitButton } from '@syncfusion/react-splitbuttons';

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
      <SplitButton items={items} disabled>Disabled</SplitButton>
      <SplitButton items={items} >Enabled</SplitButton>
    </div>
  );
}