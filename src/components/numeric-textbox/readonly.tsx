import { NumericTextBox } from '@syncfusion/react-inputs';

export default function App() {
    return (
        <div className="component-section">
            <NumericTextBox defaultValue={10} width='15.625em' placeholder='Readonly' labelMode='Always' readOnly={true} />
        </div>
    );
};