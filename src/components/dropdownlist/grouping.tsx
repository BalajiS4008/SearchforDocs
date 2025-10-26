import { EmitType } from '@syncfusion/react-base';
import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { useState } from 'react';
import './app.css';

interface FoodItem {
  category: string;
  text: string;
  value: string;
}

export default function App() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState<string | null>(null);

  const groupingData = [
    { category: 'Fruits', text: 'Apple', value: 'apple' },
    { category: 'Fruits', text: 'Banana', value: 'banana' },
    { category: 'Fruits', text: 'Cherry', value: 'cherry' },
    { category: 'Vegetables', text: 'Carrot', value: 'carrot' },
    { category: 'Vegetables', text: 'Broccoli', value: 'broccoli' },
    { category: 'Vegetables', text: 'Spinach', value: 'spinach' },
    { category: 'Grains', text: 'Rice', value: 'rice' },
    { category: 'Grains', text: 'Wheat', value: 'wheat' },
    { category: 'Grains', text: 'Oats', value: 'oats' }
  ];

  const fields = { groupBy: 'category', text: 'text', value: 'value' };

  const handleChange: EmitType<ChangeEventArgs> = (args?: ChangeEventArgs): void => {
    setSelectedValue(args?.value as string);
    const selectedItem = groupingData.find(item => item.value === args?.value) as FoodItem | undefined;
    setSelectedText(selectedItem?.text || null);
  };

  return (
    <div className="component-section dropdownlist-container">
      <DropDownList
        dataSource={groupingData as unknown as { [key: string]: object }[]}
        fields={fields}
        placeholder="Select a food item"
        onChange={handleChange}
        value={selectedValue}
      />
      <br /><br />
      {selectedValue && (
        <div className='margin-top'>
          Selected Food Item: {selectedText}
        </div>
      )}
    </div>
  );
}