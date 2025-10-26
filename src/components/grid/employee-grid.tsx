import { useState, useMemo } from 'react';
import { Grid, Column, Columns, ColumnProps, TextAlign, ColumnType, CellClassProps, CellType } from '@syncfusion/react-grid';
import { Button } from '@syncfusion/react-buttons';
import './employeeInformationData.css';
import { teamMembers } from './employeeInformationData';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
  // Initial column configuration.
  const initialColumns: ColumnProps[] = [
    { field: 'EmployeeID', headerText: 'Employee ID', width: '120', textAlign: TextAlign.Right },
    { field: 'Name', headerText: 'Name', width: '130' },
    { field: 'Role', headerText: 'Role', width: '150' },
    { field: 'JoiningDate', headerText: 'Join Date', format:'yMd', type:ColumnType.Date, textAlign: TextAlign.Right, width: '120' },
    { field: 'Department', headerText: 'Department', width: '150' },
  ];

  const [columns, setColumns] = useState(initialColumns);

  // Check if Salary column exists.
  const hasSalaryColumn = useMemo(() => 
    columns.some(col => col.field === 'Salary'), 
    [columns]
  );

  // Returns the CSS class for Salary cells.
  const getSalaryCellClass = (props?: CellClassProps): string => {
    return props?.cellType === CellType.Content ? 'sf-salary-highlight' : (props?.cellType === CellType.Header ? 'sf-salary-header' : '');
  };

  // Adds the Salary column if not already present.
  const addSalaryColumn = () => {
    if (!hasSalaryColumn) {
      setColumns([...columns, { field: 'Salary', headerText: 'Salary', width: '130', format: 'C', cellClass: getSalaryCellClass }]);
    }
  };

  // Removes the Salary column if present.
  const removeSalaryColumn = () => {
    setColumns(columns.filter(col => col.field !== 'Salary'));
  };

  return useMemo(() => (
    // Memoized Grid component to prevent unnecessary re-renders.
    <>
      <PropertyPane position="top" >
        <PropertyColumn>
          <PropertyRow>
            <div>
              <Button
                onClick={addSalaryColumn}
                style={{ marginRight: '10px' }}
                disabled={hasSalaryColumn}
              >
                Add Salary Column
              </Button>
              <Button
                onClick={removeSalaryColumn}
                disabled={!hasSalaryColumn}
              >
                Remove Salary Column
              </Button>
            </div>
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <Grid dataSource={teamMembers} className='employee' 
          height={320} allowKeyboard={false} >
        <Columns>
          {columns.map((col, index) => (
            <Column key={index} {...col} />
          ))}
        </Columns>
      </Grid>
    </>
  ), [columns]);
}
