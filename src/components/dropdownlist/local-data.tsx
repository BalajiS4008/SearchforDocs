import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { useState } from 'react';
import './app.css';

export default function App() {
  const gadgets = ['Laptop', 'Smartphone', 'Headphones', 'Tablet', 'Smartwatch'];

  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (args?: ChangeEventArgs) => {
    setSelectedValue(args?.value as string);
  }

  return (
    <div className="component-section dropdownlist-container">
      <DropDownList
        fields={{ text: 'text', value: 'value' }}
        dataSource={gadgets}
        placeholder="Select a gadget"
        value={selectedValue}
        onChange={handleChange}
      />

      {selectedValue && (
        <div className='margin-top'>
          Selected Gadget: {selectedValue}
        </div>
      )}
    </div>
  );
}