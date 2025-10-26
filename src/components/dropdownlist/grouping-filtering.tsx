import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { useState } from 'react';
import './app.css';

interface ElectronicItem {
  category: string;
  text: string;
  value: string;
}

export default function App() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState<string | null>(null);

  const groupingData = [
    { category: 'Computers', text: 'Laptop', value: 'laptop' },
    { category: 'Computers', text: 'Desktop', value: 'desktop' },
    { category: 'Computers', text: 'Tablet', value: 'tablet' },
    { category: 'Accessories', text: 'Mouse', value: 'mouse' },
    { category: 'Accessories', text: 'Keyboard', value: 'keyboard' },
    { category: 'Accessories', text: 'Headphones', value: 'headphones' },
    { category: 'Peripherals', text: 'Monitor', value: 'monitor' },
    { category: 'Peripherals', text: 'Printer', value: 'printer' },
    { category: 'Peripherals', text: 'Scanner', value: 'scanner' }
  ];

  const fields = { groupBy: 'category', text: 'text', value: 'value' };

  const handleChange = (args?: ChangeEventArgs) => {
    setSelectedValue(args?.value as string);
    const selectedItem = groupingData.find(item => item.value === args?.value) as ElectronicItem | undefined;
    setSelectedText(selectedItem ? selectedItem.text : null);
  };

  return (
    <div className="component-section dropdownlist-container">
      <DropDownList
        dataSource={groupingData as unknown as { [key: string]: object }[]}
        fields={fields}
        filterable={true}
        placeholder="Select an electronic item"
        onChange={handleChange}
        value={selectedValue}
      />
      {selectedText && (
        <div className='margin-top'>
          Selected Electronic Item: {selectedText}
        </div>
      )}
    </div>
  );
}