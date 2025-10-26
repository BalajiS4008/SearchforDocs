import { useState } from 'react';
import { Button, Color, Size } from '@syncfusion/react-buttons';
import { TextBox, Variant,TextBoxChangeEvent  } from '@syncfusion/react-inputs';
import { EyeIcon, EyeSlashIcon } from '@syncfusion/react-icons';
import './App.css';

export default function App() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('password');
  const handleChange = (args?: TextBoxChangeEvent) => {
    if (args && args.value !== undefined) {
      setPassword(args.value);
    }
  };
  return (
    <div className="component-section sf-align-center gap-10">
      <TextBox
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        variant={Variant.Outlined}
        value={password}
        width={'250px'}
        onChange={handleChange}
        className='textbox-toggle'
      />
      <Button
        toggleable={true}
        selected={showPassword}
        size={Size.Large}
        onClick={() => setShowPassword(!showPassword)}
        icon={showPassword ? <EyeSlashIcon /> : <EyeIcon />}
        color={Color.Secondary}
        aria-label={"Toggle Button"}
      >
      </Button>
    </div>
  );
};