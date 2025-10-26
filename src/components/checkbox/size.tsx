import { Checkbox, Size } from '@syncfusion/react-buttons';

export default function App() {
    return (
        <div className="component-section sf-align-center gap-20">
            <Checkbox label='Small' defaultChecked size={Size.Small} />
            <Checkbox label='Medium' size={Size.Medium} />
            <Checkbox label='Large' size={Size.Large} />
        </div>
    );
}