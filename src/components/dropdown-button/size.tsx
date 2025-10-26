import { ItemModel, DropDownButton, Size } from '@syncfusion/react-splitbuttons';

export default function App() {
    const items: ItemModel[] = [
        {
            text: 'Dashboard',
        },
        {
            text: 'Cut',
        },
        {
            text: 'User Settings',
        },
        {
            text: 'Save'
        }];
    return (
        <div className='dropdown-center'>
            <DropDownButton items={items} size={Size.Small} >Small</DropDownButton>
            <DropDownButton items={items} size={Size.Medium}>Medium</DropDownButton>
            <DropDownButton items={items} size={Size.Large}>Large</DropDownButton>
        </div>
    );
}