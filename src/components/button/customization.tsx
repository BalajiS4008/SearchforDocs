import { useState } from 'react';
import { Button } from '@syncfusion/react-buttons';
import { TextBox, Variant, TextBoxChangeEvent } from '@syncfusion/react-inputs';
import './App.css';

export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [mail, setMail] = useState<string>('');
  const handleChange = (args?: TextBoxChangeEvent) => {
    if (args && args.value !== undefined) {
      setMail(args.value);
    }
  };
  const buttonStyle = {
    background: isHovered ? '#0056b3' : '#007BFF',
    boxShadow: isHovered ? '0px 4px 8px rgba(0, 0, 0, 0.2)' : '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className="component-section">
      <h3>Subscribe for more notifications</h3>
      <div className="sf-align-center">
        <TextBox
          type={'text'}
          placeholder="Enter email to get notified"
          variant={Variant.Outlined}  
          value={mail}
          width={'350px'}
          onChange={handleChange}
          className='textbox-custom'
        /><br />

        <Button
          style={buttonStyle}
          className='button-custom'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}