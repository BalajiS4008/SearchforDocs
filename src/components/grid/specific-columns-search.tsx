import { Grid, Column, Columns, FilterSettings, SortSettings, PageSettings, SearchSettings, TextAlign, FilterBarType, ClipMode  } from '@syncfusion/react-grid';
import { bookCatalog } from './libraryDetails';
import { useState } from 'react';

export default function App() {
  // Initialize state for filter, sort, search, toolbar, and pagination settings.
  const [filterSettings] = useState<FilterSettings>({enabled: true});
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount:4 });
  const [toolbarSettings] = useState<string[]>(['Search']);
  const [searchSettings] = useState<SearchSettings>({ enabled:true, fields: ['BookID','Title', 'Author', 'Genre']});
  
  // Render grid with library data and configured settings.
  return (
    <div>
      <Grid dataSource={bookCatalog} searchSettings={searchSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
        <Columns>
          <Column field='BookID' headerText='Book ID' width='100' textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} isPrimaryKey={true}/>
          <Column field='Title' headerText='Title' clipMode={ClipMode.EllipsisWithTooltip} width='130'/>
          <Column field='Author' headerText='Author' width='120'/>
          <Column field='Genre' headerText='Genre' width='90'/>
          <Column field='Language' headerText='Language' width='115'/>
          <Column field='PublishedYear' headerText='Published Year' textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} width='130'/>
          <Column field='Rating' headerText='Rating' textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} width='120'/>
        </Columns>
      </Grid>
    </div>
  );
}