import { Variant } from '@syncfusion/react-buttons';
import { DropDownButton } from '@syncfusion/react-splitbuttons';
import { UserIcon, EditIcon, FlagsIcon, TrashIcon, FilterIcon } from '@syncfusion/react-icons';
import './App.css';

export default function App() {
  const items = [
    { text: 'Edit', icon: <EditIcon />, },
    { text: 'Flagged', icon: <FlagsIcon />, },
    { text: 'Remove', icon: <TrashIcon />, },
    { text: 'More filters', icon: <FilterIcon />, },
    { text: 'Log Out', icon: <UserIcon />, }
  ];
  return (
    <div className='dropdown-center'>
      <DropDownButton items={items} >Default</DropDownButton>
      <DropDownButton items={items} variant={Variant.Outlined} >Outline</DropDownButton>
      <DropDownButton items={items} variant={Variant.Standard} >Flat</DropDownButton>
    </div>
  );
}