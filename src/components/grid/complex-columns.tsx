import { Grid, Columns, Column, SortSettings, PageSettings, TextAlign } from '@syncfusion/react-grid';
import { complexData } from './employeeData';
import { useState } from 'react';

export default function App() {
    // State to manage sort and page settings.
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    return (
        <div>
            <Grid dataSource={complexData} sortSettings={sortSettings} pageSettings={pageSettings}>
                <Columns>
                    <Column field='EmployeeID' headerText='Employee ID' width='70' textAlign={TextAlign.Right} />
                    <Column field='Name.FirstName' headerText='First Name' width='70' />
                    <Column field='Name.LastName' headerText='Last Name' width='70' />
                    <Column field='Title' headerText='Role' width='120' />
                    <Column field='Country' headerText='Country' width='80' />
                </Columns>
            </Grid>
        </div>
    );
}