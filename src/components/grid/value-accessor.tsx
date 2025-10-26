import { Grid, Column, Columns, ValueAccessorProps, ValueType, ClipMode, TextAlign } from '@syncfusion/react-grid';
import { useCallback, useMemo } from 'react';
import { salesData, SalesData } from './salesDetails';

export default function App() {
    // Calculate subtotal before discounts.
    const subtotalAccessor = useCallback((args?: ValueAccessorProps): ValueType => {
        const salesData = args?.data as SalesData;
        const quantity = salesData.Quantity;
        const unitPrice = salesData.UnitPrice;
        return quantity && unitPrice ? `$${(quantity * unitPrice).toFixed(2)}` : '$0.00';
    }, []);

    // Calculate discount amount based on percentage.
    const discountAmountAccessor = useCallback((args?: ValueAccessorProps): ValueType => {
        const salesData = args?.data as SalesData;
        const quantity = salesData.Quantity;
        const unitPrice = salesData.UnitPrice;
        const discount = salesData.Discount || 0;
        
        if (quantity && unitPrice) {
            const subtotal = quantity * unitPrice;
            const discountAmount = (subtotal * discount) / 100;
            return `$${discountAmount.toFixed(2)}`;
        }
        return '$0.00';
    }, []);

    // Calculate final total including tax after discount.
    const finalTotalAccessor = useCallback((args?: ValueAccessorProps): ValueType => {
        const salesData = args?.data as SalesData;
        const quantity = salesData.Quantity;
        const unitPrice = salesData.UnitPrice;
        const discount = salesData.Discount || 0;
        const tax = salesData.Tax || 0;
        
        if (quantity && unitPrice) {
            const subtotal = quantity * unitPrice;
            const discountAmount = (subtotal * discount) / 100;
            const afterDiscount = subtotal - discountAmount;
            const taxAmount = (afterDiscount * tax) / 100;
            const finalTotal = afterDiscount + taxAmount;
            return `$${finalTotal.toFixed(2)}`;
        }
        return '$0.00';
    }, []);

    // Show customer first name and country for quick identification.
    const customerSummaryAccessor = useCallback((args?: ValueAccessorProps): ValueType => {
        const salesData = args?.data as SalesData;
        const customerName = salesData.CustomerName;
        const country = salesData.Country;
        
        if (customerName && country) {
            const firstName = customerName.split(' ')[0];
            return `${firstName} (${country})`;
        }
        
        // Handle missing data gracefully with meaningful fallbacks.
        if (customerName && !country) {
            const firstName = customerName.split(' ')[0];
            return `${firstName} (Unknown)`;
        }
        
        if (!customerName && country) {
            return `Guest (${country})`;
        }
        
        return 'Guest Customer';
    }, []);

    // Calculate days until shipping with smart formatting.
    const shippingDaysAccessor = useCallback((args?: ValueAccessorProps): ValueType => {
        const salesData = args?.data as SalesData;
        const shippingDate = salesData.ShippingDate;
        
        if (shippingDate && shippingDate instanceof Date) {
            const today = new Date();
            // Reset time to compare dates only
            const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const shippingStart = new Date(shippingDate.getFullYear(), shippingDate.getMonth(), shippingDate.getDate());
            
            const diffTime = shippingStart.getTime() - todayStart.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays < -7) return 'Delivered';
            if (diffDays < 0) return 'Shipped';
            if (diffDays === 0) return 'Today';
            if (diffDays === 1) return 'Tomorrow';
            if (diffDays <= 7) return `${diffDays} days`;
            if (diffDays <= 14) return `${Math.ceil(diffDays / 7)} week${diffDays > 7 ? 's' : ''}`;
            return `${Math.ceil(diffDays / 7)} weeks`;
        }
        
        // Professional fallback for missing shipping date
        return 'Pending';
    }, []);

    // Calculate tax amount for display.
    const taxAmountAccessor = useCallback((args?: ValueAccessorProps): ValueType => {
        const salesData = args?.data as SalesData;
        const quantity = salesData.Quantity;
        const unitPrice = salesData.UnitPrice;
        const discount = salesData.Discount || 0;
        const tax = salesData.Tax || 0;
        
        if (quantity && unitPrice) {
            const subtotal = quantity * unitPrice;
            const discountAmount = (subtotal * discount) / 100;
            const afterDiscount = subtotal - discountAmount;
            const taxAmount = (afterDiscount * tax) / 100;
            return `$${taxAmount.toFixed(2)}`;
        }
        return '$0.00';
    }, []);

    // Memoize Grid component to optimize rendering.
    return (
        <div>
            {useMemo(
                () => (
                    <Grid
                        dataSource={salesData}
                        height={400}
                    >
                        <Columns>
                            <Column field="OrderId" headerText="Order ID" width="100" />
                            <Column field="CustomerSummary" headerText="Customer" width="120" valueAccessor={customerSummaryAccessor} clipMode={ClipMode.EllipsisWithTooltip}/>
                            <Column field="Quantity" headerText="Quantity" width="90" textAlign={TextAlign.Right} />
                            <Column field="UnitPrice" headerText="Unit Price" format="C2" width="110" textAlign={TextAlign.Right} />
                            <Column field="Subtotal" headerText="Subtotal" width="100" textAlign={TextAlign.Right} valueAccessor={subtotalAccessor} />
                            <Column field="Discount" headerText="Discount (%)" width="110" textAlign={TextAlign.Right}/>
                            <Column field="DiscountAmount" headerText="Discount" width="110" textAlign={TextAlign.Right} valueAccessor={discountAmountAccessor} />
                            <Column field="Tax" headerText="Tax (%)" width="80" textAlign={TextAlign.Right} />
                            <Column field="TaxAmount" headerText="Tax" width="90" textAlign={TextAlign.Right} valueAccessor={taxAmountAccessor} />
                            <Column field="FinalTotal" headerText="Final Total" width="130" textAlign={TextAlign.Right} valueAccessor={finalTotalAccessor} />
                            <Column field="ShippingDays" headerText="Estimated Shipping (Days)" width="170" clipMode={ClipMode.EllipsisWithTooltip} valueAccessor={shippingDaysAccessor} />
                        </Columns>
                    </Grid>
                ),
                [subtotalAccessor, discountAmountAccessor, finalTotalAccessor, customerSummaryAccessor, shippingDaysAccessor, taxAmountAccessor]
            )}
        </div>
    );
}