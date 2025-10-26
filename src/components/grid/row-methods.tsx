import { Grid, Columns, Column, GridRef,  SortSettings, SelectionSettings, TextAlign } from '@syncfusion/react-grid';
import './console.css';
import { useRef, useState, useMemo, useCallback } from 'react';
import { Button } from '@syncfusion/react-buttons';
import { employeePerformanceData, EmployeeDetails } from './employeePerformanceData';
import React from 'react';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

const GridComponent = React.memo(({ gridRef, data, sortSettings, selectionSettings, onRowSelected, onRowDeselected }: { gridRef: React.Ref<GridRef>, data: EmployeeDetails[], sortSettings: SortSettings, selectionSettings: SelectionSettings, onRowSelected: () => void, onRowDeselected: () => void }) => (
  <Grid
    ref={gridRef}
    dataSource={data}
    sortSettings={sortSettings}
    selectionSettings={selectionSettings}
    onRowSelect={onRowSelected}
    onRowDeselect={onRowDeselected}
    className="row-methods"
  >
    <Columns>
      <Column field="EmployeeID" headerText="Employee ID" textAlign={TextAlign.Right} width="70" />
      <Column field="Name" headerText="Name" width="90" />
      <Column field="Role" headerText="Role" width="90" />
      <Column field="Department" headerText="Department" width="70" />
      <Column field="Salary" headerText="Salary" format="C2" width="60" textAlign={TextAlign.Right} />
      <Column field="PerformanceRating" headerText="Rating" width="50" textAlign={TextAlign.Right} />
    </Columns>
  </Grid>
));

const ButtonsComponent = React.memo(({ logRowByIndex, logRowsObject, isRowSelected }: { logRowByIndex: () => void, logRowsObject: () => void, isRowSelected: boolean }) => (
  <div>
    <Button onClick={logRowByIndex} style={{ marginLeft: '10px' }} disabled={!isRowSelected}>
      Get selected row index
    </Button>
    <Button onClick={logRowsObject} style={{ marginLeft: '10px' }} disabled={!isRowSelected}>
      Get selected records
    </Button>
  </div>
));

const ConsoleComponent = React.memo(({ output, clearOutput }: { output: string, clearOutput: () => void }) => (
  <div className="console-container">
    <div className="console-header">
      <span className="console-title">Console</span>
      <Button onClick={clearOutput} disabled={output === 'Select the rows and press the button to view details of the selected rows.'}>Clear</Button>
    </div>
    <div className="console-content">
      <pre>{output}</pre>
    </div>
  </div>
));

export default function App() {
  const gridRef = useRef<GridRef>(null);
  const [output, setOutput] = useState<string>('Select the rows and press the button to view details of the selected rows.');
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [selectionSettings] = useState<SelectionSettings>({ enabled: true, mode: 'Multiple' });
  const [sortSettings] = useState<SortSettings>({ enabled: true });
  const data: EmployeeDetails[] = useMemo(() => employeePerformanceData.slice(0, 6) as EmployeeDetails[], []);

  const handleRowSelection = useCallback(() => {
    if (gridRef.current) {
      const selectedIndexes = gridRef.current.getSelectedRowIndexes();
      setIsRowSelected(selectedIndexes.length > 0);
    }
  }, []);

  const logRowByIndex = useCallback(() => {
    if (gridRef.current) {
      const selectedIndexes = gridRef.current.getSelectedRowIndexes();
      if (!selectedIndexes || selectedIndexes.length === 0) {
        setOutput('No record selected in the grid');
      } else if (!selectedIndexes || selectedIndexes.length === 1){
        setOutput(`Selected Row Index: ${selectedIndexes}\n`);
      }
      else {
        setOutput(`Selected Rows Indexes: [${selectedIndexes}]\n`);
      }
    } else {
      setOutput('');
    }
  }, []);

  const logRowsObject = useCallback(() => {
    if (gridRef.current) {
      const rowsObj: EmployeeDetails[] =  gridRef.current.getSelectedRecords() as EmployeeDetails[];
      if (!rowsObj || rowsObj.length === 0) {
        setOutput('No rows found in the grid');
        return;
      }
      const allRowsObjectText = rowsObj.map((rowObj, index) => {
        return `Row ${index + 1}:\n${JSON.stringify(rowObj, null, 2)}`;
      }).join('\n\n');
      if (rowsObj.length === 1){
        setOutput(`Selected Row: ${rowsObj.length}\n\n${allRowsObjectText}`);
      }
      else {
        setOutput(`Selected Rows: [${rowsObj.length}]\n\n${allRowsObjectText}`);
      }
    }
  }, []);

  const clearOutput = useCallback(() => {
    setOutput('Select the rows and press the button to view details of the selected rows.');
  }, []);

  return (
    <>
      <PropertyPane>
        <PropertyColumn>
          <PropertyRow>
            <ButtonsComponent logRowByIndex={logRowByIndex} logRowsObject={logRowsObject} isRowSelected={isRowSelected} />
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <div>
        <GridComponent
          gridRef={gridRef}
          data={data}
          sortSettings={sortSettings}
          selectionSettings={selectionSettings}
          onRowSelected={handleRowSelection}
          onRowDeselected={handleRowSelection}
        />
        <ConsoleComponent output={output} clearOutput={clearOutput} />
      </div>
    </>
  );
}
