import { ClipMode, Grid, SortSettings } from '@syncfusion/react-grid';
import { bookCatalog } from './libraryDetails';
import { useState } from 'react';

export default function App() {
  // Initialize sort settings with enabled state.
  const [sortSettings] = useState<SortSettings>({enabled: true});  

  return (
    <div>
      <Grid dataSource={bookCatalog} sortSettings={sortSettings} height={300} clipMode={ClipMode.EllipsisWithTooltip} />
    </div>
  );
}