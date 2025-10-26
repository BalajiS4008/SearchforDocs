import { DropDownList } from '@syncfusion/react-dropdowns';
import './invalid-dropdownlist.css'

export default function App() {

const animalItems: { [key: string]: unknown }[] = [
  { Id: 'animal1', Name: 'Elephant' },
  { Id: 'animal2', Name: 'Tiger' },
  { Id: 'animal3', Name: 'Blue Whale' }
];
  const fields = { text: 'Name', value: 'Id' };

  return (
    <div className="component-section dropdownlist-container">
      <div className="dropdown-container">
        <DropDownList
          dataSource={animalItems as { [key: string]: object }[]}
          fields={fields}
          className='sf-input sf-error'
          placeholder="Select an item"
        />
      </div>
      <div className="ddl-error-message sf-error">Invalid value</div>
    </div>
  );
} 