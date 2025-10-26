import { ItemModel, SplitButton, Size } from '@syncfusion/react-splitbuttons';

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
            <SplitButton items={items} size={Size.Small}>Small</SplitButton>
            <SplitButton items={items} size={Size.Medium}>Medium</SplitButton>
            <SplitButton items={items} size={Size.Large}>Large</SplitButton>
        </div>
    );
}