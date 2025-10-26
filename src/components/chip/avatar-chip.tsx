import { Chip, ChipProps } from '@syncfusion/react-buttons';
import { UserIcon } from "@syncfusion/react-icons"
import './App.css';

export default function App() {
    const people: ChipProps[] = [
        { text: 'Anne', value: 'Anne', leadingIconUrl: '/images/common/anne.png' },
        { text: 'John', value: 'John', leadingIcon: <UserIcon /> },
        { text: 'David', value: 'David', avatar: <>D</> }
    ];

    return (
        <div className="component-section chip-section">
            {people.map((chip: ChipProps) => (
                <Chip key={chip.value} text={chip.text} value={chip.value} color={chip.color} leadingIconUrl={chip.leadingIconUrl} leadingIcon={chip.leadingIcon} avatar={chip.avatar} />
            ))}
        </div>
    );
}