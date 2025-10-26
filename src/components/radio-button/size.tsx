import { RadioButton, Size } from '@syncfusion/react-buttons';

export default function App() {
    return (
        <div className="component-section flex-column gap-20">
            <RadioButton name='size' value='Small' labelPlacement='Before' defaultChecked size={Size.Small} label='Small'></RadioButton>
            <RadioButton name='size' value='Medium' labelPlacement='Before' size={Size.Medium} label='Medium'></RadioButton>
            <RadioButton name='size' value='Large' labelPlacement='Before' size={Size.Large} label='Large'></RadioButton>
        </div>
    );
}