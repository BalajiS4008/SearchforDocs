import { ContextMenu, MenuItemProps } from '@syncfusion/react-navigations';
import { useRef, useState } from 'react';
import './App.css';

export default function App() {
    const targetRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    const images = [
        { id: 1, src: "/images/context-menu/anne.png", title: "Anne" },
        { id: 2, src: "/images/context-menu/michael.png", title: "Michael" },
        { id: 3, src: "/images/context-menu/smith.png", title: "Smith" },
        { id: 4, src: "/images/context-menu/janet.png", title: "Janet" },
        { id: 5, src: "/images/context-menu/mary.png", title: "Mary" },
        { id: 6, src: "/images/context-menu/robert.png", title: "Robert" }
    ];

    const menuItems: MenuItemProps[] = [
        { text: 'View Full Size' },
        { text: 'Download' },
        { text: 'Share' },
        { separator: true },
        { text: 'Edit' },
        { text: 'Add to Favorites' },
        {
            text: 'Add Tags',
            items: [
                { text: 'Nature' },
                { text: 'Portrait' },
                { text: 'Architecture' },
                { text: 'Travel' },
                { text: 'Food' },
                { text: 'Animals' },
                { text: 'Sports' },
                { text: 'Abstract' },
                { text: 'Monochrome' },
                { text: 'Urban' }
            ]
        },
        { separator: true },
        { text: 'Information' },
        { text: 'Delete', htmlAttributes: { style: { color: 'red' } } }
    ];

    return (
        <div className="component-section">
            <div className="gallery-title">Image Gallery</div>
            <div ref={targetRef} className="image-gallery">
                <div className="gallery-container">
                    {images.map(image => (
                        <div key={image.id} className="gallery-item" >
                            <img src={image.src} alt={image.title} />
                        </div>
                    ))}
                </div>
            </div>

            <ContextMenu open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} targetRef={targetRef as React.RefObject<HTMLElement>} onSelect={() => setOpen(false)} items={menuItems} className="scrollable-menu" role='region' aria-label='Context Menu' />
        </div>
    );
};