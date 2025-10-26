import {Button, Checkbox, CheckboxChangeEvent } from '@syncfusion/react-buttons';
import { useState } from 'react';
import './appearance.css';

export default function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [darkMode, setDarkMode] = useState('');

  const handleCheckboxChange = (event: CheckboxChangeEvent) => {
    const checked = event.value;
    setIsChecked(checked);

    // Add or remove the class on the light-dark-mode element based on the checkbox state
    if (checked) {
      setDarkMode('dark sf-dark-mode');
    } else {
      setDarkMode('');
    }
  };
    return (
      <div className={`switch-theme ${darkMode}`}>
          { /* checkbox - Used to represent checkbox. */ }
          <Checkbox label="Enable Darkmode" checked={isChecked} onChange={handleCheckboxChange}/><br/>
          { /* Primary Button - Used to represent a primary action. */ }
          <Button className='sf-btn-primary'>Primary</Button>

          { /* Success Button - Used to represent a positive action. */ }
          <Button className='sf-btn-success'>Success</Button>

          { /* Info Button - Used to represent an informative action. */ }
          <Button className='sf-btn-info'>Info</Button>

          { /* Warning Button - Used to represent an action with caution.*/ }
          <Button className='sf-btn-warning'>Warning</Button>

          { /* Error Button - Used to represent a negative action.*/ }
          <Button className='sf-btn-error'>Error</Button>
      </div>
  );
}