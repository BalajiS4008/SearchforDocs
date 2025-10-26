import { Checkbox, Position } from '@syncfusion/react-buttons';

export default function App() {
    return (
        <div className="component-section">
            <Checkbox labelPlacement={Position.Left} defaultChecked label='Agree to terms and conditions' />
        </div>
    );
};
