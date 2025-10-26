import { ITooltip, Tooltip } from '@syncfusion/react-popups';
import { Button, Color } from '@syncfusion/react-buttons';
import { useEffect, useRef } from 'react';
import './App.css';

export default function App() {
    const tooltipRefs = useRef<{ focusRef: ITooltip | null; clickRef: ITooltip | null; isFocusClosed: boolean; isClickClosed: boolean; }>({ focusRef: null, clickRef: null, isFocusClosed: true, isClickClosed: true });

    useEffect(() => {
        const scrollElement = document.querySelector('.main-content');
        const handleScroll = () => {
            if (tooltipRefs.current.focusRef && !tooltipRefs.current.isFocusClosed) {
                tooltipRefs.current.focusRef.closeTooltip();
                tooltipRefs.current.isFocusClosed = true;
            }
            if (tooltipRefs.current.clickRef && !tooltipRefs.current.isClickClosed) {
                tooltipRefs.current.clickRef.closeTooltip();
                tooltipRefs.current.isClickClosed = true;
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
            <Tooltip content={<>Preview</>} >
                <Button color={Color.Success} >Auto</Button>
            </Tooltip>
            <Tooltip ref={(el) => { tooltipRefs.current.focusRef = el; }} content={<>Preview</>} opensOn="Focus" onOpen={() => { tooltipRefs.current.isFocusClosed = false; }} onClose={() => { tooltipRefs.current.isFocusClosed = true; }} >
                <Button color={Color.Error} >FOCUS</Button>
            </Tooltip>
            <Tooltip content={<>Preview</>} opensOn="Hover">
                <Button color={Color.Warning} >HOVER</Button>
            </Tooltip>
            <Tooltip ref={(el) => { tooltipRefs.current.clickRef = el }} content={<>Preview</>} opensOn="Click" onOpen={() => { tooltipRefs.current.isClickClosed = false; }} onClose={() => { tooltipRefs.current.isClickClosed = true; }} >
                <Button color={Color.Info} >CLICK</Button>
            </Tooltip>
        </div>
    );
}
