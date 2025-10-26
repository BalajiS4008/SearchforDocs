import { SnippetItem } from '../../common/snippet'

export const dropdroplistNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-dropdowns' }
];

export const dropdroplistImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { DropDownList } from "@syncfusion/react-dropdowns";' }
];

export const dropdroplistStyles: SnippetItem[] = [
    {
        title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-lists/styles/material3.css';
@import '../node_modules/@syncfusion/react-dropdowns/styles/material3.css'` }
];

export const dropdroplistSnippet: SnippetItem[] = [
    {
        title: "App.tsx", code: `
        import { DropDownList } from '@syncfusion/react-dropdowns';
        import { useState } from 'react';
        import './app.css';
        
        export default function App() {
            const [selectedValue, setSelectedValue] = useState<string | null>(null);

            const sportsData: { [key: string]: Object }[] = [
                { Id: 'game1', Game: 'Badminton' },
                { Id: 'game2', Game: 'Football' },
                { Id: 'game3', Game: 'Tennis' }
            ];

            const fields = { text: 'Game', value: 'Id' };

            const handleChange = (args?: ChangeEventArgs) => {
                setSelectedValue(args?.value as string);
            }
            
            return (
                <div className="component-section">
                    <DropDownList dataSource={sportsData} fields={fields} value={selectedValue} onChange={handleChange} placeholder="Select a game" />
                </div>
            );
        }` }
];