import { Checkbox } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
    return (
        <div className="component-section sf-align-center gap-20">
            <Checkbox defaultChecked className='sf-custom e-gap' aria-label='Checkbox'/>
            <Checkbox className='sf-custom-frame e-gap' aria-label='Checkbox'/>
        </div>
    );
}