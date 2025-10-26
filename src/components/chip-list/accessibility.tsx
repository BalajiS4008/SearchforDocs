import { ChipList, ChipItemProps } from '@syncfusion/react-buttons';

export default function App() {

    const users: ChipItemProps[] = [
        { text: 'Anne', value: '1', leadingIconUrl: '/images/common/anne.png' },
        { text: 'Janet', value: '2', leadingIconUrl: '/images/common/janet.png' },
        { text: 'Laura', value: '3', leadingIconUrl: '/images/common/laura.png' },
        { text: 'Margaret', value: '4', leadingIconUrl: '/images/common/margaret.png' },
        { text: 'Michael', value: '5', leadingIcon: 'e-user-icon' }
    ];

    return (
        <div className="wrapper">
            <div className="chip-container">
                <ChipList chips={users} removable selection='Single' aria-label='basic usage'>
                </ChipList>
            </div>
        </div>
    );
}