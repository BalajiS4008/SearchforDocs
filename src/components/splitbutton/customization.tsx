import { ItemModel, SplitButton } from '@syncfusion/react-splitbuttons';
import './App.css';
import { HomeIcon, SearchIcon, CheckSmallIcon, TextAnnotationIcon, LinkIcon, PeopleIcon } from "@syncfusion/react-icons"

export default function App() {
  const items = [
    {
      text: 'Home',
      icon: <HomeIcon />
    },
    {
      text: 'Search',
      url: 'http://www.google.com',
      icon: <SearchIcon />
    },
    {
      text: 'Yes / No',
      icon: <CheckSmallIcon width={18} height={18} />
    },
    {
      text: 'Text',
      icon: <TextAnnotationIcon />
    },
    {
      hasSeparator: true
    },
    {
      text: 'Syncfusion',
      url: 'http://www.syncfusion.com',
      icon: <LinkIcon />
    }
  ];

  function itemTemplate(data: ItemModel) {
    return (
      <div>
        <span className='sf-menu-icon'>{data.icon}</span>
        <span>{data.text}</span>
      </div>
    );
  }

  return (
    <div className='splitbutton-section'>
      <SplitButton items={items} itemTemplate={itemTemplate} icon={<PeopleIcon />}>User Settings</SplitButton>
    </div>
  );
}