import { TextArea, Variant } from '@syncfusion/react-inputs';
import './App.css';

export default function App() {
    return (
        <>
            <div className="component-section">
                <div className='textarea-heading'>Standard TextArea</div>
                <TextArea defaultValue="Tell us a little bit about yourself..." width={300} />
            </div>
            <div className="component-section">
                <div className='textarea-heading'>Filled TextArea</div>
                <TextArea defaultValue="Tell us a little bit about yourself..." variant={Variant.Filled} width={300} />
            </div>
            <div className="component-section">
                <div className='textarea-heading'>Outlined TextArea</div>
                <TextArea defaultValue="Tell us a little bit about yourself..." variant={Variant.Outlined} width={300} />
            </div>
        </>
    );
};