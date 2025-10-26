import { Message, Severity } from '@syncfusion/react-notifications';
import { CombinedCSSProperties, Typography } from '../../common/typography';

export default function App() {
    const inlineStyles: CombinedCSSProperties = {
    '--sf-color-info-container': 'var(--sf-color-primary)',
    '--sf-color-on-info-container': 'var(--sf-color-on-primary)',
    '--sf-color-info': 'var(--sf-color-on-primary)'
    };
    return (
        <Typography>
            <div
                className="component-section"
                style={{...inlineStyles}}
            >
                <Message severity={Severity.Info}>Please read the comments carefully</Message>
            </div>
        </Typography>
    );
}