import { ITooltip, Tooltip } from '@syncfusion/react-popups';
import { Button } from '@syncfusion/react-buttons';
import { useEffect, useRef } from 'react';
import './App.css';

export default function App() {
    const tooltipState = useRef<{ tooltipRef: ITooltip | null; isClosed: boolean; }>({ tooltipRef: null, isClosed: true });

    useEffect(() => {
        const scrollElement = document.querySelector('.main-content');
        const handleScroll = () => {
            if (tooltipState.current.tooltipRef && !tooltipState.current.isClosed) {
                tooltipState.current.tooltipRef.closeTooltip();
                tooltipState.current.isClosed = true;
            }
        };
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="component-section tooltip-section">
            <Tooltip ref={(el) => { tooltipState.current.tooltipRef = el; }} content={<>Let's go green to save the planet!!</>} sticky={true} onOpen={() => { tooltipState.current.isClosed = false; }} onClose={() => { tooltipState.current.isClosed = true; }} >
                <Button>Show Tooltip</Button>
            </Tooltip>
        </div>
    );
}
