
export interface FoodOrderItem {
  OrderNumber: string;
  ChefId: string;
  ChefName: string;
  Status: string;
  FoodName: string;
  CustomerName: string;
  OrderTime: string | Date; 
  EstimatedTime: string | Date; 
  Notified: string;
  Price: number;
  TableNumber: number;
  CuisineType: string;
}

export const foodOrderQueue: FoodOrderItem[] = [
  {
    "OrderNumber": "ORD-001",
    "ChefId": "CH-001",
    "ChefName": "Alice Smith",
    "Status": "Completed",
    "FoodName": "Margherita Pizza",
    "CustomerName": "John Doe",
    "OrderTime": "2025-08-07T11:30:00",
    "EstimatedTime": "2025-08-07T11:45:00",
    "Notified": "Yes",
    "Price": 12.99,
    "TableNumber": 8,
    "CuisineType": "Italian"
  },
  {
    "OrderNumber": "ORD-002",
    "ChefId": "CH-002",
    "ChefName": "Bob Johnson",
    "Status": "Not Started",
    "FoodName": "Chicken Alfredo",
    "CustomerName": "Emma Wilson",
    "OrderTime": "2025-08-07T11:45:00",
    "EstimatedTime": "2025-08-07T12:05:00",
    "Notified": "No",
    "Price": 14.5,
    "TableNumber": 12,
    "CuisineType": "Indian"
  },
  {
    "OrderNumber": "ORD-003",
    "ChefId": "CH-003",
    "ChefName": "Michael Lee",
    "Status": "In Progress",
    "FoodName": "Vegetable Stir Fry",
    "CustomerName": "Michael Lee",
    "OrderTime": "2025-08-07T11:50:00",
    "EstimatedTime": "2025-08-07T12:05:00",
    "Notified": "No",
    "Price": 10.99,
    "TableNumber": 1,
    "CuisineType": "Indian"
  },
  {
    "OrderNumber": "ORD-004",
    "ChefId": "CH-001",
    "ChefName": "Alice Smith",
    "Status": "In Progress",
    "FoodName": "Spaghetti Carbonara",
    "CustomerName": "Sarah Davis",
    "OrderTime": "2025-08-07T12:00:00",
    "EstimatedTime": "2025-08-07T12:20:00",
    "Notified": "No",
    "Price": 13.75,
    "TableNumber": 19,
    "CuisineType": "Mexican"
  },
  {
    "OrderNumber": "ORD-005",
    "ChefId": "CH-002",
    "ChefName": "Bob Johnson",
    "Status": "Completed",
    "FoodName": "Grilled Salmon",
    "CustomerName": "David Kim",
    "OrderTime": "2025-08-07T11:40:00",
    "EstimatedTime": "2025-08-07T12:05:00",
    "Notified": "Yes",
    "Price": 18.99,
    "TableNumber": 3,
    "CuisineType": "Mexican"
  },
  {
    "OrderNumber": "ORD-006",
    "ChefId": "CH-003",
    "ChefName": "Michael Lee",
    "Status": "Completed",
    "FoodName": "Caesar Salad",
    "CustomerName": "Lisa Taylor",
    "OrderTime": "2025-08-07T11:35:00",
    "EstimatedTime": "2025-08-07T11:45:00",
    "Notified": "Yes",
    "Price": 8.5,
    "TableNumber": 11,
    "CuisineType": "Italian"
  },
  {
    "OrderNumber": "ORD-007",
    "ChefId": "CH-001",
    "ChefName": "Alice Smith",
    "Status": "Not Started",
    "FoodName": "Beef Tacos",
    "CustomerName": "James Martinez",
    "OrderTime": "2025-08-07T12:05:00",
    "EstimatedTime": "2025-08-07T12:20:00",
    "Notified": "No",
    "Price": 9.99,
    "TableNumber": 18,
    "CuisineType": "Indian"
  },
  {
    "OrderNumber": "ORD-008",
    "ChefId": "CH-002",
    "ChefName": "Bob Johnson",
    "Status": "In Progress",
    "FoodName": "Pad Thai",
    "CustomerName": "Olivia Chen",
    "OrderTime": "2025-08-07T12:10:00",
    "EstimatedTime": "2025-08-07T12:30:00",
    "Notified": "No",
    "Price": 11.99,
    "TableNumber": 15,
    "CuisineType": "Thai"
  },
  {
    "OrderNumber": "ORD-009",
    "ChefId": "CH-003",
    "ChefName": "Michael Lee",
    "Status": "Not Started",
    "FoodName": "Margherita Pizza",
    "CustomerName": "Ethan Patel",
    "OrderTime": "2025-08-07T12:15:00",
    "EstimatedTime": "2025-08-07T12:40:00",
    "Notified": "No",
    "Price": 12.99,
    "TableNumber": 18,
    "CuisineType": "Italian"
  },
  {
    "OrderNumber": "ORD-010",
    "ChefId": "CH-001",
    "ChefName": "Alice Smith",
    "Status": "Completed",
    "FoodName": "Butter Chicken",
    "CustomerName": "Sophia Adams",
    "OrderTime": "2025-08-07T11:55:00",
    "EstimatedTime": "2025-08-07T12:15:00",
    "Notified": "Yes",
    "Price": 15.5,
    "TableNumber": 19,
    "CuisineType": "Thai"
  },
  {
    "OrderNumber": "ORD-011",
    "ChefId": "CH-001",
    "ChefName": "Alice Smith",
    "Status": "In Progress",
    "FoodName": "Spaghetti Carbonara",
    "CustomerName": "Sarah Davis",
    "OrderTime": "2025-08-07T12:00:00",
    "EstimatedTime": "2025-08-07T12:20:00",
    "Notified": "No",
    "Price": 13.75,
    "TableNumber": 15,
    "CuisineType": "Mexican"
  },
  {
    "OrderNumber": "ORD-012",
    "ChefId": "CH-003",
    "ChefName": "Michael Lee",
    "Status": "Not Started",
    "FoodName": "Margherita Pizza",
    "CustomerName": "Ethan Patel",
    "OrderTime": "2025-08-07T12:15:00",
    "EstimatedTime": "2025-08-07T12:40:00",
    "Notified": "No",
    "Price": 12.99,
    "TableNumber": 9,
    "CuisineType": "American"
  },
  {
    "OrderNumber": "ORD-013",
    "ChefId": "CH-003",
    "ChefName": "Michael Lee",
    "Status": "In Progress",
    "FoodName": "Vegetable Stir Fry",
    "CustomerName": "Michael Lee",
    "OrderTime": "2025-08-07T11:50:00",
    "EstimatedTime": "2025-08-07T12:05:00",
    "Notified": "No",
    "Price": 10.99,
    "TableNumber": 16,
    "CuisineType": "Thai"
  }
];