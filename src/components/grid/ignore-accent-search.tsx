import { Grid, Column, Columns, SearchSettings, SortSettings,  PageSettings, ClipMode } from '@syncfusion/react-grid';
import { contractPortfolio } from './supplierContractDetails';
import { useState } from 'react';

export default function App() {
  // Initialize state for sort, search, toolbar, and pagination settings.
  const [sortSettings] = useState<SortSettings>({ enabled: true});  
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  const [toolbarSettings] = useState<string[]>(['Search']);
  const [searchSettings] = useState<SearchSettings>({ enabled:true, ignoreAccent: true});
   
  // Render grid with supplier contract data and configured settings.
  return (
    <div>
      <Grid id="grid" dataSource={contractPortfolio}  searchSettings={searchSettings} toolbar={toolbarSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
        <Columns>
          <Column field="ContractID" headerText="Contract ID" width={120} />
          <Column field="SupplierName" headerText="Supplier Name" width={130} />
          <Column field="ContractType" headerText="Contract Type" width={120} />
          <Column field="Address" headerText="Address" clipMode={ClipMode.EllipsisWithTooltip} width={190} />
          <Column field="Country" headerText="Country"  width={120} /> 
        </Columns>
      </Grid>
    </div>
  );
}
