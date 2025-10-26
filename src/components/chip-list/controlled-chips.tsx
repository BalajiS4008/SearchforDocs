import { ChipList, ChipItemProps, ChipListDeleteEvent } from '@syncfusion/react-buttons';
import { useState } from 'react';

export default function App() {
    const [chips, setChips] = useState<string[] | ChipItemProps[]>([
        { text: 'React' },
        { text: 'Vue' }
    ]);

    const handleChipsChange = (args: ChipListDeleteEvent) => {
        setChips(args.chips);
    };

    return (
        <div className="component-section chip-container">
            <ChipList aria-label='Removable framework tags' chips={chips} onDelete={handleChipsChange} removable={true} />
        </div>
    );
}