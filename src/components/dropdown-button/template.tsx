import { DropDownButton, ItemModel } from '@syncfusion/react-splitbuttons';
import './App.css';
import { HomeIcon, SearchIcon, CheckSmallIcon, TextAnnotationIcon, LinkIcon } from "@syncfusion/react-icons"
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
    if (data.url) {
      return (
        <div>
          <span className='sf-menu-icon'>{data.icon}</span>
          <span>
            <a href={data.url} className='dropdown-menu-url' target="_blank" rel="noopener noreferrer" aria-label="blank">
              {data.text}
            </a>
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <span className='sf-menu-icon'>{data.icon}</span>
          <span>{data.text}</span>
        </div>
      );
    }
  }

  return (
    <div className='dropdown-center'>
      <DropDownButton items={items} itemTemplate={itemTemplate} >Menu</DropDownButton>
    </div>
  );
}