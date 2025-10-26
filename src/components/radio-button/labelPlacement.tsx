import { RadioButton } from '@syncfusion/react-buttons';

export default function App() {
    return (
        <div className="component-section flex-column gap-20">
            <RadioButton name='subscription' value='monthly' labelPlacement='Before' label='JavaScript'></RadioButton>
            <RadioButton name='subscription' value='quarterly' labelPlacement='Before' label='TypeScript'></RadioButton>
        </div>
    );
}