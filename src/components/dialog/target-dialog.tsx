import { Dialog } from '@syncfusion/react-popups';
import { Button, Variant } from '@syncfusion/react-buttons';
import { ResizeMode, TextArea, TextAreaChangeEvent } from '@syncfusion/react-inputs';
import { useState, useRef } from 'react';
import { EditIcon } from '@syncfusion/react-icons';
import './App.css';

interface CardContent {
    title: string;
    description: string;
}

export default function App() {
    const [showDialog, setShowDialog] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
    const [cardsContent, setCardsContent] = useState<CardContent[]>([
        {
            title: 'Product Features',
            description: 'Our product includes advanced editing capabilities, responsive design, and cross-browser compatibility.'
        },
        {
            title: 'Customer Testimonials',
            description: 'Our customers love the simplicity and power of our components. Easy integration and excellent support.'
        }
    ]);
    const [editDescription, setEditDescription] = useState('');

    const openDialog = (cardIndex: number) => {
        setActiveCardIndex(cardIndex);
        setEditDescription(cardsContent[cardIndex].description);
        setShowDialog(true);
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    const handleSave = () => {
        if (activeCardIndex !== null) {
            setCardsContent(prevContent => {
                const newContent = [...prevContent];
                newContent[activeCardIndex] = {
                    ...newContent[activeCardIndex],
                    description: editDescription
                };
                return newContent;
            });
            setShowDialog(false);
        }
    };

    return (
        <div className="component-section target-dialog">
            <div ref={containerRef} className="payment-container cards-container">
                <div className="cards-wrapper">
                    {cardsContent.map((card, index) => (
                        <div className="content-card" key={index}>
                            <div className="content-header">
                                <h2>{card.title}</h2>
                                <Button className="edit-icon-btn" onClick={() => openDialog(index)} icon={<EditIcon />} variant={Variant.Standard} title={`Edit ${card.title}`} />
                            </div>
                            <div className="content-body">
                                <p className="wrapped-text">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Dialog
                    header={activeCardIndex !== null ? `Edit ${cardsContent[activeCardIndex]?.title}` : 'Edit Content'}
                    open={showDialog}
                    onClose={closeDialog}
                    target={containerRef.current || undefined}
                    style={{ maxWidth: '450px', width: '90%' }}
                    closeIcon={false}
                    className='dialog-container'
                    footer={
                        <div className="dialog-footer">
                            <Button variant={Variant.Standard} onClick={closeDialog} >Cancel</Button>
                            <Button variant={Variant.Standard} onClick={handleSave} >Save</Button>
                        </div>
                    }
                >
                    <div className="dialog-form-container">
                        <div>
                            <TextArea placeholder="Enter description" value={editDescription} resizeMode={ResizeMode.Vertical} onChange={(e: TextAreaChangeEvent) => setEditDescription(e.value || '')} />
                        </div>
                    </div>
                </Dialog>
            </div>
        </div>
    );
}