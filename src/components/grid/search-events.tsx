import { Grid, Columns, Column,  SearchSettings, SortSettings,  PageSettings, SearchEvent, TextAlign, ClipMode } from '@syncfusion/react-grid';
import './console.css';
import { useState, useCallback, useMemo } from 'react';
import { restaurantMenu } from './restaurantDetails';
import { Button } from '@syncfusion/react-buttons';

export default function App() {
  // Initialize state for filter, sort, search, toolbar and pagination settings.
  const [sortSettings] = useState<SortSettings>({ enabled: true});  
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  const [toolbarSettings] = useState<string[]>(['Search']);
  const [searchSettings] = useState<SearchSettings>({ enabled:true}); 
  // Initialize state for search event log.
  const [searchCompleteOutput, setSearchCompleteOutput] = useState<string[]>([]); 

  // Handle search event to log notifications.
  const onSearch = useCallback(( props:SearchEvent ) => {
    const searchInfo =  `{value: "${props.value}"}`;
    setSearchCompleteOutput(prev => [...prev, `"onSearch" event triggered.`, `Search Action Details: *${searchInfo}*`]);
  }, []);

  // Memoized handler for clearing the console.  
  const clearConsole = useCallback(() => {
    setSearchCompleteOutput([]);
  }, []);

  // Memoize grid component to optimize rendering.
  const gridComponent = useMemo(() => (
    <Grid dataSource={restaurantMenu} searchSettings={searchSettings} toolbar={toolbarSettings} 
      sortSettings={sortSettings}  onSearch={onSearch} pageSettings={pageSettings}>
      <Columns>
        <Column field="ItemID" headerText="Item Code" width={55} />
        <Column field="ItemName" headerText="Dish Name" width={80} />
        <Column field="Price" headerText="Cost" width={40} format="C2" textAlign={TextAlign.Right}  />
        <Column field="SpiceLevel" headerText="Spiciness" width={50} />
        <Column field="Description" headerText="Description" width={120} clipMode={ClipMode.EllipsisWithTooltip} />
      </Columns>
    </Grid>
  ), [ onSearch]); // Depend only on event handlers.

  return (
    <div>
      {gridComponent}
      <div className="console-container">
        <div className="console-header">
          <span className="console-title">
            Console
          </span>
          <Button onClick={clearConsole} disabled={searchCompleteOutput.length === 0}>Clear</Button>
        </div>
        <div className="console-content">
          <pre>
            {searchCompleteOutput.length === 0
            ? 'Apply a search action to view the search notification.'
            : searchCompleteOutput.map((line, index) => {
                  if (line.includes("*")) {
                      const parts = line.split('*');
                      return (
                          <div key={index}>
                              {parts[0]}
                              <i>{parts[1]}</i><br/><br/>
                          </div>
                      );
                  }
                  return <div key={index}>{line}</div>;
              })}
          </pre>
        </div>
      </div>
    </div>
  );
}
