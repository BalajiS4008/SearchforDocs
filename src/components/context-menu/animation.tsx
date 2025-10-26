import { ContextMenu, MenuItem } from '@syncfusion/react-navigations';
import {
    CopyIcon, CutIcon, PasteIcon, BoldIcon, ItalicIcon, UnderlineIcon, AlignLeftIcon, AlignCenterIcon,
    AlignRightIcon, ChartLinesIcon, Chart2dStackedColumnIcon, Chart2dPie2Icon, EditIcon, ParagraphIcon, LineSpacingIcon, IncreaseIndentIcon, DecreaseIndentIcon
} from '@syncfusion/react-icons';
import { useRef } from 'react';
import './App.css';

export default function App() {
    const fadeInRef = useRef<HTMLDivElement>(null);
    const zoomInRef = useRef<HTMLDivElement>(null);
    const slideDownRef = useRef<HTMLDivElement>(null);

    return (
        <div className="component-section">
            <div className="animation-demo-container">
                <div ref={fadeInRef} className="menu-demo-box" tabIndex={0} >FadeIn effect</div>
                <div ref={zoomInRef} className="menu-demo-box" tabIndex={0}>ZoomIn effect</div>
                <div ref={slideDownRef} className="menu-demo-box" tabIndex={0}>SlideDown effect</div>
            </div>

            <ContextMenu targetRef={fadeInRef as React.RefObject<HTMLElement>} animation={{ effect: 'FadeIn', duration: 1000, easing: 'ease' }} className="animation-menu" >
                <MenuItem text="Cut" icon={<CutIcon />} />
                <MenuItem text="Copy" icon={<CopyIcon />} />
                <MenuItem text="Paste" icon={<PasteIcon />} />
                <MenuItem separator />
                <MenuItem text="Format" icon={<EditIcon />} >
                    <MenuItem text="Bold" icon={<BoldIcon />} />
                    <MenuItem text="Italic" icon={<ItalicIcon />} />
                    <MenuItem text="Underline" icon={<UnderlineIcon />} />
                </MenuItem>
            </ContextMenu>

            <ContextMenu targetRef={zoomInRef as React.RefObject<HTMLElement>} animation={{ effect: 'ZoomIn', duration: 1000, easing: 'ease' }} className="animation-menu" >
                <MenuItem text="Left Align" icon={<AlignLeftIcon />} />
                <MenuItem text="Center" icon={<AlignCenterIcon />} />
                <MenuItem text="Right Align" icon={<AlignRightIcon />} />
                <MenuItem separator />
                <MenuItem text="Paragraph" icon={<ParagraphIcon />} >
                    <MenuItem text="Indent" icon={<IncreaseIndentIcon />} />
                    <MenuItem text="Outdent" icon={<DecreaseIndentIcon />} />
                    <MenuItem text="Line Spacing" icon={<LineSpacingIcon />} />
                </MenuItem>
            </ContextMenu>

            <ContextMenu targetRef={slideDownRef as React.RefObject<HTMLElement>} animation={{ effect: 'SlideDown', duration: 1000, easing: 'ease' }}
                className="animation-menu" >
                <MenuItem text="Line Chart" icon={<ChartLinesIcon />} />
                <MenuItem text="Column Chart" icon={<Chart2dStackedColumnIcon />} />
                <MenuItem text="Pie Chart" icon={<Chart2dPie2Icon />} />
            </ContextMenu>
        </div>
    );
};