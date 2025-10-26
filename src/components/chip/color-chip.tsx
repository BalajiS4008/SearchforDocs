import { Chip, ChipProps } from '@syncfusion/react-buttons';

export default function App() {
    const people: ChipProps[] = [
        { text: 'Primary', value: 'primary', color: 'Primary' },
        { text: 'Info', value: 'info', color: 'Info' },
        { text: 'Error', value: 'error', color: 'Error' },
        { text: 'Success', value: 'success', color: 'Success' },
        { text: 'Warning', value: 'warning', color: 'Warning' }
    ];

    return (
        <div className="component-section">
            {people.map((chip: ChipProps) => (
                <Chip key={chip.value} text={chip.text} value={chip.value} color={chip.color} />
            ))}
        </div>
    );
}