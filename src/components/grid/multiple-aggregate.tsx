import { Grid, Columns, Column, Aggregates, AggregateColumn, AggregateRow, FilterSettings, SortSettings, PageSettings, AggregateType, TextAlign, FilterBarType, ClipMode } from '@syncfusion/react-grid';
import { productData } from './productData';
import { ReactElement, useState } from 'react';

export default function App() {
  // Initialize state for filter, sort, and pagination settings.   
  const [filterSettings] = useState<FilterSettings>({enabled: true});
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount:4 });

  // Render footer template for sum aggregate.
  const footerSum = (props: object | undefined): ReactElement => {
    const typedProps = props as { Sum: number | string };
    return (<span>Sum: {typedProps.Sum}</span>);
  };

  // Render footer template for minimum aggregate.
  const footerMin = (props: object | undefined): ReactElement => {
    const typedProps = props as { Min: number | string };
    return (<span>Min: {typedProps.Min}</span>);
  };

  // Render footer template for maximum aggregate.
  const footerMax = (props: object | undefined): ReactElement => {
    const typedProps = props as { Max: number | string };
    return (<span>Max: {typedProps.Max}</span>);
  };
  // Render grid with product data, settings, and aggregates.
  return (
    <div>
     <Grid dataSource={productData} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings} >
        <Columns>
          <Column field="ProductID" headerText="ID" width="70" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
          <Column field="ProductName" headerText="Name" width="140" clipMode={ClipMode.EllipsisWithTooltip}/>
          <Column field="QuantityPerUnit" headerText="Quantity Per Unit" clipMode={ClipMode.EllipsisWithTooltip} width="120" />
          <Column field="UnitsSold" headerText="Units Sold" width="90" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
          <Column field="UnitPrice" headerText="Price Per Unit" width="110" format="C2" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
          <Column field="TotalCost" headerText="Total Cost" width="130" format="C2" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
        </Columns>
        <Aggregates>
          <AggregateRow>
            <AggregateColumn field='TotalCost' type={AggregateType.Sum} footerTemplate={footerSum} format='C2' />
          </AggregateRow>  
          <AggregateRow>
            <AggregateColumn field='TotalCost' type={AggregateType.Min} footerTemplate={footerMin} format='C2' />
          </AggregateRow>
          <AggregateRow>
            <AggregateColumn field='TotalCost' type={AggregateType.Max} footerTemplate={footerMax} format='C2' />
          </AggregateRow>          
      </Aggregates>
     </Grid>
   </div>
 );
}