import { Tooltip } from '@syncfusion/react-popups';
import { Button, Color, Variant } from '@syncfusion/react-buttons';
import './position.css';

export default function App() {
    return (
        <div className="component-section positioned" id="positioned-tooltip">
            <div className="tooltip-grid">
                <div className="tooltip-row">
                    <Tooltip content={<>Preview</>} position="TopLeft">
                        <Button variant={Variant.Standard} color={Color.Secondary}>Top Left</Button>
                    </Tooltip>
                    <Tooltip content={<>Preview</>} position="TopCenter">
                        <Button variant={Variant.Standard} color={Color.Secondary} >Top Center</Button>
                    </Tooltip>
                    <Tooltip content={<>Preview</>} position="TopRight">
                        <Button variant={Variant.Standard} color={Color.Secondary} >Top Right</Button>
                    </Tooltip>
                </div>
                <div className="tooltip-row mid-row">
                    <div className="left-col">
                        <Tooltip content={<>Preview</>} position="LeftTop">
                            <Button variant={Variant.Standard} color={Color.Secondary} >Left Top</Button>
                        </Tooltip>
                        <Tooltip content={<>Preview</>} position="LeftCenter">
                            <Button variant={Variant.Standard} color={Color.Secondary} >Left Center</Button>
                        </Tooltip>
                        <Tooltip content={<>Preview</>} position="LeftBottom">
                            <Button variant={Variant.Standard} color={Color.Secondary} >Left Bottom</Button>
                        </Tooltip>
                    </div>
                    <div className="right-col">
                        <Tooltip content={<>Preview</>} position="RightTop">
                            <Button variant={Variant.Standard} color={Color.Secondary} >Right Top</Button>
                        </Tooltip>
                        <Tooltip content={<>Preview</>} position="RightCenter">
                            <Button variant={Variant.Standard} color={Color.Secondary} >Right Center</Button>
                        </Tooltip>
                        <Tooltip content={<>Preview</>} position="RightBottom">
                            <Button variant={Variant.Standard} color={Color.Secondary} >Right Bottom</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="tooltip-row">
                    <Tooltip content={<>Preview</>} position="BottomLeft">
                        <Button variant={Variant.Standard} color={Color.Secondary} >Bottom Left</Button>
                    </Tooltip>
                    <Tooltip content={<>Preview</>} position="BottomCenter">
                        <Button variant={Variant.Standard} color={Color.Secondary} >Bottom Center</Button>
                    </Tooltip>
                    <Tooltip content={<>Preview</>} position="BottomRight">
                        <Button variant={Variant.Standard} color={Color.Secondary} >Bottom Right</Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}
