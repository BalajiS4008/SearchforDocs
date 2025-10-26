import { Grid, Columns, Column, ColumnHeaderTemplateProps, FilterSettings, PageSettings, FilterBarType, ClipMode, TextAlign, ColumnType, CellClassProps, CellType } from '@syncfusion/react-grid';
import { useCallback, useMemo, useState } from 'react';
import './taskDetails.css';
import { assignedTasks } from './taskDetails';

export default function App() {
  // State to manage filter and page settings.    
  const [filterSettings] = useState<FilterSettings>({enabled: true});
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  /** 
   * Renders the header template for the Priority column with an SVG icon.
   * @returns A React element with the Priority header text and an SVG icon.
   */
  const priorityHeaderTemplate = useCallback((props?: ColumnHeaderTemplateProps) => {
    return (
      <div>
        { props?.column.headerText }
        <svg width="16" height="15" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 21V13M1 13V1H10L11.5 4H19V16H13L11 13H1Z" stroke="black" strokeWidth="2" strokeLinecap="square" />
        </svg>
      </div>
    );
  }, []);

  return (
    <div>
      {useMemo(
        /** 
         * Memoized Grid component to prevent unnecessary re-renders.
         * @returns The Syncfusion Grid component with a custom header template for the Priority column.
         */
        () => (
          <Grid dataSource={assignedTasks} className='task-management' filterSettings={filterSettings} pageSettings={pageSettings} >
            <Columns>
              <Column field="TaskName" headerText="Task Name" width="170" />
              <Column field="Priority" headerText="Priority" width="130" cellClass={(props?: CellClassProps)=>{return props?.cellType === CellType.Header ? 'customcss' : ''}} headerTemplate={priorityHeaderTemplate} />
              <Column field="AssignedTo" headerText="Assigned" width="140" />
              <Column field="Status" headerText="Status" width="120" />
              <Column field="StartDate" headerText="Start Date" format="yMd" type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} width="190" textAlign={TextAlign.Right} />
              <Column field="DueDate" headerText="Due Date" format="yMd" type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} width="190" textAlign={TextAlign.Right} />
              <Column field="EstimatedHours" headerText="Estimated Hours" width="110"  filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} clipMode={ClipMode.EllipsisWithTooltip} />
            </Columns>
          </Grid>
        ),
        [priorityHeaderTemplate]
      )}
    </div>
  );
};
