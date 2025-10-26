import { Grid, Column, Columns, GridRef, FilterSettings, SortSettings, SearchSettings, TextAlign, ClipMode } from '@syncfusion/react-grid';
import { employeeInformation } from './employeeInformation';
import { TextBox, TextBoxChangeEvent } from "@syncfusion/react-inputs";
import { Button } from '@syncfusion/react-buttons';
import { useRef, useMemo, useState } from 'react';
import './employeeInformation.css';
import { PropertyColumn, PropertyPane, PropertyRow } from '../../common/property-pane';

export default function App() {
    // Initialize grid reference for accessing grid methods.
    const gridRef = useRef<GridRef>(null);
    // Initialize state for filter, sort, and search settings.   
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [searchSettings] = useState<SearchSettings>({ enabled: true });
    // Initialize state for TextBox input
    const [searchText, setSearchText] = useState<string>('');
    const isSearchActive = searchText.length > 0;
    // Trigger search in grid using textbox input.
    const clickHandler = () => {
        if (gridRef.current) {
            gridRef.current.search(searchText);
        }
    };
    // Clear the search in the grid.
    const clearSearch = () => {
        if (gridRef.current) {
            gridRef.current.search("");
        }
        setSearchText(''); // Clear the text box input.
    };
    // Handle TextBox input changes
    const handleInputChange = (args: TextBoxChangeEvent) => {
        setSearchText(args.value as string);
    };
    // Render search input, buttons, and grid component.
    return (
        <>
            <PropertyPane>
                <PropertyColumn>
                    <PropertyRow>
                        <div>
                            <TextBox id="searchtext" value={searchText} width={200} placeholder='Enter search text' className='employee-searchbox' onChange={handleInputChange} />
                            <Button onClick={clickHandler} disabled={!isSearchActive}>Search</Button>
                            <Button onClick={clearSearch} style={{ marginLeft: '10px' }} disabled={!isSearchActive}>Clear</Button>
                        </div>
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            {
                useMemo(() => (
                    <Grid ref={gridRef} dataSource={employeeInformation} searchSettings={searchSettings} filterSettings={filterSettings} sortSettings={sortSettings} height={300} >
                        <Columns>
                            <Column field="EmployeeID" headerText="Employee ID" width="100" textAlign={TextAlign.Right} isPrimaryKey={true}/>
                            <Column field="Name" headerText="Employee Name" width="120"/>
                            <Column field="Designation" headerText="Designation" width="100" clipMode={ClipMode.EllipsisWithTooltip}/>
                            <Column field="Department" headerText="Department" width="120" />
                            <Column field="Email" headerText="Email" width="180" clipMode={ClipMode.EllipsisWithTooltip}/>
                            <Column field="Location" headerText="Location" width="100"/>
                        </Columns>
                    </Grid>
                ), [])
            }
        </>
    );
}
