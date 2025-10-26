import { TextArea, Variant } from "@syncfusion/react-inputs";
import './App.css'

export default function App() {
    return (
        <div className='component-section'>
            <div className='textarea-heading'> Auto TextArea</div>
            <TextArea placeholder="Auto" labelMode='Auto' variant={Variant.Outlined} width={300} />
            <div className='textarea-heading'>Always TextArea</div>
            <TextArea placeholder="Always" labelMode='Always' variant={Variant.Filled} width={300} />
            <div className='textarea-heading'>Never TextArea</div>
            <TextArea placeholder="Never" labelMode='Never' width={300} />
        </div>
    );
}
