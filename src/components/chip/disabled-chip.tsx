import { Chip, ChipProps } from '@syncfusion/react-buttons';

export default function App() {
    const countries: ChipProps[] = [
        { text: 'United States', value: 'usa', disabled: true },
        { text: 'Canada', value: 'canada' },
        { text: 'Japan', value: 'japan', disabled: true },
        { text: 'India', value: 'india' }
    ];

    return (
        <div className="component-section">
            {countries.map((chip: ChipProps) => (
                <Chip key={chip.value} text={chip.text} value={chip.value} disabled={chip.disabled}
                />
            ))}
        </div>
    );
}