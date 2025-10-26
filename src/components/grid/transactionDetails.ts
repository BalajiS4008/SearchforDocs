export interface SalesTransaction {
  Product: string;
  Category: string;
  Region: string;
  TransactionDate: Date;
  CustomerSegment: string;
  Revenue: number | null;
  UnitsSold: number | null;
}

export const transactionLog: SalesTransaction[] = [
    {"Product": "Laptop", "Category": "Electronics", "Region": "North America", "TransactionDate": new Date(1735689600000) , "CustomerSegment": "Enterprise", "Revenue": 75000, "UnitsSold": 120},
    {"Product": "Smartphone", "Category": "Electronics", "Region": "Europe", "TransactionDate": new Date(1735776000000) , "CustomerSegment": "Retail", "Revenue": 45000, "UnitsSold": 50},
    {"Product": "Desk Chair", "Category": "Furniture", "Region": "Asia", "TransactionDate": new Date(1735862400000) , "CustomerSegment": "Small Business", "Revenue": null, "UnitsSold": null},
    {"Product": "Monitor", "Category": "Electronics", "Region": "North America", "TransactionDate": new Date(1735948800000) , "CustomerSegment": "Enterprise", "Revenue": 32000, "UnitsSold": 80},
    {"Product": "Tablet", "Category": "Electronics", "Region": "Europe", "TransactionDate": new Date(1736035200000) , "CustomerSegment": "Retail", "Revenue": 28000, "UnitsSold": 150},
    {"Product": "Office Desk", "Category": "Furniture", "Region": "Asia", "TransactionDate": new Date(1736121600000) , "CustomerSegment": "Retail", "Revenue": 15000, "UnitsSold": 30},
    {"Product": "Headphones", "Category": "Accessories", "Region": "South America", "TransactionDate": new Date(1736208000000) , "CustomerSegment": "Retail", "Revenue": 10000, "UnitsSold": 90},
    {"Product": "Printer", "Category": "Electronics", "Region": "North America", "TransactionDate": new Date(1736294400000) , "CustomerSegment": "Enterprise", "Revenue": 40000, "UnitsSold": 60},
    {"Product": "Sofa", "Category": "Furniture", "Region": "Europe", "TransactionDate": new Date(1736380800000) , "CustomerSegment": "Retail", "Revenue": 17000, "UnitsSold": 20},
    {"Product": "Keyboard", "Category": "Accessories", "Region": "Asia", "TransactionDate": new Date(1736467200000) , "CustomerSegment": "Small Business", "Revenue": 8000, "UnitsSold": 200},
    {"Product": "Smartwatch", "Category": "Electronics", "Region": "Australia", "TransactionDate": new Date(1736553600000) , "CustomerSegment": "Retail", "Revenue": null, "UnitsSold": null},
    {"Product": "Bookshelf", "Category": "Furniture", "Region": "North America", "TransactionDate": new Date(1736640000000) , "CustomerSegment": "Enterprise", "Revenue": 18000, "UnitsSold": 40},
    {"Product": "Mouse", "Category": "Accessories", "Region": "Europe", "TransactionDate": new Date(1736726400000) , "CustomerSegment": "Retail", "Revenue": 6000, "UnitsSold": 250},
    {"Product": "Laptop", "Category": "Electronics", "Region": "Asia", "TransactionDate": new Date(1736812800000) , "CustomerSegment": "Enterprise", "Revenue": 80000, "UnitsSold": 75},
    {"Product": "Tablet", "Category": "Electronics", "Region": "South America", "TransactionDate": new Date(1736899200000) , "CustomerSegment": "Small Business", "Revenue": 30000, "UnitsSold": 140},
    {"Product": "Desk Chair", "Category": "Furniture", "Region": "North America", "TransactionDate": new Date(1736985600000) , "CustomerSegment": "Retail", "Revenue": 12000, "UnitsSold": 35},
    {"Product": "Smartphone", "Category": "Electronics", "Region": "Europe", "TransactionDate": new Date(1737072000000) , "CustomerSegment": "Enterprise", "Revenue": 50000, "UnitsSold": 280},
    {"Product": "Monitor", "Category": "Electronics", "Region": "Asia", "TransactionDate": new Date(1737158400000) , "CustomerSegment": "Retail", "Revenue": 63000, "UnitsSold": 90},
    {"Product": "Headphones", "Category": "Accessories", "Region": "North America", "TransactionDate": new Date(1737244800000) , "CustomerSegment": "Small Business", "Revenue": 9000, "UnitsSold": 180},
    {"Product": "Office Desk", "Category": " Furniture", "Region": "Europe", "TransactionDate": new Date(1737331200000) , "CustomerSegment": "Retail", "Revenue": 20000, "UnitsSold": 25},
    {"Product": "Printer", "Category": "Electronics", "Region": "Australia", "TransactionDate": new Date(1737417600000) , "CustomerSegment": "Enterprise", "Revenue": 42000, "UnitsSold": 70},
    {"Product": "Keyboard", "Category": "Accessories", "Region": "Asia", "TransactionDate": new Date(1737504000000) , "CustomerSegment": "Retail", "Revenue": null, "UnitsSold": null},
    {"Product": "Sofa", "Category": "Furniture", "Region": "South America", "TransactionDate": new Date(1737590400000) , "CustomerSegment": "Small Business", "Revenue": 23000, "UnitsSold": 25},
    {"Product": "Smartwatch", "Category": "Electronics", "Region": "North America", "TransactionDate": new Date(1737676800000) , "CustomerSegment": "Retail", "Revenue": 35000, "UnitsSold": 15},
    {"Product": "Bookshelf", "Category": "Furniture", "Region": "Europe", "TransactionDate": new Date(1737763200000) , "CustomerSegment": "Retail", "Revenue": 17000, "UnitsSold": 45},
    {"Product": "Mouse", "Category": "Accessories", "Region": "Asia", "TransactionDate": new Date(1737849600000) , "CustomerSegment": "Enterprise", "Revenue": 60000, "UnitsSold": 260},
    {"Product": "Laptop", "Category": "Electronics", "Region": "North America", "TransactionDate": new Date(1737936000000) , "CustomerSegment": "Retail", "Revenue": 85000, "UnitsSold": 110},
    {"Product": "Tablet", "Category": "Electronics", "Region": "Europe", "TransactionDate": new Date(1738022400000) , "CustomerSegment": "Small Business", "Revenue": 55000, "UnitsSold": 130},
    {"Product": "Desk Chair", "Category": "Furniture", "Region": "Asia", "TransactionDate": new Date(1738108800000) , "CustomerSegment": "Retail", "Revenue": null, "UnitsSold": null},
    {"Product": "Smartphone", "Category": "Electronics", "Region": "South America", "TransactionDate": new Date(1738195200000) , "CustomerSegment": "Enterprise", "Revenue": 47000, "UnitsSold": 270}
  ]