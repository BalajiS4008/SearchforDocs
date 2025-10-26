import { Grid, Columns, Column, ColumnTemplateProps, FilterSettings, SortSettings, PageSettings, ColumnType, FilterBarType, TextAlign } from '@syncfusion/react-grid';
import { Button } from '@syncfusion/react-buttons';
import { useState } from 'react';
import { useCallback, useMemo } from 'react';
import { assignedTasks, TaskItem } from './taskDetails';

export default function App() {
     // state to manage sort, filter and page settings.   
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount:4 });
    const [filterSettings] = useState<FilterSettings>({ enabled: true });
    /**
     * Cell template for the "Status" column.
     * Displays a button that shows task details on click.
     * @param props - Cell template arguments.
     */
    const columnTemplate = useCallback((props?: ColumnTemplateProps): string | React.ReactElement => {
        const handleViewClick = () => {
            const details = `Task: ${(props?.data as TaskItem).TaskName}
Priority: ${(props?.data as TaskItem).Priority}
        `.trim();
            alert(details);
        };
        const handleKeyDown = (args: React.KeyboardEvent) => {
            if (args.key === 'Enter') {
                args.stopPropagation();
                setTimeout(() => {
                    (args.target as HTMLElement).closest('td')?.focus();
                }, 0);
            }
        };

        return (
            <Button style={{letterSpacing:0}} onClick={handleViewClick} onKeyDown={handleKeyDown}>Custom Action</Button>
        )
    }, []);

    /**
     * Filter template for the "Status" column.
     * Returns an empty span.
     */
    const filterTemplate = useCallback(() => {
        return (
            <span></span>
        )
    }, []);

    return (
        <div>
            {
                useMemo(() => (
                    <Grid
                        dataSource={assignedTasks}
                        filterSettings={filterSettings}
                        sortSettings={sortSettings}
                        pageSettings={pageSettings}
                    >
                        <Columns>
                            <Column field="TaskName" headerText="Task Name" width={170}/>
                            <Column field="Priority" headerText="Priority" width={120} />
                            <Column field="DueDate" headerText="Due Date" format="yMd" textAlign={TextAlign.Right} type={ColumnType.Date} width={170} filter={{ filterBarType: FilterBarType.DatePicker }} />
                            <Column field="StartDate" headerText="Start Date" format="yMd" textAlign={TextAlign.Right} type={ColumnType.Date} width={170} filter={{ filterBarType: FilterBarType.DatePicker }} />
                            <Column field="AssignedTo" headerText="Assigned" width={120} />
                            <Column field="Status" headerText="Status" template={columnTemplate} filterTemplate={filterTemplate} width={170} />
                        </Columns>
                    </Grid>
                ), [])
            }
        </div>
    );
};
