import { Grid, Columns, Column,  PageSettings, ClipMode, TextAlign } from '@syncfusion/react-grid';
import './supplierContractDetails.css';
import { contractPortfolio } from './supplierContractDetails';
import { useState } from 'react';

export default function App() {
      
  // Initialize page settings with pagination enabled, page size, and count.
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  
  return (
    <div>
      <Grid dataSource={contractPortfolio}  pageSettings={pageSettings} className='supplier-contracts' >
        <Columns>
          <Column field="ContractID" headerText="Contract ID" width={120} />
          <Column field="SupplierName" headerText="Supplier Name" width={130} clipMode={ClipMode.EllipsisWithTooltip}/>
          <Column field="Status" headerText="Status" width={90} />
          <Column field="StartDate" headerText="Start Date" width={110} format="yMd" textAlign={TextAlign.Right} /> 
          <Column field="EndDate" headerText="End Date" width={110} format="yMd" textAlign={TextAlign.Right} />
          <Column field="Amount" headerText="Amount" format="C2" textAlign={TextAlign.Right} width={100} />
          <Column field="Address" headerText="Address" width={130} clipMode={ClipMode.EllipsisWithTooltip}/>
        </Columns>
      </Grid>
    </div>
  );
};