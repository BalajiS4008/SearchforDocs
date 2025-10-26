import { Dialog } from '@syncfusion/react-popups';
import { Button, Variant as buttonVariant } from '@syncfusion/react-buttons';
import { useState } from 'react';
import { ResizeMode, TextArea, TextAreaChangeEvent, Variant } from '@syncfusion/react-inputs';
import './App.css';

export default function App() {
    const [visible, setVisible] = useState(false);
    const [noteText, setNoteText] = useState('');
    const [isSaved, setIsSaved] = useState(false);

    const saveNote = () => {
        if (noteText.trim()) {
            setIsSaved(true);
            setTimeout(() => {
                setVisible(false);
                setNoteText('');
            }, 3000);
        }
    };

    const resetDialog = () => {
        setVisible(false);
        setIsSaved(false);
        setNoteText('');
    };

    return (
        <div className="component-section">
            <Button onClick={() => { setVisible(true); setIsSaved(false); }}>Open Resizable Dialog</Button>

            <Dialog
                header="Quick Note"
                open={visible}
                resizable={true}
                resizeHandles={['All']}
                onClose={resetDialog}
                footer={
                    !isSaved ? (
                        <>
                            <Button onClick={resetDialog} variant={buttonVariant.Standard}>Cancel</Button>
                            <Button onClick={saveNote} variant={buttonVariant.Standard} >Save</Button>
                        </>
                    ) : null
                }
                style={{ minWidth: '300px', minHeight: '260px', width: '500px' }}
                className='resize-dialog'
            >
                {!isSaved ? (
                    <div className="note-editor">
                        <TextArea placeholder="Write your note here..." resizeMode={ResizeMode.None} variant={Variant.Outlined} width={'100%'} value={noteText} onChange={(args: TextAreaChangeEvent) => setNoteText(args.value || '')} ></TextArea>
                    </div>
                ) : (
                    <div className="note-success-container">
                        <div className="note-success-message">
                            <h3>Note Saved!</h3>
                            <p>Your note has been saved successfully.</p>
                        </div>
                    </div>
                )}
            </Dialog>
        </div>
    );
}