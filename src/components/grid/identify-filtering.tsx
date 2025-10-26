import { Grid, Columns, Column,  FilterEvent, FilterSettings, SortSettings, PageSettings, ColumnType, TextAlign, FilterBarType, ClipMode, ActionType } from '@syncfusion/react-grid';
import { useCallback, useMemo, useState } from 'react';
import './console.css';
import { contractPortfolio } from './supplierContractDetails';
import { Button } from '@syncfusion/react-buttons';

export default function App() {
    const [eventLog, setEventLog] = useState<string[]>([]);
    
    // State to enable filtering with 'OnEnter' mode.
    const [filterSettings] = useState<FilterSettings>({ enabled: true });

    // State to enable sorting in the grid.
    const [sortSettings] = useState<SortSettings>({ enabled: true }); 

    // State to enable paging with page size and count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 7, pageCount: 4 }); 

    //Handles the filter complete event and updates the output message.
    const onFilterEnd = useCallback((props: FilterEvent) => {
        if (props.action === ActionType.Filtering) {
            const filterInfo = `{action: "${props.action}", field: "${props.currentFilterColumn?.field}", value: "${props.currentFilterPredicate?.value}"}`;
            setEventLog(prev => [...prev, `"onFilter" event triggered.`, `Filter Action Details: *${filterInfo}*`]);
        } else if (props.action === ActionType.ClearFiltering) {
            const filterInfo = `{action: "${props.action}", field: "${props.currentFilterColumn?.field}"}`;
            setEventLog(prev => [...prev, `"onFilter" event triggered.`, `Filter Action Details: *${filterInfo}*`]);
        }
    }, []);

    // Memoized handler for clearing the console.
    const clearConsole = useCallback(() => {
        setEventLog([]);
    }, []);

    // Memoize the Grid to prevent re-renders.
    const gridComponent = useMemo(() => (
        <Grid dataSource={contractPortfolio} pageSettings={pageSettings} filterSettings={filterSettings}  onFilter={onFilterEnd} sortSettings={sortSettings} >
            <Columns>
                <Column field="ContractID" headerText="Contract ID" width={100} />
                <Column field="SupplierName" headerText="Supplier Name" width={120} clipMode={ClipMode.EllipsisWithTooltip}/>
                <Column field="Status" headerText="Status" width={110} />
                <Column field="StartDate" headerText="Start Date"  width={180} type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} format="yMd" textAlign={TextAlign.Right} /> 
                <Column field="EndDate" headerText="End Date" type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} width={180} format="yMd" textAlign={TextAlign.Right} />
                <Column field="Amount" headerText="Amount" format="C2" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} width={100} />
            </Columns>
        </Grid>
    ), [onFilterEnd]); // Depend only on event handlers.

    return (
        <div>
            {gridComponent}
            <div className="console-container">
                <div className="console-header">
                    <span className="console-title">
                        Console
                    </span>
                    <Button onClick={clearConsole} disabled={eventLog.length === 0}>Clear</Button>
                </div>
                <div className="console-content">
                    <pre>
                        {eventLog.length === 0
                        ? 'Apply a filter to any column and view the filtering notification.'
                        : eventLog.map((line, index) => {
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
