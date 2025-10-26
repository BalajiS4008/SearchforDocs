import { useState } from 'react';
import { Toolbar, ToolbarItem, ToolbarSeparator, Orientation } from '@syncfusion/react-navigations';
import { Button, Variant, Color } from '@syncfusion/react-buttons';
import { HomeIcon, FileDocumentIcon, ChartIcon, SettingsIcon, PeopleIcon, TimelineMonthIcon } from '@syncfusion/react-icons';
import './App.css';

export default function App() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="component-section">
      <Toolbar orientation={Orientation.Vertical} className='orientation-toolbar' aria-label="Sidebar navigation">
        <ToolbarItem>
          <Button color={activeItem === 'Dashboard' ? Color.Primary : Color.Secondary} variant={Variant.Standard} icon={<HomeIcon />} onClick={() => handleItemClick('Dashboard')} >Dashboard</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button color={activeItem === 'Documents' ? Color.Primary : Color.Secondary} variant={Variant.Standard} icon={<FileDocumentIcon />} onClick={() => handleItemClick('Documents')} >Documents</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button color={activeItem === 'Reports' ? Color.Primary : Color.Secondary} variant={Variant.Standard} icon={<ChartIcon />} onClick={() => handleItemClick('Reports')} >Reports</Button>
        </ToolbarItem>
        <ToolbarSeparator />
        <ToolbarItem>
          <Button color={activeItem === 'Calendar' ? Color.Primary : Color.Secondary} variant={Variant.Standard} icon={<TimelineMonthIcon />} onClick={() => handleItemClick('Calendar')} >Calendar</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button color={activeItem === 'Contacts' ? Color.Primary : Color.Secondary} variant={Variant.Standard} icon={<PeopleIcon />} onClick={() => handleItemClick('Contacts')} >Contacts</Button>
        </ToolbarItem>
        <ToolbarSeparator />
        <ToolbarItem>
          <Button color={activeItem === 'Settings' ? Color.Primary : Color.Secondary} variant={Variant.Standard} icon={<SettingsIcon />} onClick={() => handleItemClick('Settings')} >Settings</Button>
        </ToolbarItem>
      </Toolbar>
    </div>
  );
}