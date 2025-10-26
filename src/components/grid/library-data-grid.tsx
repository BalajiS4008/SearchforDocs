import { Grid, Column, Columns, ColumnTemplateProps, SortSettings, ClipMode, TextAlign } from '@syncfusion/react-grid';
import React, { useCallback, useMemo, useState } from 'react';
import './libraryDetails.css';
import { bookCatalog, LibraryBook } from './libraryDetails';

export default function App() {
  // State to manage sort settings.    
  const [sortSettings] = useState<SortSettings>({ enabled: true });
  
  // Template to render book details including Title, Author, and Book ID.
  const templateWithRowInfo = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    return (
      <div className="sf-row-info">
        <div><b>Title:</b> {(props?.data as LibraryBook).Title}</div>
        <div><b>Author:</b> {(props?.data as LibraryBook).Author}</div>
        <div><b>Book ID:</b> {(props?.data as LibraryBook).BookID}</div>
      </div>
    );
  }, []);

  return useMemo(() => (
    // Memoized Grid component to prevent unnecessary re-renders.
    <Grid dataSource={bookCatalog.slice(0,15)} className='library-data' sortSettings={sortSettings} height={350} enableHover={false}>
      <Columns>
        <Column field="BookID" headerText="Book Details" width="190" template={templateWithRowInfo} />
        <Column field='Title' headerText='Title' width='120' clipMode={ClipMode.EllipsisWithTooltip} />
        <Column field="Author" headerText="Author" width="120" />
        <Column field="Genre" headerText="Genre" width="80" />
        <Column field='Language' headerText='Language' width='90'/>
        <Column field='Rating' headerText='Rating' textAlign={TextAlign.Right} width='70' />
      </Columns>
    </Grid>
  ), [templateWithRowInfo]);
}
