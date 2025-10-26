import { Grid, Columns, Column, SortEvent, PageEvent, FilterEvent, SearchEvent, RowSelectEvent, ActionType, ClipMode } from '@syncfusion/react-grid';
import './console.css';
import { useCallback, useMemo, useState } from 'react';
import { Button } from '@syncfusion/react-buttons';
import { employeeInformation } from './employeeInformation';

export default function App() {

    const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

    /**
     * Memoized handler for cell rendering.
     */
    const handleOnReady = useCallback(() => {
        setConsoleOutput(prev => [...prev, `"onGridRenderComplete" event triggered.\n\n`]);
    }, []);

    const handleOnRenderStart = useCallback(() => {
        setConsoleOutput(prev => [...prev, `"onGridRenderStart" event triggered.\n\n`]);
    }, []);

    const handleOnDataLoaded = useCallback(() => {
        if(consoleOutput.length === 0){
             setConsoleOutput(prev => [...prev, `"onDataLoad" event triggered.\n\n`]);

        }
        else{
             setConsoleOutput(prev => [...prev, `"onDataLoad" event triggered.\n\n`]);
        }
       
    }, []);

    const handleOnError = useCallback((args?: Error) => {
        setConsoleOutput(prev => [...prev, `"onError" event triggered: ${JSON.stringify(args)}.\n\n`]);
    }, []);

    const handleonPageChange = useCallback((prop: PageEvent) => {
        const pageType = `{currentPage: "${prop.currentPage}", previousPage: "${prop.previousPage}"}`;
        setConsoleOutput(prev => [...prev, `"onPageChange" event triggered.`, `Page Action Details: *${pageType}*`]);
    }, []);

    const handleonSort = useCallback((props: SortEvent) => {
        if (props.action === ActionType.Sorting) {
            const sortInfo = `{action: "${props.action}", field: "${props.field}", direction: "${props.direction}"}`;
            setConsoleOutput(prev => [...prev, `"onSort" event triggered.`, `Sort Action Details: *${sortInfo}*`]);
        } else if (props.action === ActionType.ClearSorting) {
            const sortInfo = `{action: "${props.action}"}`;
            setConsoleOutput(prev => [...prev, `"onSort" event triggered.`, `Sort Action Details: *${sortInfo}*`]);
        }
    }, []);

    const handleonFilter = useCallback((props: FilterEvent) => {
        if (props.action === ActionType.Filtering) {
            const filterInfo = `{action: "${props.action}", field: "${props.currentFilterColumn?.field}", value: "${props.currentFilterPredicate?.value}"}`;
            setConsoleOutput(prev => [...prev, `"onFilter" event triggered.`, `Filter Action Details: *${filterInfo}*`]);
        } else if (props.action === ActionType.ClearFiltering) {
            const filterInfo = `{action: "${props.action}", field: "${props.currentFilterColumn?.field}"}`;
            setConsoleOutput(prev => [...prev, `"onFilter" event triggered.`, `Filter Action Details: *${filterInfo}*`]);
        }
    }, []);

    const handleonSearch = useCallback((props: SearchEvent) => {
        const searchInfo = `{value: "${props.value}"}`;
        setConsoleOutput(prev => [...prev, `"onSearch" event triggered.`, `Search Action Details: *${searchInfo}*`]);
    }, []);

    const handleonRowSelect = useCallback((prop:RowSelectEvent) => {
      const rowSelectType = prop.selectedCurrentRowIndexes?.length || prop.selectedRowIndexes?.length ? `{selectedCurrentRowIndexes: [${prop.selectedCurrentRowIndexes}], selectedRowIndexes: [${prop.selectedRowIndexes}]}`: `{selectedRowIndex: ${prop.selectedRowIndex}}`
      setConsoleOutput(prev => [...prev, `"onRowSelect" event triggered.`, `RowSelect Action Details: *${rowSelectType}*`]);
    }, []);
    // Handle row deselection event.
    const handleonRowDeselect = useCallback((prop:RowSelectEvent) => {
      const rowDeSelectType = prop.deSelectedCurrentRowIndexes?.length ? `{deSelectedCurrentRowIndexes: [${prop.deSelectedCurrentRowIndexes}]}`: `{deSelectedRowIndex: ${prop.deSelectedRowIndex}}` 
      setConsoleOutput(prev => [...prev, `"onRowDeselect" event triggered.`, `RowDeselect Action Details: *${rowDeSelectType}*`]);
    }, []);

    /**
     * Memoized handler for clearing the console.
     */
    const clearConsole = useCallback(() => {
        setConsoleOutput([]);
    }, []);

    // Memoize the Grid to prevent re-renders
    const gridComponent = useMemo(() => (
        <Grid dataSource={employeeInformation} sortSettings={{ enabled: true }} filterSettings={{ enabled: true }} pageSettings={{ enabled: true }} selectionSettings={{ mode: 'Multiple'}}
            searchSettings={{ enabled: true }} toolbar={['Search']} onGridRenderComplete={handleOnReady} onGridRenderStart={handleOnRenderStart} onError={handleOnError}
            onSort={handleonSort} onSearch={handleonSearch} onRowDeselect={handleonRowDeselect} onRowSelect={handleonRowSelect}
            onFilter={handleonFilter} onDataLoad={handleOnDataLoaded} onPageChange={handleonPageChange} clipMode={ClipMode.EllipsisWithTooltip}
        >
            <Columns>
                <Column field="EmployeeID" headerText="Employee ID" />
                <Column field="Name" headerText="Name" />
                <Column field='Designation' headerText='Designation' />
                <Column field="Department" headerText="Department" />
                <Column field="ReportingPerson" headerText="Reports To" />
                <Column field="Location" headerText="Location" />
            </Columns>
        </Grid>
    ), [handleOnReady, handleonSort, handleonSearch, handleonRowDeselect, handleOnRenderStart, handleOnError,
        handleOnDataLoaded, handleonSort, handleonSearch, handleonFilter]);

    return (
        <div>
            {gridComponent}
            <div className="console-container">
                <div className="console-header">
                    <span className="console-title">
                        Console
                    </span>
                    <Button onClick={clearConsole} disabled={consoleOutput.length === 0}>Clear</Button>
                </div>
                <div className="console-content">
                    <pre style={{ whiteSpace: 'pre-line' }}>
                        {consoleOutput.length === 0
                            ? 'Interact with the grid by performing paging, sorting or filtering to view event notifications.'
                            : consoleOutput.map((line, index) => {
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
};
