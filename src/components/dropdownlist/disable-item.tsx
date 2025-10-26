import { DropDownList } from '@syncfusion/react-dropdowns';
import './app.css';

export default function App() {
    const itemData = [
        { id: 1, text: 'Smartphone XS Pro', disabled: false, status: 'In Stock' },
        { id: 2, text: 'Laptop Ultra 15"', disabled: true, status: 'Out of Stock' },
        { id: 3, text: 'Wireless Earbuds', disabled: false, status: 'In Stock' },
        { id: 5, text: 'Tablet Pro 12.9"', disabled: true, status: 'Out of Stock' }
    ];
    const fields = { value: 'id', text: 'text', disabled: 'disabled' }
    return (
        <div className="component-section dropdownlist-container">
            <DropDownList dataSource={itemData as unknown as { [key: string]: object }[]} fields={fields} placeholder="Select a product" />
        </div>
    );
}