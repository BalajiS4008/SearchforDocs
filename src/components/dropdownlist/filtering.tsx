import { DropDownList } from '@syncfusion/react-dropdowns';
import './app.css';

export default function App() {
  const filteringData = [
    { "Name": "Australia", "Code": "AU" },
    { "Name": "Bermuda", "Code": "BM" },
    { "Name": "Canada", "Code": "CA" },
    { "Name": "Cameroon", "Code": "CM" },
    { "Name": "Denmark", "Code": "DK" },
    { "Name": "France", "Code": "FR" },
    { "Name": "Finland", "Code": "FI" },
    { "Name": "Germany", "Code": "DE" },
    { "Name": "Greenland", "Code": "GL" },
    { "Name": "Hong Kong", "Code": "HK" },
    { "Name": "India", "Code": "IN" },
    { "Name": "Italy", "Code": "IT" },
    { "Name": "Japan", "Code": "JP" },
    { "Name": "Mexico", "Code": "MX" },
    { "Name": "Norway", "Code": "NO" },
    { "Name": "Poland", "Code": "PL" },
    { "Name": "Switzerland", "Code": "CH" },
    { "Name": "United Kingdom", "Code": "GB" },
    { "Name": "United States", "Code": "US" }
  ];

  const fields = { text: 'Name', value: 'Code' };

  return (
    <div className="component-section dropdownlist-container">
      <DropDownList
        dataSource={filteringData as unknown as { [key: string]: object }[]}
        fields={fields}
        placeholder="Select a country"
        filterable={true}
        filterPlaceholder="Search countries"
        filterType="StartsWith"
      />
    </div>
  );
}