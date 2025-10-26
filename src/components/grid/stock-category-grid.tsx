import { Grid, Column, Columns, ColumnTemplateProps, ClipMode, TextAlign } from '@syncfusion/react-grid';
import './categoryDetails.css';
import React, { useCallback, useMemo } from 'react';
import { productInventory, ProductModel } from './categoryDetails';

export default function App() {
    // Template to render UnitsInStock with conditional color formatting.
    const stockTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        const stockValue = (props?.data as ProductModel).UnitsInStock;
        const stockClass = stockValue > 50
            ? 'product-inventory-stock-high'
            : stockValue > 20
            ? 'product-inventory-stock-medium'
            : 'product-inventory-stock-low';
        return <span className={`product-inventory-stock-value ${stockClass}`}>${stockValue.toFixed(2)}</span>;
    }, []);

    // Template to render discontinued status with icons and styling.
    const verificationTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        return !(props?.data as ProductModel).Discontinued ? (
            <div className="status-continued">
                <span className="status-continued-icon">✓</span> Continued
            </div>
        ) : (
            <div className="status-discontinued">
                <span className="status-discontinued-icon">!</span> Discontinued
            </div>
        );
    }, []);

    return useMemo(() => (
        // Memoized Grid component to prevent unnecessary re-renders.
        <Grid dataSource={productInventory.slice(0,15)} className='product-inventory' height={350}>
            <Columns>
                <Column field="ProductName" headerText="Product Name" width="140" clipMode={ClipMode.EllipsisWithTooltip}  />
                <Column field="CategoryName" headerText="Category" width="120"/>
                <Column field="QuantityPerUnit" headerText="Quantity & Unit" width="150" />
                <Column field="UnitsInStock" headerText="Unit Price" textAlign={TextAlign.Right} format="C2" width="80" template={stockTemplate} />
                <Column field="Discontinued" headerText="Status" width="140" template={verificationTemplate} />
            </Columns>
        </Grid>
    ), [stockTemplate, verificationTemplate]);
}
