import { Checkbox } from '@syncfusion/react-buttons';

export default function App() {
    return (
        <div className="component-section sf-align-center gap-20">
            <Checkbox label='Label'/>
            <Checkbox disabled label='Disabled'/>
        </div>
    );
}