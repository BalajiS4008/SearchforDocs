import { useState } from 'react';
import { Grid, Columns, Column, FilterSettings, PageSettings, SortSettings, FilterBarType, ClipMode, TextAlign } from '@syncfusion/react-grid';
import { innovationRecords } from './manufacturingDetails';
import { Button } from '@syncfusion/react-buttons';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
  // State to toggle row hover effect.
  const [hoverEnabled, setHoverEnabled] = useState(true);

 // State to enable filtering in the grid.
  const [filterSettings] = useState<FilterSettings>({ enabled: true });
  // State to enable sorting in the grid.
  const [sortSettings] = useState<SortSettings>({ enabled: true }); 

  // State to enable paging with page size and count.
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });

  return (
    <>
      <PropertyPane>
        <PropertyColumn>
          <PropertyRow>
            <div>
              <Button onClick={() => setHoverEnabled(prev => !prev)}>
                {hoverEnabled ? 'Disable Row Hover' : 'Enable Row Hover'}
              </Button>
            </div>
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <Grid dataSource={innovationRecords} enableHover={hoverEnabled} pageSettings={pageSettings} filterSettings={filterSettings} sortSettings={sortSettings} >
        <Columns>
        <Column field="MachineID" headerText="Machine ID" width="110" />
          <Column field="OperatorID" headerText="Operator ID" width="120"/>
          <Column field='Temperature' headerText='Temperature (°C)' format={'N'} width='140' filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} clipMode={ClipMode.EllipsisWithTooltip}/>
           <Column field='Vibration' headerText='Vibration (mm/s)' format={'N'} width='150' filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} clipMode={ClipMode.EllipsisWithTooltip}/>
           <Column field="EnergyConsumption" headerText="Energy (kWh)" filter={{filterBarType:FilterBarType.NumericTextBox}} width="130" textAlign={TextAlign.Right}/>
           <Column field="OutputUnits" headerText="Output Units" width="120" filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} clipMode={ClipMode.EllipsisWithTooltip} />
          <Column field="Status" headerText="Status" width="120" />
        </Columns>
      </Grid>
    </>
  );
}
