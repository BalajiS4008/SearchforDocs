import { TextBox, TextBoxChangeEvent } from '@syncfusion/react-inputs';
import { useState } from "react";
import './App.css';

function App() {
  const [value, setValue] = useState('Syncfusion');

  const handleChange = (args: TextBoxChangeEvent) => {
    setValue(args.value as string);
  };

  return (
    <div className='component-section redux-sample'>
      <h3>Redux Store</h3>
      <div className='redux-textbox'>
      <TextBox
        placeholder="Enter your name"
        value={value}
        onChange={handleChange}
        labelMode="Auto"
      />
      </div>
      <p>Redux Value: <strong>{value}</strong></p>
    </div>
  );
}

export default App;