import { Tooltip } from '@syncfusion/react-popups';
import { useState } from 'react';
import './App.css';

export default function App() {
    const [content, setContent] = useState<string>('');

    const filterHighlightedElements = (element: HTMLElement) => {
        if (element.classList.contains('highlight-tooltip')) {
            setContent(element.getAttribute('data-info')!)
            return true;
        }
        return false;
    }

    return (
        <div className="component-section">
            <Tooltip
                onFilterTarget={filterHighlightedElements}
                arrow={true} content={<>{content}</>}>
                <div className="multiple-targets-demo">
                    <ul className="feature-list">
                        <li className="feature-item">
                            <div className="feature-icon">🔄</div>
                            <div className="feature-content">
                                <span className="highlight-tooltip" tabIndex={0} data-info="Automatically saves your work every 30 seconds">Auto-save</span>
                                <span className="feature-description">prevents loss of work during unexpected shutdowns</span>
                            </div>
                        </li>
                        <li className="feature-item">
                            <div className="feature-icon">👥</div>
                            <div className="feature-content">
                                <span className="highlight-tooltip" tabIndex={0} data-info="Enables team members to work on the same document simultaneously">Real-time collaboration</span>
                                <span className="feature-description">improves team productivity</span>
                            </div>
                        </li>
                        <li className="feature-item">
                            <div className="feature-icon">☁️</div>
                            <div className="feature-content">
                                <span className="highlight-tooltip" tabIndex={0} data-info="Securely store files with AES-256 encryption">Cloud storage</span>
                                <span className="feature-description">keeps your documents accessible from anywhere</span>
                            </div>
                        </li>
                        <li className="feature-item">
                            <div className="feature-icon">🤖</div>
                            <div className="feature-content">
                                <span className="highlight-tooltip" tabIndex={0} data-info="Get assistance with AI-powered suggestions">Smart assistant</span>
                                <span className="feature-description">helps you create better content faster</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </Tooltip>
        </div>
    );
}