export interface SalesDetails {
  ProductId: string | number;
  Product: string;
  UnitPrice: number;
  Discount: number;
  UnitsSold: number;
  Revenue: number;
  NetTotal: number;
  StockStatus: string;
  StockLevel: number;
  Rating: number;
  PaymentMethod: string;
  Date: Date | string;
  Feedback: string;
  Image: string;
  InvoiceId:string;
  Country: string;
  Branch: string;
}

export const salesDetailsData: object[] = [
  {
    "InvoiceId": "INV-1001",
    "ProductId": "PROD-1001",
    "Product": "Banana",
    "UnitPrice": 3.11,
    "StockLevel": 7,
    "Feedback": "<p>Bad taste.</p>",
    "SupplierName": "Fresh Farm",
    "DiscountPercentage": 15.0,
    "ExpiryDate": new Date(2025, 7, 10),
    "SalesVolume": 10
  },
  {
    "InvoiceId": "INV-1002",
    "ProductId": "PROD-1002",
    "Product": "Bread",
    "UnitPrice": 2.11,
    "StockLevel": 18,
    "Feedback": "<strong>Highly recommended.</strong>",
    "SupplierName": "Bakery Best",
    "DiscountPercentage": 5.0,
    "ExpiryDate": new Date(2024, 9, 15),
    "SalesVolume": 75
  },
  {
    "InvoiceId": "INV-1003",
    "ProductId": "PROD-1003",
    "Product": "Avocado",
    "UnitPrice": 9.52,
    "StockLevel": 71,
    "Feedback": "<p>Disappointed.</p>",
    "SupplierName": "Fresh Farm",
    "DiscountPercentage": 10.0,
    "ExpiryDate": new Date(2025, 6, 20),
    "SalesVolume": 40
  },
  {
    "InvoiceId": "INV-1004",
    "ProductId": "PROD-1004",
    "Product": "Milk",
    "UnitPrice": 1.26,
    "StockLevel": 89,
    "Feedback": "<p>Not fresh.</p>",
    "SupplierName": "Dairy Delight",
    "DiscountPercentage": 0.0,
    "ExpiryDate": new Date(2024, 8, 5),
    "SalesVolume": 50
  },
  {
    "InvoiceId": "INV-1005",
    "ProductId": "PROD-1005",
    "Product": "Eggs",
    "UnitPrice": 7.98,
    "StockLevel": 19,
    "Feedback": "<strong>Excellent quality!</strong>",
    "SupplierName": "Farm Fresh",
    "DiscountPercentage": 8.0,
    "ExpiryDate": new Date(2025, 4, 1),
    "SalesVolume": 80
  },
  {
    "InvoiceId": "INV-1006",
    "ProductId": "PROD-1006",
    "Product": "Chicken",
    "UnitPrice": 4.18,
    "StockLevel": 33,
    "Feedback": "<p>Crisp and delicious.</p>",
    "SupplierName": "Meat Masters",
    "DiscountPercentage": 12.0,
    "ExpiryDate": new Date(2023, 8, 10),
    "SalesVolume": 60
  },
  {
    "InvoiceId": "INV-1007",
    "ProductId": "PROD-1007",
    "Product": "Beef",
    "UnitPrice": 1.82,
    "StockLevel": 80,
    "Feedback": "<p>Disappointed.</p>",
    "SupplierName": "Meat Masters",
    "DiscountPercentage": 5.0,
    "ExpiryDate": new Date(2024, 11, 1),
    "SalesVolume": 30
  },
  {
    "InvoiceId": "INV-1008",
    "ProductId": "PROD-1008",
    "Product": "Butter",
    "UnitPrice": 8.02,
    "StockLevel": 5,
    "Feedback": "<p>Will buy again.</p>",
    "SupplierName": "Dairy Delight",
    "DiscountPercentage": 20.0,
    "ExpiryDate": new Date(2022, 7, 15),
    "SalesVolume": 15
  },
  {
    "InvoiceId": "INV-1009",
    "ProductId": "PROD-1009",
    "Product": "Cheese",
    "UnitPrice": 5.87,
    "StockLevel": 47,
    "Feedback": "<p>Packaging was damaged.</p>",
    "SupplierName": "Dairy Delight",
    "DiscountPercentage": 10.0,
    "ExpiryDate": new Date(2023, 5, 20),
    "SalesVolume": 35
  },
  {
    "InvoiceId": "INV-1010",
    "ProductId": "PROD-1010",
    "Product": "Yogurt",
    "UnitPrice": 1.31,
    "StockLevel": 75,
    "Feedback": "<p>Perfectly packed.</p>",
    "SupplierName": "Dairy Delight",
    "DiscountPercentage": 0.0,
    "ExpiryDate": new Date(2025, 6, 10),
    "SalesVolume": 70
  },
  {
    "InvoiceId": "INV-1011",
    "ProductId": "PROD-1011",
    "Product": "Tomato",
    "UnitPrice": 5.85,
    "StockLevel": 38,
    "Feedback": "<p>Not fresh.</p>",
    "SupplierName": "Fresh Farm",
    "DiscountPercentage": 15.0,
    "ExpiryDate": new Date(2021, 2, 5),
    "SalesVolume": 25
  },
  {
    "InvoiceId": "INV-1012",
    "ProductId": "PROD-1012",
    "Product": "Lettuce",
    "UnitPrice": 1.36,
    "StockLevel": 80,
    "Feedback": "<p>Disappointed.</p>",
    "SupplierName": "Fresh Farm",
    "DiscountPercentage": 5.0,
    "ExpiryDate": new Date(2024, 3, 15),
    "SalesVolume": 45
  },
  {
    "InvoiceId": "INV-1013",
    "ProductId": "PROD-1013",
    "Product": "Carrot",
    "UnitPrice": 9.29,
    "StockLevel": 76,
    "Feedback": "<p>Packaging was damaged.</p>",
    "SupplierName": "Fresh Farm",
    "DiscountPercentage": 10.0,
    "ExpiryDate": new Date(2022, 10, 20),
    "SalesVolume": 50
  },
  {
    "InvoiceId": "INV-1014",
    "ProductId": "PROD-1014",
    "Product": "Apple",
    "UnitPrice": 1.93,
    "StockLevel": 90,
    "Feedback": "<strong>Highly recommended.</strong>",
    "SupplierName": "Fresh Farm",
    "DiscountPercentage": 0.0,
    "ExpiryDate": new Date(2023, 4, 1),
    "SalesVolume": 85
  },
  {
    "InvoiceId": "INV-1015",
    "ProductId": "PROD-1015",
    "Product": "Orange",
    "UnitPrice": 8.22,
    "StockLevel": 87,
    "Feedback": "<strong>Excellent quality!</strong>",
    "SupplierName": "Fresh Farm",
    "DiscountPercentage": 5.0,
    "ExpiryDate": new Date(2024, 6, 25),
    "SalesVolume": 90
  },
  {
    "InvoiceId": "INV-1016",
    "ProductId": "PROD-1016",
    "Product": "Cucumber",
    "UnitPrice": 2.66,
    "StockLevel": 40,
    "Feedback": "<p>Not as described.</p>",
    "SupplierName": "Fresh Farm",
    "DiscountPercentage": 12.0,
    "ExpiryDate": new Date(2025, 0, 10),
    "SalesVolume": 30
  },
  {
    "InvoiceId": "INV-1017",
    "ProductId": "PROD-1017",
    "Product": "Spinach",
    "UnitPrice": 8.84,
    "StockLevel": 34,
    "Feedback": "<p>Fresh and tasty.</p>",
    "SupplierName": "Fresh Farm",
    "DiscountPercentage": 8.0,
    "ExpiryDate": new Date(2020, 11, 5),
    "SalesVolume": 60
  },
  {
    "InvoiceId": "INV-1018",
    "ProductId": "PROD-1018",
    "Product": "Rice",
    "UnitPrice": 6.59,
    "StockLevel": 39,
    "Feedback": "<p>Disappointed.</p>",
    "SupplierName": "Grain Good",
    "DiscountPercentage": 15.0,
    "ExpiryDate": new Date(2024, 2, 1),
    "SalesVolume": 25
  },
  {
    "InvoiceId": "INV-1019",
    "ProductId": "PROD-1019",
    "Product": "Pasta",
    "UnitPrice": 9.46,
    "StockLevel": 59,
    "Feedback": "<strong>Highly recommended.</strong>",
    "SupplierName": "Pasta Palace",
    "DiscountPercentage": 5.0,
    "ExpiryDate": new Date(2021, 9, 15),
    "SalesVolume": 80
  },
  {
    "InvoiceId": "INV-1020",
    "ProductId": "PROD-1020",
    "Product": "Turkey",
    "UnitPrice": 8.87,
    "StockLevel": 96,
    "Feedback": "<p>Crisp and delicious.</p>",
    "SupplierName": "Meat Masters",
    "DiscountPercentage": 0.0,
    "ExpiryDate": new Date(2023, 1, 20),
    "SalesVolume": 70
  }
];
