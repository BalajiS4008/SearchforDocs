import { Checkbox, Color } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
    return (
        <div className="component-section sf-align-center gap-20">
            <Checkbox
                color={Color.Primary}
                defaultChecked={true}
                aria-label='Primary Checkbox'
            />
            <Checkbox
                color={Color.Success}
                defaultChecked={true}
                aria-label='Success Checkbox'
            />
            <Checkbox
                color={Color.Info}
                defaultChecked={true}
                aria-label='Info Checkbox'
            />
            <Checkbox
                color={Color.Warning}
                defaultChecked={true}
                aria-label='Warning Checkbox'
            />
            <Checkbox
                color={Color.Error}
                defaultChecked={true}
                aria-label='Error Checkbox'
            />
        </div>
    );
}
