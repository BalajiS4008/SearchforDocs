import { DropDownButton, Color, Variant } from '@syncfusion/react-splitbuttons';

export default function App() {
  const items = [
    {
      text: 'Unread'
    },
    {
      text: 'Flagged'
    },
    {
      text: 'Important'
    },
    {
      text: 'More filters'
    },
    {
      text: 'Log Out'
    }
  ];
  return (
    <div className='dropdown-center'>
      <DropDownButton items={items} variant={Variant.Standard} color={Color.Warning} >Warning</DropDownButton>
      <DropDownButton items={items} variant={Variant.Outlined} color={Color.Error} >Error</DropDownButton>
      <DropDownButton items={items} color={Color.Info} >Info</DropDownButton>
      <DropDownButton items={items} color={Color.Success} >Success</DropDownButton>
      <DropDownButton items={items} color={Color.Secondary}>Secondary</DropDownButton>
    </div>
  );
}