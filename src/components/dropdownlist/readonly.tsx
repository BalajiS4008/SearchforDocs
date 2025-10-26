import { DropDownList } from '@syncfusion/react-dropdowns';
import './app.css';

export default function App() {
    const itemData = [
        { id: 1, text: 'Andrew Fuller' },
        { id: 2, text: 'Nancy Davolio' },
        { id: 3, text: 'Janet Leverling' },
        { id: 4, text: 'Margaret Peacock' }
    ];
    const fields = { value: 'id', text: 'text' }
    return (
        <div className="component-section dropdownlist-container">
            <DropDownList dataSource={itemData as unknown as { [key: string]: object }[]} fields={fields} placeholder="Select an employee" defaultValue={3} readOnly={true} />
        </div>)
}