import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, FilterBarType, TextAlign } from '@syncfusion/react-grid';
import { DataManager, UrlAdaptor } from '@syncfusion/react-data';
import { useState } from 'react';

export default function App() {
    // Initialize remote data source using DataManager with UrlAdaptor.
    const data = new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
        adaptor: new UrlAdaptor(),
        crossDomain: true,
    });

    // state to manage sort, filter and page settings.   
    const [filterSettings] = useState<FilterSettings>({ enabled: true });
    const [sortSettings] = useState<SortSettings>({ enabled: true });
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 7, pageCount: 3 });

    return (
        <div>
            <Grid dataSource={data} sortSettings={sortSettings} pageSettings={pageSettings} filterSettings={filterSettings}>
                <Columns>
                     <Column field="EmployeeID" headerText="Employee ID" width={120} filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} />
                    <Column field="Employees" headerText="Employee Name" width={130}  />
                    <Column field="Designation" headerText="Designation" width={100}  />                   
                     <Column field="CurrentSalary" headerText="Salary" width={100} format="C2" filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} />
                    <Column field="Location" headerText="Location" width={100} />
                </Columns>
            </Grid>
        </div>
    );
};
