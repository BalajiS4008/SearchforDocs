import { Tooltip } from '@syncfusion/react-popups';
import { Button, Color } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
    const templateContent = () => {
        return (
            <div className="template-tooltip">
                <div className="user-info">
                    <img src={'/images/common/anne.png'} alt="Anne avatar" className="user-avatar" />
                    <div>Anne - Developer</div>
                </div>
            </div>
        );
    };

    return (
        <div className="component-section tooltip-section">
            <Tooltip position="BottomCenter" content={templateContent()} className="template-tooltip" >
                <Button color={Color.Info}>Anne</Button>
            </Tooltip>
        </div>
    );
}
