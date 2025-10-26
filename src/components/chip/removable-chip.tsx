import { Chip, ChipDeleteEvent, ChipVariant } from '@syncfusion/react-buttons';
import { useState } from 'react';

export default function App() {
    type ChipData = {
        text: string;
        value: string;
        removable?: boolean;
        variant?: ChipVariant;
    };

    const initialChips: ChipData[] = [
        { text: 'Oak', value: 'oak-tree', removable: true },
        { text: 'Pine', value: 'pine-tree', removable: true, variant: 'Outlined' },
    ];
    const [chips, setChips] = useState<ChipData[]>(initialChips);

    const handleDelete = (args: ChipDeleteEvent) => {
        const chipValue = args.data.value;
        if (chipValue) {
            setChips(prevChips => prevChips.filter(chip => chip.value !== chipValue));
        }
    };

    return (
        <div className="component-section chip-container">
            {chips.map((chip: ChipData) => (
                <Chip key={chip.value} text={chip.text} value={chip.value} color='Primary' variant={chip.variant} removable={chip.removable} onDelete={handleDelete} />
            ))}
        </div>
    );
}