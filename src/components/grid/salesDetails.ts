// Define interface for Sales Data
export interface SalesData {
    OrderId: string;
    CustomerName: string;
    Quantity: number;
    UnitPrice: number;
    Discount: number;
    Tax: number;
    ShippingDate: Date;
    Country: string;
}

// Sample e-commerce sales data with varied shipping dates and specific countries
const today = new Date();
export const salesData: SalesData[] = [
    { OrderId: 'ORD-001', CustomerName: 'John Doe', Quantity: 3, UnitPrice: 299.99, Discount: 10, Tax: 8.5, ShippingDate: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000), Country: 'US' }, // +2 days
    { OrderId: 'ORD-002', CustomerName: 'Jane Smith', Quantity: 2, UnitPrice: 199.50, Discount: 5, Tax: 8.5, ShippingDate: new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000), Country: 'UK' }, // +1 day (Tomorrow)
    { OrderId: 'ORD-003', CustomerName: 'Bob Johnson', Quantity: 1, UnitPrice: 499.00, Discount: 15, Tax: 8.5, ShippingDate: new Date(today.getTime() + 0 * 24 * 60 * 60 * 1000), Country: 'Japan' }, // Today
    { OrderId: 'ORD-004', CustomerName: 'Alice Brown', Quantity: 5, UnitPrice: 89.99, Discount: 0, Tax: 8.5, ShippingDate: new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000), Country: 'Canada' }, // +5 days
    { OrderId: 'ORD-005', CustomerName: 'Charlie Wilson', Quantity: 2, UnitPrice: 349.99, Discount: 20, Tax: 8.5, ShippingDate: new Date(today.getTime() - 1 * 24 * 60 * 60 * 1000), Country: 'Germany' }, // -1 day (Shipped)
    { OrderId: 'ORD-006', CustomerName: 'Diana Lee', Quantity: 4, UnitPrice: 159.99, Discount: 8, Tax: 8.5, ShippingDate: new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000), Country: 'Singapore' }, // +3 days
    { OrderId: 'ORD-007', CustomerName: 'Frank Miller', Quantity: 1, UnitPrice: 799.99, Discount: 25, Tax: 8.5, ShippingDate: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000), Country: 'US' }, // +7 days (1 week)
    { OrderId: 'ORD-008', CustomerName: 'Grace Davis', Quantity: 3, UnitPrice: 249.99, Discount: 12, Tax: 8.5, ShippingDate: new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000), Country: 'France' }, // -3 days (Shipped)
    { OrderId: 'ORD-009', CustomerName: 'Henry Garcia', Quantity: 6, UnitPrice: 119.99, Discount: 5, Tax: 8.5, ShippingDate: new Date(today.getTime() + 4 * 24 * 60 * 60 * 1000), Country: 'Australia' }, // +4 days
    { OrderId: 'ORD-010', CustomerName: 'Ivy Rodriguez', Quantity: 2, UnitPrice: 429.99, Discount: 18, Tax: 8.5, ShippingDate: new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000), Country: 'Canada' }, // +1 day (Tomorrow)
    { OrderId: 'ORD-011', CustomerName: 'Jack Thompson', Quantity: 1, UnitPrice: 899.99, Discount: 0, Tax: 8.5, ShippingDate: new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000), Country: 'UK' }, // +6 days
    { OrderId: 'ORD-012', CustomerName: 'Kelly Anderson', Quantity: 4, UnitPrice: 179.99, Discount: 10, Tax: 8.5, ShippingDate: new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000), Country: 'Japan' }, // -2 days (Shipped)
    { OrderId: 'ORD-013', CustomerName: 'Leo Martinez', Quantity: 3, UnitPrice: 299.99, Discount: 15, Tax: 8.5, ShippingDate: new Date(today.getTime() + 8 * 24 * 60 * 60 * 1000), Country: 'US' }, // +8 days
    { OrderId: 'ORD-014', CustomerName: 'Mia Jackson', Quantity: 2, UnitPrice: 599.99, Discount: 20, Tax: 8.5, ShippingDate: new Date(today.getTime() + 0 * 24 * 60 * 60 * 1000), Country: 'Germany' }, // Today
    { OrderId: 'ORD-015', CustomerName: 'Noah White', Quantity: 5, UnitPrice: 99.99, Discount: 8, Tax: 8.5, ShippingDate: new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000), Country: 'Singapore' } // +10 days
];
