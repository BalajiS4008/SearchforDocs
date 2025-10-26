import { ItemModel, SplitButton } from '@syncfusion/react-splitbuttons';
import { PeopleIcon } from "@syncfusion/react-icons"

export default function App() {
    const items: ItemModel[] = [
        {
            text: 'Dashboard'
        },
        {
            text: 'Cut'
        },
        {
            text: 'User Settings'
        },
        {
            text: 'Save'
        }];
    return (
        <div className='splitbutton-section'>
            <SplitButton items={items} icon={<PeopleIcon />}></SplitButton>
            <SplitButton items={items} >User Settings</SplitButton>
            <SplitButton items={items} icon={<PeopleIcon />}>Profile</SplitButton>
        </div>
    );
}