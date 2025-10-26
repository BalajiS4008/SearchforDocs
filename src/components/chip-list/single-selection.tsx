import { ChipList } from '@syncfusion/react-buttons';

export default function App() {
    interface Season {
        text: string;
        value: string;
    }

    const seasons: Season[] = [
        { text: 'Spring', value: 'spring' },
        { text: 'Summer', value: 'summer' },
        { text: 'Winter', value: 'winter' }
    ];

    return (
        <div className="component-section">
            <ChipList chips={seasons} selection='Single' aria-label='Single season selection'>
            </ChipList>
        </div>
    );
}