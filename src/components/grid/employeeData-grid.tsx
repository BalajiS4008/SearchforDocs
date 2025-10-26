import { Grid, Column, Columns, ColumnTemplateProps, SortSettings, ClipMode, TextAlign } from '@syncfusion/react-grid';
import './employeeDetails.css';
import React, { useCallback, useMemo, useState } from 'react';
import { employeeData, Employee } from './employeeDetails';

export default function App() {
    // State to manage sort settings.  
    const [sortSettings] = useState<SortSettings>({enabled: true});

    // Template to render employee image based on EmployeeID.
    const imageTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        return (
            <div className='image'>
                <img src={`/images/grid/${(props?.data as Employee).EmployeeID}.png`} alt={(props?.data as Employee).EmployeeID} />
            </div>
        );
    }, []);

    return useMemo(() => (
        // Memoized Grid component to prevent unnecessary re-renders.
        <Grid dataSource={employeeData} sortSettings={sortSettings} height={315}>
            <Columns>
                <Column field='EmployeeID' headerText='Employee Image' width='150' template={imageTemplate} textAlign={TextAlign.Center} />
                <Column field='FirstName' headerText='Name' width='110' />
                <Column field='Title' headerText='Role' width='170' />
                <Column field='HireDate' headerText='Hire Date' width='110' format='yMd' textAlign={TextAlign.Right} />
                <Column field='Address' headerText='Address' width='150' clipMode={ClipMode.EllipsisWithTooltip}/>
                <Column field='Country' headerText='Country' width='100' />
            </Columns>
        </Grid>
    ), [imageTemplate]);
}
