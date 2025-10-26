import { Grid, Columns, Column, FilterSettings, SortSettings, ValueType, TextAlign, ClipMode, FilterBarType, ColumnType } from '@syncfusion/react-grid';
import { employeePerformanceData } from './employeePerformanceData';
import { useState } from 'react';

export default function App() {
    // Initialize state for filter, and sort settings.   
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});

    // Custom sort comparer for the Task column.
    const sortComparer = (referenceValue: ValueType, comparerValue: ValueType, _refObj?: object, _?: object, sortDirection?: string): number => {
        if (referenceValue < comparerValue && sortDirection === 'Ascending') {
            return -1;
        }
        if (referenceValue > comparerValue && sortDirection === 'Ascending') {
            return 1;
        }
        if (referenceValue < comparerValue && sortDirection === 'Descending') {
          return 1;
        }
        if (referenceValue > comparerValue && sortDirection === 'Descending') {
            return -1;
        }
        return 0;
    };
    // Render grid with employee data and configured settings.
    return (
        <div>
            <Grid dataSource={employeePerformanceData} sortSettings={sortSettings} filterSettings={filterSettings} height={330}>
                <Columns>
                    <Column field="EmployeeID" headerText="ID" width="90" textAlign={TextAlign.Right} />
                    <Column field="Name" headerText="Name" width="120" />
                    <Column field="Task" headerText="Tasks Completed" width="130" textAlign={TextAlign.Right} sortComparer={sortComparer} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
                    <Column field="JoinDate" headerText="Join Date" width="160" textAlign={TextAlign.Right} format="yMd" type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} />
                    <Column field="Role" headerText="Role" width="120" clipMode={ClipMode.EllipsisWithTooltip} />
                    <Column field="Salary" headerText="Salary" format="C2" textAlign={TextAlign.Right} width="110" />
                </Columns>
            </Grid>
        </div>
    );
};

