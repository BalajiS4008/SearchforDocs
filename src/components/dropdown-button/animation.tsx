import { DropDownButton } from '@syncfusion/react-splitbuttons';

export default function App() {
    const items = [
        { text: 'My Profile' },
        { text: 'Friend Requests' },
        { text: 'Account Settings' },
        { text: 'Support' },
        { text: 'Log Out' }
      ];
  return (
    <div className='dropdown-center'>
        <DropDownButton items={items} animation={{ show: { name: 'SlideDown', duration: 1000 }}}>SlideDown</DropDownButton>
        <DropDownButton items={items} animation={{show: { name: 'FadeIn', duration: 1000 }}} >FadeIn</DropDownButton>
        <DropDownButton items={items} animation={{show: { name: 'ZoomIn', duration: 1000 }}} >ZoomIn</DropDownButton>
    </div>
  );
}