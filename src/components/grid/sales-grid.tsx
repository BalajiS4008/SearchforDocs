import { Grid, Column, Columns, ColumnTemplateProps, SortSettings, TextAlign } from '@syncfusion/react-grid';
import './salesTransactionDetails.css';
import { memo, useCallback, useMemo, useState } from 'react';
import { salesDetails, SalesRecord, ProductData } from './salesTransactionDetails';

// Memoized Rating Template Component.
// Renders star ratings based on the `Rating` value in the row data.
const RatingTemplateComponent = memo((props?: ColumnTemplateProps) => {
  const { Rating } = props?.data as SalesRecord;
  const roundedRating = Math.round(Rating);
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < roundedRating ? 'star-full' : 'star-empty'}>
      ★
    </span>
  ));
  return <div>{stars}</div>;
});

export default function App() {
  // State to manage sort settings.
  const [sortSettings] = useState<SortSettings>({ enabled: true });
  // Template for rendering stock status with conditional styling.
  const statusTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    const statusClass =
      (props?.data as ProductData).StockStatus === 'In Stock'
        ? 'sf-stock-in'
        : (props?.data as ProductData).StockStatus === 'Low Stock'
        ? 'sf-stock-low'
        : 'sf-stock-out';

    return (
      <span className={`stock-status ${statusClass}`}>
        {(props?.data as ProductData).StockStatus}
      </span>
    );
  }, []);

  // Template for rendering star ratings using the memoized component.
  const ratingTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    if (!props || !props?.data) {
      return <div />;
    }
    return <RatingTemplateComponent {...props} />;
  }, []);

  const revenueTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    const revenue = (props?.data as SalesRecord).Revenue;
    const formattedRevenue = `$${revenue.toFixed(2)} M`;
    return <span>{formattedRevenue}</span>;
  }, []);


  return useMemo(() => (
    // Memoized Grid component to prevent unnecessary re-renders.
    <Grid dataSource={salesDetails.slice(0,8)} className='sales' sortSettings={sortSettings} >
      <Columns>
        <Column field="ProductId" headerText="Product ID" width="110" />
        <Column field="Product" headerText="Product" width="90" />
        <Column field="Cashier" headerText="Cashier" width="90" />
        <Column field="Revenue" headerText="Revenue" width="170" template={revenueTemplate} textAlign={TextAlign.Right} />
        <Column field="StockStatus" headerText="Status" width="120" template={statusTemplate} />
        <Column field="Rating" headerText="Rating" width="100" template={ratingTemplate} />
        <Column field="Location" headerText="Location" width="100" />
      </Columns>
    </Grid>
  ), [statusTemplate, ratingTemplate]);
}
