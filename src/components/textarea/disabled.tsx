import { ResizeMode, TextArea } from "@syncfusion/react-inputs";

export default function App() {
    return (
        <div className='component-section'>
            <TextArea
                disabled={true}
                placeholder={'Disabled textarea'}
                width={300}
                resizeMode={ResizeMode.None}
            />
        </div>
    );
}
