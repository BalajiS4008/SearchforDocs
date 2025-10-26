import { ChipList, ChipItemProps } from '@syncfusion/react-buttons';

export default function App() {
    const fruits: ChipItemProps[] = [
        { text: 'Berry', value: 'berry' },
        { text: 'Apple', value: 'apple' },
    ];

    return (
        <>
            <div className="component-section">
                <ChipList className='custom-icon' chips={fruits} selection='Multiple' aria-label='Fruit selection with custom checkmark icons'>
                </ChipList>
            </div>
            <style>
                {`
                .custom-icon.sf-chip-list.sf-chip-multi-selection .sf-chip .sf-chip-selectable-icon svg{
                    display: none;
                }
                .custom-icon.sf-chip-list.sf-chip-multi-selection .sf-chip .sf-chip-selectable-icon {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM10.5 16.4142L17.9142 9L16.5 7.58578L10.5 13.5858L7.50003 10.5858L6.08582 12L10.5 16.4142Z' fill='rgb(73 69 78)'/%3E%3C/svg%3E");
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .sf-dark-mode .custom-icon.sf-chip-list.sf-chip-multi-selection .sf-chip .sf-chip-selectable-icon {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='white'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM10.5 16.4142L17.9142 9L16.5 7.58578L10.5 13.5858L7.50003 10.5858L6.08582 12L10.5 16.4142Z' fill='rgb(202 196 208)'/%3E%3C/svg%3E");
                }
                `}
            </style>
        </>
    );
}