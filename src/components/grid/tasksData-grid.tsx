import { useState, useCallback, useMemo } from 'react';
import { Grid, Column, Columns, ColumnTemplateProps, SortSettings, TextAlign } from '@syncfusion/react-grid';
import { Button } from '@syncfusion/react-buttons';
import './tasksData.css';
import { tasksData, TaskDetail } from './tasksData';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
  // state to manage sort settings.
  const [sortSettings] = useState<SortSettings>({enabled: true});

  // State to toggle between progress bar and percentage text.
  const [useProgressBar, setUseProgressBar] = useState(true);

  // Template to render progress either as a bar or percentage text.
  const progressTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    if (useProgressBar) {
      const progressValue = (props?.data as TaskDetail).Progress * 100;
      const displayValue = Math.round(progressValue);
      return (
        <div id="myProgress" className="pbar">
          <div id="myBar" className="bar" style={{ width: progressValue + '%' }}>
            <div id="pbarlabel" className="barlabel">{displayValue + '%'}</div>
          </div>
        </div>
      );
    }
    const displayProgress = Math.round((props?.data as TaskDetail).Progress * 100);
    return <span>{displayProgress}%</span>;
  }, [useProgressBar]);

  return useMemo(() => (
    // Memoized Grid component to prevent unnecessary re-renders.
    <>
      <PropertyPane position="top" >
        <PropertyColumn>
          <PropertyRow>
            <div>
              <Button onClick={() => setUseProgressBar(!useProgressBar)}>
                Toggle Template
              </Button>
            </div>
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <Grid dataSource={tasksData.slice(0,15)} className='tasksData' sortSettings={sortSettings} rowHeight={52} height={320}>
        <Columns>
          <Column field="TaskID" headerText="ID" width="80" textAlign={TextAlign.Right} />
          <Column field="TaskName" headerText="Task Name" width="150" />
          <Column field="Progress" headerText="Progress" format="P0" width="220" template={progressTemplate} />
          <Column field="AssignedTo" headerText="Assignee" width="90" />
          <Column field="Priority" headerText="Priority" width="90" />
          <Column field="Deadline" headerText="Deadline" width="100" format="yMd" textAlign={TextAlign.Right} />
        </Columns>
      </Grid>
    </>
  ), [progressTemplate, useProgressBar]);
}
