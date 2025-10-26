import { TextArea } from "@syncfusion/react-inputs";
import './App.css'

export default function App() {
    return (
        <div className='component-section'>
            <div>About me</div>
            <TextArea defaultValue="Tell us a little bit about yourself..." width={300} />
        </div>
    );
}
