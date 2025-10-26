import { Grid, Columns, Column, FilterSettings, SortSettings, PageSettings, FilterBarType, TextAlign } from '@syncfusion/react-grid';
import { useState } from 'react';
import { innovationRecords } from './manufacturingDetails';

export default function App() {
    // State to enable sorting in the grid.
    const [sortSettings] = useState<SortSettings>({ enabled: true }); 

    // State to enable paging with page size and count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
     
    // State to enable filtering with case sensitivity.
    const [filterSettings] = useState<FilterSettings>({
        enabled: true,
        caseSensitive: true
    });

    return (
        <div>
        <Grid
            dataSource={innovationRecords}
            pageSettings={pageSettings}
            filterSettings={filterSettings} 
            sortSettings={sortSettings}
          >
            <Columns>
                <Column field="MachineID" headerText="Machine ID" width="115" textAlign={TextAlign.Right} /> 
                <Column field="Stage" headerText="Stage" width="95" />
                <Column field="EnergyConsumption" headerText="Energy Consumption (kWh)" width="220" filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} />
                <Column field="Temperature" headerText="Temperature (°C)" width="155" filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} />
                <Column field="UnitCost" headerText="Unit Cost" format="C2" width="130" filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} />
                <Column field="TotalCost" headerText="Total Cost" format="C2" width="130" filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} />
            </Columns>
          </Grid>
        </div>
    );
};