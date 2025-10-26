import { ChipList, ChipItemProps } from '@syncfusion/react-buttons';

export default function App() {
    const colors: ChipItemProps[] = [
        { text: 'Red', value: 'red' },
        { text: 'Blue', value: 'blue' },
        { text: 'Green', value: 'green' },
    ];

    return (
        <div className="component-section chip-container">
            <ChipList chips={colors} selection='Multiple' removable aria-label='Selectable and removable color options'>
            </ChipList>
        </div>
    );
}