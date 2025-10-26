import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { useState } from 'react';
import './app.css';

const countries = [
  { id: 1, name: 'United States' },
  { id: 2, name: 'Canada' },
  { id: 3, name: 'United Kingdom' },
];

const regions = [
  { id: 1, countryId: 1, name: 'California' },
  { id: 2, countryId: 1, name: 'Texas' },
  { id: 3, countryId: 1, name: 'New York' },
  { id: 4, countryId: 2, name: 'Ontario' },
  { id: 5, countryId: 2, name: 'British Columbia' },
  { id: 6, countryId: 2, name: 'Quebec' },
  { id: 7, countryId: 3, name: 'England' },
  { id: 8, countryId: 3, name: 'Scotland' },
  { id: 9, countryId: 3, name: 'Wales' },
];

const cities = [
  { id: 1, regionId: 1, name: 'Los Angeles' },
  { id: 2, regionId: 1, name: 'San Francisco' },
  { id: 3, regionId: 1, name: 'San Diego' },
  { id: 4, regionId: 2, name: 'Houston' },
  { id: 5, regionId: 2, name: 'Austin' },
  { id: 6, regionId: 2, name: 'Dallas' },
  { id: 7, regionId: 3, name: 'New York City' },
  { id: 8, regionId: 3, name: 'Buffalo' },
  { id: 9, regionId: 3, name: 'Albany' },
  { id: 10, regionId: 4, name: 'Toronto' },
  { id: 11, regionId: 4, name: 'Ottawa' },
  { id: 12, regionId: 5, name: 'Vancouver' },
  { id: 13, regionId: 5, name: 'Victoria' },
  { id: 14, regionId: 6, name: 'Montreal' },
  { id: 15, regionId: 6, name: 'Quebec City' },
  { id: 16, regionId: 7, name: 'London' },
  { id: 17, regionId: 7, name: 'Manchester' },
  { id: 18, regionId: 8, name: 'Edinburgh' },
  { id: 19, regionId: 8, name: 'Glasgow' },
  { id: 20, regionId: 9, name: 'Cardiff' },
  { id: 21, regionId: 9, name: 'Swansea' },
];

export default function App() {
  const [selectedCountryId, setSelectedCountryId] = useState<number | null>(null);
  const [selectedRegionId, setSelectedRegionId] = useState<number | null>(null);
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);

  const handleCountryChange = (args?: ChangeEventArgs) => {
    setSelectedCountryId(args?.value as number);
    setSelectedRegionId(null);
    setSelectedCityId(null);
  };

  const handleRegionChange = (args?: ChangeEventArgs) => {
    setSelectedRegionId(args?.value as number);
    setSelectedCityId(null);
  };

  const handleCityChange = (args?: ChangeEventArgs) => {
    setSelectedCityId(args?.value as number);
  };

  const filteredRegions = selectedCountryId
    ? regions.filter((region) => region.countryId === selectedCountryId)
    : [];

  const filteredCities = selectedRegionId
    ? cities.filter((city) => city.regionId === selectedRegionId)
    : [];

  const fields = { text: 'name', value: 'id' };

  return (
    <div className="component-section dropdownlist-container">
      <div className='sf-display-flex flex-direction-column mid-gap'>
        <div className="first-dropdown">
          <DropDownList
            dataSource={countries as unknown as { [key: string]: object }[]}
            fields={fields}
            value={selectedCountryId}
            placeholder="Select a country"
            onChange={handleCountryChange}
          />
        </div>

        <div className="second-dropdown">
          <DropDownList
            dataSource={filteredRegions as unknown as { [key: string]: object }[]}
            fields={fields}
            value={selectedRegionId}
            placeholder="Select a region"
            onChange={handleRegionChange}
            disabled={!selectedCountryId}
          />
        </div>

        <div className="third-dropdown">
          <DropDownList
            dataSource={filteredCities as unknown as { [key: string]: object }[]}
            fields={fields}
            value={selectedCityId}
            placeholder="Select a city"
            onChange={handleCityChange}
            disabled={!selectedRegionId}
          />
        </div>
      </div>
    </div>
  );
}