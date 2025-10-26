import { Grid, Columns, Column, ColumnTemplateProps, SortSettings, PageSettings, TextAlign } from '@syncfusion/react-grid';
import { ChipList } from '@syncfusion/react-buttons';
import { TimelineMonthIcon } from '@syncfusion/react-icons';
import './productSalesData.css';
import { memo, useCallback, useMemo, useState } from 'react';
import { salesDetails, SalesRecord } from './productSalesData';

 // Memoized Payment Template Component.
const PaymentTemplateComponent = memo((props?: ColumnTemplateProps) => {
  const { PaymentMethod } = props?.data as SalesRecord;
  return (
    <div className="sf-payment-info">
      <img src={`/images/grid/payment/${PaymentMethod}.svg`} alt={PaymentMethod} />
      <span>{PaymentMethod}</span>
    </div>
  );
});

// Memoized Discount Template Component.
const DiscountTemplateComponent = memo((props?: ColumnTemplateProps) => {
  const { Discount } = props?.data as SalesRecord;
  const label = Discount > 0 ? `${Discount * 100}%` : 'No Discount';
  const chipClass =
    Discount === 0
      ? 'discount-none'
      : Discount <= 0.05
      ? 'discount-low'
      : Discount <= 0.1
      ? 'discount-medium'
      : 'discount-high';
  return (
    <div>
      <ChipList id="chip" chips={[label]} className={chipClass} />
    </div>
  );
});

// Memoized Product Template Component.
const ProductTemplateComponent = memo((props?: ColumnTemplateProps) => {
  const { Product, Image } = props?.data as SalesRecord;
  return (
    <div className="sf-product-info">
      <img src={`/images/grid/product/${Image}.png`} alt={Product} />
      <span>{Product}</span>
    </div>
  );
});

// Memoized Date Header Template Component.
const DateTemplateComponent = memo(() => (
  <div className="items-center space-x-1">
    <TimelineMonthIcon className="sf-sales-date" width={16} height={16} />
    <span>Transaction</span>
  </div>
));

// Memoized Progress Template Component.
const ProgressTemplateComponent = memo((props?: ColumnTemplateProps) => {
  const { StockLevel } = props?.data as SalesRecord;
  const percentage = StockLevel <= 20 ? StockLevel + 30 : StockLevel;
  return (
    <div id="myProgress" className="pbar">
      <div id="myBar" className="bar" style={{ width: percentage + '%' }}>
        <div id="pbarlabel" className="barlabel">{percentage + '%'}</div>
      </div>
    </div>
  );
});

// Memoized Rating Template Component.
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

// Memoized Status Template Component
const StatusTemplateComponent = memo((props?: ColumnTemplateProps) => {
  const { StockStatus } = props?.data as SalesRecord;
  const isInStock = StockStatus === 'In Stock';
  return (
    <div id="status" className={`statustemp ${isInStock ? 'sf-activecolor' : 'sf-inactivecolor'}`}>
      <span className={`statustxt ${isInStock ? 'sf-activecolor' : 'sf-inactivecolor'}`}>
        {StockStatus}
      </span>
    </div>
  );
});

export default function App() {
  // State to manage sort and page settings.  
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [pageSettings] = useState<PageSettings>({enabled: true, pageSize: 100, pageCount: 4 });

  // Memoized Payment Template Component.
  const paymentTemplate = useCallback((props?: ColumnTemplateProps) => {
    if (!props || !props?.data) return <div />;
    return <PaymentTemplateComponent {...props} />;
  }, []);

  // Memoized Discount Template Component.
  const discountTemplate = useCallback((props?: ColumnTemplateProps) => {
    if (!props || !props?.data) return <div />;
    return <DiscountTemplateComponent {...props} />;
  }, []);

  // Memoized Product Template Component.
  const productTemplate = useCallback((props?: ColumnTemplateProps) => {
    if (!props || !props?.data) return <div />;
    return <ProductTemplateComponent {...props} />;
  }, []);

  // Memoized Date Header Template Component.
  const dateTemplate = useCallback(() => <DateTemplateComponent />, []);

  // Memoized Progress Template Component.
  const progressTemplate = useCallback((props?: ColumnTemplateProps) => {
    if (!props || !props?.data) return <div />;
    return <ProgressTemplateComponent {...props} />;
  }, []);

  // Memoized Rating Template Component.
  const ratingTemplate = useCallback((props?: ColumnTemplateProps) => {
    if (!props || !props?.data) return <div />;
    return <RatingTemplateComponent {...props} />;
  }, []);

  // Memoized Status Template Component.
  const statusTemplate = useCallback((props?: ColumnTemplateProps) => {
    if (!props || !props?.data) return <div />;
    return <StatusTemplateComponent {...props} />;
  }, []);

  return useMemo(() => (
    // Memoized Grid component to prevent unnecessary re-renders.
    <div className="sales-detail">
      <Grid dataSource={salesDetails} sortSettings={sortSettings} pageSettings={pageSettings} height={350} >
        <Columns>
          <Column field="Product" headerText="Product" width={150} template={productTemplate} />
          <Column field="UnitPrice" headerText="Unit Price" width={130} textAlign={TextAlign.Right} format="C2" />
          <Column field="Discount" headerText="Discount" width={130} template={discountTemplate} />
          <Column field="UnitsSold" headerText="Units Sold" width={120} textAlign={TextAlign.Right} />
          <Column field="Revenue" headerText="Revenue" width={120} textAlign={TextAlign.Right} format="C2" />
          <Column field="NetTotal" headerText="Net Total" width={130} textAlign={TextAlign.Right} format="C2" />
          <Column field="StockStatus" headerText="Stock Status" width={120} template={statusTemplate} />
          <Column field="StockLevel" headerText="Stock Level" width={120} template={progressTemplate} />
          <Column field="Rating" headerText="Rating" width={120} template={ratingTemplate} />
          <Column field="PaymentMethod" headerText="Payment" width={120} template={paymentTemplate} />
          <Column field="Date" headerText="Transaction" width={130} textAlign={TextAlign.Right} format="yMd" headerTemplate={dateTemplate} />
          <Column field="Feedback" headerText="Feedback" width={170} />
        </Columns>
      </Grid>
    </div>
  ), [
    productTemplate,
    discountTemplate,
    statusTemplate,
    progressTemplate,
    ratingTemplate,
    paymentTemplate,
    dateTemplate
  ]);
}
