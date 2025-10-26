import { ChipList, ChipItemProps } from '@syncfusion/react-buttons';

export default function App() {
    const categoryData: ChipItemProps[] = [
        { text: 'Design', value: '1', className: 'custom chip-design' },
        { text: 'Marketing', value: '2', className: 'custom chip-marketing' },
    ];

    return (
        <>
            <div className="component-section chip-customization">
                <ChipList chips={categoryData} aria-label='Color-coded category chips' />
            </div>
            <style>
                {`                
                .sf-chip-list .chip-design,
                .sf-chip-list .chip-design:hover,
                .sf-chip-list .chip-design.sf-focused {
                    background: #0D47A1;
                    color: white;
                }
                
                .sf-chip-list .chip-marketing,
                .sf-chip-list .chip-marketing:hover,
                .sf-chip-list .chip-marketing.sf-focused {
                    background: #4A148C;
                    color: white;
                }
                `}
            </style>
        </>
    );
}