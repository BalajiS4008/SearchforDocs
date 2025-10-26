import { ChipList } from '@syncfusion/react-buttons';

export default function App() {
    interface Shape {
        text: string;
        value: string;
    }

    const shapes: Shape[] = [
        { text: 'Circle', value: 'circle' },
        { text: 'Square', value: 'square' },
        { text: 'Triangle', value: 'triangle' },
    ];

    return (
        <div className="component-section">
            <ChipList chips={shapes} selection='Multiple' selectedChips={[0, 1]} aria-label='Multiple selectable shape options'>
            </ChipList>
        </div>
    );
}