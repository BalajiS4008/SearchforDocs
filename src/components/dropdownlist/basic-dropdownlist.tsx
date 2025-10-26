import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { useState } from 'react';
import './app.css';

export default function App() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const sportsData = [
    { Id: 'game1', Game: 'Badminton' },
    { Id: 'game2', Game: 'Football' },
    { Id: 'game3', Game: 'Tennis' }
  ];

  const fields = { text: 'Game', value: 'Id' };

  const handleChange = (args?: ChangeEventArgs) => {
    setSelectedValue(args?.value as string);
  }

  return (
    <div className="component-section dropdownlist-container">
      <DropDownList
        dataSource={sportsData as unknown as { [key: string]: object }[]}
        fields={fields}
        placeholder="Select a game"
        value={selectedValue}
        onChange={handleChange}
      />
    </div>
  );
}