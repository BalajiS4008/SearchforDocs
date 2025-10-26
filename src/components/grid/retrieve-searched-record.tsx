import { Grid, GridRef, Columns, Column, SearchEvent, SearchSettings, SortSettings, PageSettings, TextAlign, FilterBarType } from '@syncfusion/react-grid';
import './console.css';
import { useState, useCallback, useRef, MouseEventHandler, useMemo } from 'react';
 import { medicalHistory } from './healthCareDetails';
import { Button } from '@syncfusion/react-buttons';
import { PropertyColumn, PropertyPane, PropertyRow } from '../../common/property-pane';

export default function App() {
      const gridRef = useRef<GridRef>(null);
  // Initialize state for filter, sort, search, toolbar, and pagination settings.
  const [sortSettings] = useState<SortSettings>({ enabled: true});   
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  const [toolbarSettings] = useState<string[]>(['Search']);
  const [searchSettings] = useState<SearchSettings>({ enabled:true});
  const [isSearchActive, setIsSearchActive] = useState(false);
  // Initialize state for search event log.
  const [searchStartOutput, setSearchedOutput] = useState<string[]>([]);
  const lastSearchStringRef = useRef<string | undefined>('');
  // Capture search string on search event.
  const onSearch = useCallback((args: SearchEvent) => {
    setIsSearchActive(!!args.value);
    lastSearchStringRef.current = args.value;
  }, []);

  // Executes a manual search using the last search string and logs the results.
  const getSearchedRecords: MouseEventHandler<HTMLButtonElement> = () => {
    const searchString = lastSearchStringRef.current;
    if (searchString) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const output = [
          `Searched records for "${searchString}":\n`,
          JSON.stringify(gridRef.current?.getData(false), null, 2)
        ];
        setSearchedOutput(prev => [...prev, ...output]);
    }
  };

  // Clear console log.
  const clearConsole = useCallback(() => {
    setSearchedOutput([]);
  }, []);

  // Render grid, search button, and console for search results.
  const gridComponent = useMemo(() => (
    <Grid ref={gridRef} dataSource={medicalHistory} searchSettings={searchSettings} toolbar={toolbarSettings} sortSettings={sortSettings} onSearch={onSearch} pageSettings={pageSettings}>
      <Columns>
        <Column field="PatientID" headerText="Patient ID" width="90" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
        <Column field="LastName" headerText="Patient Name" width="110" />
        <Column field="MedicalCondition" headerText="Diagnosis" width="90" />
        <Column field="InsuranceProvider" headerText="Insurance Provider" width="120" />
        <Column field="VisitCount" headerText="Visit Count" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} width="90" />
        <Column field="City" headerText="City" width="90" />      
      </Columns>
    </Grid>
  ), [onSearch]); // Depend only on event handlers.

  return (
    <>
      <PropertyPane>
        <PropertyColumn>
          <PropertyRow>
            <div>
              <Button onClick={getSearchedRecords} disabled={!isSearchActive}>Get searched records</Button>
            </div>
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <div>
        {gridComponent}
      <div className="console-container">
        <div className="console-header">
          <span className="console-title">
            Console
          </span>
          <Button onClick={clearConsole} disabled={searchStartOutput.length === 0}>Clear</Button>
        </div>
        <div className="console-content">
          <pre>
            {searchStartOutput.length === 0
              ? 'Apply a search action to view the searched records details.'
              : searchStartOutput.join('\n')}
          </pre>
        </div>
      </div>
      </div>

    </>
  );
}

