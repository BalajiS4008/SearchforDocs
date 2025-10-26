import { ChipList, ChipListSelectEvent } from '@syncfusion/react-buttons';
import { useState } from 'react';

export default function App() {
    const [selectedChips, setSelectedChips] = useState<number[]>([1]);
    const platforms = [
        { text: 'React' },
        { text: 'Angular' },
    ]

    const handleSelectedChipsChange = (args: ChipListSelectEvent) => {
        setSelectedChips(args.selectedChipIndexes);
    };

    return (
        <div className="component-section">
            <ChipList aria-label='Selectable programming platforms' chips={platforms} selectedChips={selectedChips} selection='Multiple' onSelect={handleSelectedChipsChange} />
        </div>
    );
}