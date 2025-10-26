import { DownloadIcon, SaveIcon, EditIcon, SearchIcon } from '@syncfusion/react-icons';
import './icon-style.css';

export default function App() {
  return (
    <div className="syncfusion-icons">
      <div className="icon-grid">
        <div className="icon-item"><DownloadIcon className='sf-font-size-2xl'/>
          <p>Download</p>
        </div>
        <div className="icon-item"><SaveIcon className='sf-font-size-2xl'/>
          <p>Save</p>
        </div>
        <div className="icon-item"><EditIcon className='sf-font-size-2xl'/>
          <p>Edit</p>
        </div>
        <div className="icon-item"><SearchIcon className='sf-font-size-2xl'/>
          <p>Search</p>
        </div>
      </div>
    </div>
  );
}