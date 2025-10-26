import { Grid, Columns, Column, GridRef, RowEditEvent, DeleteEvent, RowAddEvent, SortSettings, FilterSettings, PageSettings, EditSettings, SaveEvent, EditType, TextAlign, FilterBarType } from '@syncfusion/react-grid';
import './console.css';
import { useState, useMemo, useCallback, useRef } from 'react';
import { foodNutritionList, NutritionEntry } from './nutritionDetails';
import { Button } from '@syncfusion/react-buttons';

export default function App() {
  const gridRef = useRef<GridRef>(null);
  // State to manage sort, filter, page, edit and toolbar settings.    
  const [filterSettings] = useState<FilterSettings>({ enabled: true });
  const [sortSettings] = useState<SortSettings>({ enabled: true });
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
  const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
  const foodIDRules = { required: true, number: true };
  const FiberRules = { required: true, min: 1, max: 100 };
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  // Handles row add event and cancels add if record count exceeds quota.
  const onRowAddStart = (args: RowAddEvent) => {
    if ((gridRef.current?.pagerModule?.totalRecordsCount ?? 0) >= 51) {
      args.cancel = true;
      setConsoleOutput(prev => [...prev, `"onRowAddStart" event triggered.`, `*${`Add action canceled since record count exceeds a quota "51"`}*.`]);
    }
    setConsoleOutput(prev => [...prev, `"onRowAddStart" event triggered.\n\n`]);
  };

  // Handles data change start event
  const onDataChangeStart = (args: DeleteEvent | SaveEvent) => {
    if(args.action === "delete") {
        if ('data' in args && Array.isArray(args.data)) {
        const records = args.data as NutritionEntry[];
        if (records[0]?.FoodName === "Pasta") {
          args.cancel = true;
          setConsoleOutput(prev => [...prev, `"onDataChangeStart" event triggered.`, `*${`Deletion canceled for column "FoodName" with value "Pasta"`}*.`]);
        }
        else {
          setConsoleOutput(prev => [...prev, `"onDataChangeStart" event triggered.`, `Delete Action Details: *${JSON.stringify(records[0])}*`]);
        }
      }
    }
    else if(args.action === "add") {
      setConsoleOutput(prev => [...prev, `"onDataChangeStart" event triggered.`, `Add Action Details: *{data: ${JSON.stringify((args as SaveEvent).data)}}*`]);
    }
    else {
      setConsoleOutput(prev => [...prev, `"onDataChangeStart" event triggered.`, `Edit Action Details: *{data: ${JSON.stringify((args as SaveEvent).data)}}*`]);
    }
  };

  // Handles row edit event and cancels edit if Fat >= 10.
  const onRowEditStart = useCallback((args: RowEditEvent) => {
    if ((args.data as NutritionEntry).Fat >= 10) {
      args.cancel = true;
      setConsoleOutput(prev => [...prev, `"onRowEditStart" event triggered.`, `*${`Editing canceled for column "Fat" which value is greater than or equal to 10`}*.`]);
    }
    else {
      setConsoleOutput(prev => [...prev, `"onRowEditStart" event triggered.\n\n`]);
    }
  }, []); // No dependencies.

  // Memoized handler for clearing the console.
  const clearConsole = useCallback(() => {
    setConsoleOutput([]);
  }, []);

  // Memoize the Grid to prevent re-renders
  const gridComponent = useMemo(() => (
    <Grid ref={gridRef} dataSource={foodNutritionList} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}
      onRowEditStart={onRowEditStart} onRowAddStart={onRowAddStart} onDataChangeStart={onDataChangeStart}>
      <Columns>
        <Column field='FoodID' headerText='Food ID' width='50' textAlign={TextAlign.Right} isPrimaryKey={true} filter={{ filterBarType: FilterBarType.NumericTextBox }} validationRules={foodIDRules} />
        <Column field='FoodName' headerText='Food Name' width='80' edit={{ type: EditType.DropDownList }} />
        <Column field='Protein' headerText='Protein (g)' textAlign={TextAlign.Right} edit={{ type: EditType.NumericTextBox }} filter={{ filterBarType: FilterBarType.NumericTextBox }} width='80' />
        <Column field='Fat' headerText='Fat (g)' textAlign={TextAlign.Right} edit={{ type: EditType.NumericTextBox }} filter={{ filterBarType: FilterBarType.NumericTextBox }} width='70' />
        <Column field='Fiber' headerText='Fiber (g)' textAlign={TextAlign.Right} edit={{ type: EditType.NumericTextBox }} filter={{ filterBarType: FilterBarType.NumericTextBox }} validationRules={FiberRules} width='70' />
        <Column field='Calories' headerText='Calories (kcal)' textAlign={TextAlign.Right} edit={{ type: EditType.NumericTextBox }} filter={{ filterBarType: FilterBarType.NumericTextBox }} width='80' />
      </Columns>
    </Grid>
  ), [onRowEditStart, onRowAddStart, onDataChangeStart]); // Depend only on event handlers

  return (
    <div>
      {gridComponent}
      <div className="console-container">
        <div className="console-header">
          <span className="console-title">
            Console
          </span>
          <Button onClick={clearConsole} disabled={consoleOutput.length === 0} >Clear</Button>
        </div>
        <div className="console-content">
          <pre>
            {consoleOutput.length === 0
              ? 'Interact with the grid by performing CRUD action and view event notifications.'
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
}