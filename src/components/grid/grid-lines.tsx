import { Grid, Columns, Column, GridLine, SortSettings, ClipMode, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { useState, useCallback, useMemo } from 'react';
import { Button } from '@syncfusion/react-buttons';
import { employeeData } from './employeeDetails';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
    // Initialize grid line style and active button.
    const [lines, setLines] = useState<GridLine | string>(GridLine.Default);
    const [activeButton, setActiveButton] = useState<string>('Default');

    // Enable sorting functionality for the grid.
    const [sortSettings] = useState<SortSettings>({ enabled: true });

    // Handles button clicks to set the grid line style and update the active button.
    const handleButtonClick = useCallback((lineStyle: GridLine | string, buttonName: string) => {
        setLines(lineStyle);
        setActiveButton(buttonName);
    }, []);

    return (
        <>
            <PropertyPane>
                <PropertyColumn>
                    <PropertyRow>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Button onClick={() => handleButtonClick(GridLine.Default, 'Default')} disabled={activeButton === 'Default'}>Default</Button>
                            <Button onClick={() => handleButtonClick(GridLine.None, 'None')} disabled={activeButton === 'None'}>None</Button>
                            <Button onClick={() => handleButtonClick(GridLine.Both, 'Both')} disabled={activeButton === 'Both'}>Both</Button>
                            <Button onClick={() => handleButtonClick(GridLine.Horizontal, 'Horizontal')} disabled={activeButton === 'Horizontal'}>Horizontal</Button>
                            <Button onClick={() => handleButtonClick(GridLine.Vertical, 'Vertical')} disabled={activeButton === 'Vertical'}>Vertical</Button>
                        </div>
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            {
                useMemo(() => (
                    // Memoized Grid component to prevent unnecessary re-renders
                    <Grid dataSource={employeeData} sortSettings={sortSettings} gridLines={lines}>
                        <Columns>
                            <Column field='EmployeeID' headerText='Employee ID' width='100' textAlign={TextAlign.Right} />
                            <Column field='FirstName' headerText='First Name' width='90' />
                            <Column field='LastName' headerText='Last Name' width='90' />
                            <Column field='Title' headerText='Role' width='150' />
                            <Column field='Address' headerText='Address' width='130' clipMode={ClipMode.EllipsisWithTooltip}/>
                            <Column field='City' headerText='City' width='80' />
                            <Column field='HireDate' headerText='Hire Date' width='90' format={{ skeleton: 'yMd', type: ColumnType.Date }} textAlign={TextAlign.Right} />
                        </Columns>
                    </Grid>
                ), [lines])
            }
        </>
    );
};