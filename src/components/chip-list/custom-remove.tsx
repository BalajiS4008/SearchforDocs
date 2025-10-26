import { ChipList, ChipItemProps } from '@syncfusion/react-buttons';

export default function App() {
    const fruits: ChipItemProps[] = [
        { text: 'Berry' },
        { text: 'Apple' },
    ];

    return (
        <>
            <div className="component-section chip-container">
                <ChipList className='custom-remove' chips={fruits} removable aria-label='Fruits with custom remove buttons'>
                </ChipList>
            </div>
            <style>
                {`
                .custom-remove.sf-chip-list .sf-chip-delete.sf-dlt-btn svg{
                    display: none;
                }
                .custom-remove.sf-chip-list .sf-chip-delete.sf-dlt-btn {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM17 11H7V13H17V11Z' fill='black'/%3E%3C/svg%3E");
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .sf-dark-mode .custom-remove.sf-chip-list .sf-chip-delete.sf-dlt-btn {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM17 11H7V13H17V11Z' fill='rgb(202 196 208)'/%3E%3C/svg%3E");
                }
                `}
            </style>
        </>
    );
}