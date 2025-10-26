 import { Grid, Columns, Column, Aggregates, AggregateColumn, AggregateRow, SortSettings, PageSettings, TextAlign, AggregateType } from '@syncfusion/react-grid';
 import { productSalesDetails } from './productSalesDetails';
 import { ReactElement, useState } from 'react';

 export default function App() {
  // Initialize state for sort, and pagination settings.  
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
    return (<span>Min: {typedProps.Min}</span>)
  }

  // Render footer template for maximum aggregate.
  const footerMax = (props: object | undefined): ReactElement => {
    const typedProps = props as { Max: number | string };
    return (<span>Max: {typedProps.Max}</span>)
  }

  // Render footer template for count aggregate.
  const footerCount = (props: object | undefined): ReactElement => {
    const typedProps = props as { Count: number | string };
    return (<span>Count: {typedProps.Count}</span>)
  }

  // Render footer template for trueCount aggregate.
  const footerTrueCount = (props: object | undefined): ReactElement => {
    const typedProps = props as { TrueCount: number | string };
    return (<span>TrueCount: {typedProps.TrueCount}</span>)
  }
  // Render grid with product sales data, settings, and aggregates.
  return (
    <div>
    <Grid dataSource={productSalesDetails} sortSettings={sortSettings} pageSettings={pageSettings} >
      <Columns>
        <Column field="SaleID" headerText="Sale ID" width="100" textAlign={TextAlign.Right}/>
        <Column field="ProductName" headerText="Product Name" width="135" />
        <Column field="Category" headerText="Category" width="135" />
        <Column field="SalesPerson" headerText="Sales Person" width="125" />
        <Column field="UnitsSold" headerText="Units Sold" width="110" textAlign={TextAlign.Right} />
        <Column field="UnitPrice" headerText="Unit Price" format="C2" width="120" textAlign={TextAlign.Right} />
        <Column field="TotalRevenue" headerText="Revenue" format="C2" width="150" textAlign={TextAlign.Right} />
        </Columns>
        <Aggregates>
          <AggregateRow>
            <AggregateColumn field="TotalRevenue" type={AggregateType.Sum} footerTemplate={footerSum} format="C2" />
            <AggregateColumn field="UnitsSold" type={AggregateType.Min} footerTemplate={footerMin} format="N0" />
            <AggregateColumn field="UnitPrice" type={AggregateType.Max} footerTemplate={footerMax} format="C2" />
            <AggregateColumn field="IsDiscounted" type={AggregateType.TrueCount} footerTemplate={footerTrueCount} />
            <AggregateColumn field="ProductName" type={AggregateType.Count} footerTemplate={footerCount} />
          </AggregateRow>
        </Aggregates>
      </Grid>
    </div>
  );
 }