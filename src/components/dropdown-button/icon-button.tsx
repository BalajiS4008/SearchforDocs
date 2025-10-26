import { ItemModel, DropDownButton } from '@syncfusion/react-splitbuttons';
import { SettingsIcon, PeopleIcon } from "@syncfusion/react-icons"

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
            <DropDownButton items={items} icon={<SettingsIcon/>}></DropDownButton>
            <DropDownButton items={items} >User Settings</DropDownButton>
            <DropDownButton items={items} icon={<PeopleIcon/>}>Profile</DropDownButton>
            <DropDownButton items={items} className='sf-caret-hide'>Profile</DropDownButton>
        </div>
    );
}