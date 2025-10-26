import { ChipList, ChipItemProps } from '@syncfusion/react-buttons';
import { UserIcon } from "@syncfusion/react-icons"
import './App.css';

export default function App() {
    const users: ChipItemProps[] = [
        { text: 'Margaret', value: '1', leadingIconUrl: '/images/common/margaret.png' },
        { text: 'Michael', value: '2', leadingIcon: <UserIcon /> }
    ];

    return (
        <div className="component-section">
            <ChipList chips={users} aria-label='User display list'>
            </ChipList>
        </div>
    );
}