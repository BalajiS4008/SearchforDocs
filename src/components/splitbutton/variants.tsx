import { ItemModel, SplitButton, Variant } from '@syncfusion/react-splitbuttons';

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
            <SplitButton items={items} variant={Variant.Standard}>Standard</SplitButton>
            <SplitButton items={items} variant={Variant.Outlined}>Outlined</SplitButton>
            <SplitButton items={items} variant={Variant.Filled}>Filled</SplitButton>
        </div>
    );
}