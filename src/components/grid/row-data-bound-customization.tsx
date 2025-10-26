import { useCallback, useMemo, useRef, useState} from 'react';
import { Grid, Columns, Column, RowClassProps, GridRef, ColumnTemplateProps, SelectionSettings, FilterSettings, FilterBarType, TextAlign, ColumnType } from '@syncfusion/react-grid';
import './supplierContractDetail.css';
import { contractPortfolio, SupplierContract } from './supplierContractDetails';
import { Button } from '@syncfusion/react-buttons';

export default function App() {
  // Reference to the Syncfusion Grid instance.
  const gridRef = useRef<GridRef | null>(null);

  // State to enable filtering in the grid.
  const [filterSettings] = useState<FilterSettings>({ enabled: true }); 

  // State to disable row selection in the grid.
  const [selectionSettings] = useState<SelectionSettings>({ enabled: false }); 

  // Returns a button template for the Actions column.
  const actionsTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    const handleViewClick = () => {
      if ((props?.data as SupplierContract).Status !== 'Active') {
        gridRef.current?.setCellValue?.((props?.data as SupplierContract).ContractID, 'Status', 'Active', true);
      }
    };
    const handleKeyDown = (args: React.KeyboardEvent) => {
      if (args.key === 'Enter') {
        args.stopPropagation();
        setTimeout(() => {
          (args.target as HTMLElement).closest('td')?.focus();
        }, 0);
      }
    };
    if ((props?.data as SupplierContract).Status !== 'Active') {
     return (
        <div>
        <Button onClick={handleViewClick} onKeyDown={handleKeyDown}>Renew</Button>
        </div>
      );
  }
   else {
      return (
       <div>
         <Button disabled>Renew</Button>
       </div>
      );
    }
  }, []);
 
  // Returns the CSS class for rows based on contract status.
  const getRowClass = useCallback((props?: RowClassProps): string => {
    const data = props?.data as SupplierContract;
    const status = data?.Status;
    
    if (status === 'Pending') {
      return 'sf-pending-status';
    } else if (status === 'Expired') {
      return 'sf-expired-status';
    } else if (status === 'Cancelled') {
      return 'sf-cancel-status';
    }
    return '';
  }, []);
  return useMemo(() => (
    // Memoized Grid component to prevent unnecessary re-renders.
    <div>
    <Grid ref={gridRef} dataSource={contractPortfolio.slice(0,10)}
      rowClass={getRowClass}
      className="custom-row"
      selectionSettings = {selectionSettings}
      filterSettings={filterSettings}
      enableHover={false}
    >
    <Columns>
      <Column field="ContractID" headerText="Contract ID" width={80} isPrimaryKey={true} textAlign={TextAlign.Right} />
      <Column field="SupplierName" headerText="Supplier Name" width={100} />
      <Column field="Country" headerText="Country" width={90} />
      <Column field="StartDate" headerText="Start Date" textAlign={TextAlign.Right} format="yMd" type={ColumnType.Date} filter={{filterBarType:FilterBarType.DatePicker}} width={120} />
      <Column field="Status" headerText="Status" width={80} />
      <Column headerText="Actions" width={100} textAlign={TextAlign.Center} template={actionsTemplate} />
    </Columns>
    </Grid>
    </div>
  ), [actionsTemplate, getRowClass]);
}
