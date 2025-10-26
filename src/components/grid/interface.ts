import { DataRequestEvent } from "@syncfusion/react-grid";


export interface Manufacturing {
  Stage: string;
  OutputUnits: number | string;
  UnitCost: number | string;
  TotalCost: number;
  Status: string;
  OperatorID: string | number;
}

export interface FilterColumn {
  field: string;
  matchCase: boolean;
  operator: string;
  predicate: string;
  value: string;
}

export interface DataState {
  skip: number;
  take: number;
  sort?: Array<{ field: string; direction: string }>;
  filtered?: Array<{ columns: FilterColumn[] }>;
}

export interface CustomDataStateRequestEvent extends DataRequestEvent {
  filtered?: Array<{ columns: FilterColumn[] }>;
  sort?: Array<{ field?: string; direction: string }>;
}


export interface Orders {
  OrderID: string | number;
  Quantity: number;
  ShipAddress: string;
  OrderDate: Date;
  OrderStatus: string;
}

export interface SalesPerformance {
  SalesRepId: string;
  SalesRepName: string;
  Territory: string;
  ProductCategory: string;
  Quarter: string;
  SalesAmount: number;
  AchievementRate: number;
}

export interface ProductCatalog {
  ProductId: string;
  ProductName: string;
  Category: string;
  FullDescription: string;
  TechnicalSpecifications: string;
  BusinessValue: string;
}

export interface InventoryManagement {
  SKU: string;
  ProductName: string;
  Category: string;
  StockLevel: number;
  ReorderPoint: number;
  UnitCost: number;
  SupplierId: string;
  SupplierName: string;
  StockStatus: string;
  LastOrderDate: Date;
  ExpiryDate: Date;
  WarehouseLocation: string;
  Priority: string;
}

export interface SalesDataRow {
    OrderId: string;
    CustomerName: string;
    Quantity: number;
    UnitPrice: number;
    Discount: number;
    Tax: number;
    ShippingDate: Date;
    Region: string;
}

export interface EventTask {
  EventTaskID: number;         
  TaskName: string;            
  Coordinator: string;         
  EventType: string;           
  Status: string;             
  LastModified: Date;       
  Budget: number;             
  ModifiedFlag: boolean;       
  ModifiedBy: string;          
}

export interface OrderData {
    OrderID: number;
    CustomerID: string;
    CustomerName: string;
    OrderDate: string; // ISO format
    ShippedDate: string; // ISO format
    Freight: number;
    ShipName: string;
    ShipAddress: string;
    ShipCity: string;
    ShipRegion: string | null;
    ShipCountry: string;
    EmployeeID: number;
    Verified: boolean;
}


// Define interfaces for type safety
export interface CustomerDetails {
    name: string;
    initial: string;
    email: string;
    colorTheme: string;
}

export interface Assignee {
    name: string;
    avatar: string;
}

export interface GridDataItem {
    id: number;
    leadId: string;
    details: CustomerDetails;
    status: string;
    interest: string;
    date: Date;
    assignee: Assignee;
    source: string;
    revenue: number;
}
