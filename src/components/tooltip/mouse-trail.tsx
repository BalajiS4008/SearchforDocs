import React, { useState, useRef, useEffect } from 'react';
import { Tooltip } from '@syncfusion/react-popups';
import './mouse-trail.css';

export default function App() {
    const [pixelInfo, setPixelInfo] = useState({ x: 0, y: 0, color: '#3498db'});
    const imageRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        if (isImageLoaded && imageRef.current && canvasRef.current && containerRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const imgWidth = imageRef.current.naturalWidth;
                const imgHeight = imageRef.current.naturalHeight;
                canvas.width = imgWidth;
                canvas.height = imgHeight;
                ctx.drawImage(imageRef.current, 0, 0, imgWidth, imgHeight);
            }
        }
    }, [isImageLoaded]);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const x = Math.floor((e.clientX - rect.left) * scaleX);
        const y = Math.floor((e.clientY - rect.top) * scaleY);
        const ctx = canvas.getContext('2d');
        if (ctx) {
            try {
                const pixelData = ctx.getImageData(x, y, 1, 1).data;
                const r = pixelData[0];
                const g = pixelData[1];
                const b = pixelData[2];
                const color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
                setPixelInfo({
                    x,
                    y,
                    color
                });
            } catch (error) {
                console.error('Error getting pixel data:', error);
            }
        }
    };

    return (
        <div className="component-section image-editor-container">
            <div className="editor-header">
                <div className="editor-title">Image Pixel Inspector</div>
            </div>
            <div className="image-container" ref={containerRef}>
                <img
                    ref={imageRef}
                    src={'/images/tooltip/mountain.png'}
                    onLoad={handleImageLoad}
                    style={{ display: 'none' }}
                    alt="Mountain"
                />
                <Tooltip
                    content={
                        <div className="pixel-tooltip">
                            <div className="color-preview" style={{ backgroundColor: pixelInfo.color }}></div>
                            <div className="pixel-info">
                                <div className="pixel-coord">
                                    <div>X: {pixelInfo.x}</div>
                                    <div>Y: {pixelInfo.y}</div>
                                </div>
                                <div className="pixel-color">Color: {pixelInfo.color}</div>
                            </div>
                        </div>
                    }
                    followCursor={true}
                    arrow={false}
                    offsetY={-10}
                    
                >
                    <canvas
                        ref={canvasRef}
                        onMouseMove={handleMouseMove}
                        className="image-canvas"
                    />
                </Tooltip>
            </div>
            <div className="current-pixel">
                <div className="color-swatch" style={{ backgroundColor: pixelInfo.color }}></div>
                <div className="pixel-details">
                    <div>Position: ({pixelInfo.x}, {pixelInfo.y})</div>
                    <div>Color: {pixelInfo.color}</div>
                </div>
            </div>
        </div>
    );
}