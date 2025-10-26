import { RadioButton, RadioButtonChangeEvent } from '@syncfusion/react-buttons';
import { DropDownList, LabelMode } from '@syncfusion/react-dropdowns';
import { useState } from 'react';

export default function App() {
  const [selectedLabelMode, setSelectedLabelMode] = useState<LabelMode>("Auto");
  const itemData: { [key: string]: unknown | object }[] = [
    { id: 1, text: 'Andrew Fuller' },
    { id: 2, text: 'Nancy Davolio' },
    { id: 3, text: 'Janet Leverling' },
    { id: 4, text: 'Margaret Peacock' },
  ];
  const fields = { value: 'id', text: 'text', disabled: 'disabled' };
  const handleLabelModeChange = (e: RadioButtonChangeEvent) => {
    setSelectedLabelMode(e.value as LabelMode);
  };
  return (
    <div className="component-section dropdownlist-container">
      <div className='sf-display-flex flex-direction-row mid-gap margin-bottom'>
        <RadioButton
          name='labelMode' 
          value="Auto"
          label='Auto'
          checked={selectedLabelMode === "Auto"}
          onChange={handleLabelModeChange}
        />
        <RadioButton
          name='labelMode'
          value="Always"
          label='Always'
          checked={selectedLabelMode === "Always"}
          onChange={handleLabelModeChange}
        />
        <RadioButton
          name='labelMode'
          value="Never"
          label='Never'
          checked={selectedLabelMode === "Never"}
          onChange={handleLabelModeChange}
        />
      </div>

      <DropDownList
        key={`dropdown-${selectedLabelMode}`}
        dataSource={itemData as { [key: string]: object }[]}
        fields={fields}
        placeholder="Select an employee"
        labelMode={selectedLabelMode}
      />
    </div>
  );
}