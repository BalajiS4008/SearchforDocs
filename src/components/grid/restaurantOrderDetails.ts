export interface RestaurantOrder {
  OrderNumber: string;
  ChefId: string;
  ChefName: string;
  Status: string;
  FoodName: string;
  CustomerName: string;
  Notified: string;
  OrderTime: Date,
  EstimatedTime: Date
}

export const foodOrderDetails: RestaurantOrder[] = [
  {
    OrderNumber: 'ORD-001',
    ChefId: 'CH001',
    ChefName: 'Alice Smith',
    Status: 'completed',
    FoodName: 'Margherita Pizza',
    CustomerName: 'John Doe',
    OrderTime: new Date('2025-08-07T11:30:00'),
    EstimatedTime: new Date('2025-08-07T11:45:00'),
    Notified: 'Yes'
  },
  {
    OrderNumber: 'ORD-002',
    ChefId: 'CH002',
    ChefName: 'Bob Johnson',
    Status: 'not started',
    FoodName: 'Chicken Alfredo',
    CustomerName: 'Emma Wilson',
    OrderTime: new Date('2025-08-07T11:45:00'),
    EstimatedTime: new Date('2025-08-07T12:05:00'),
    Notified: 'No'
  },
  {
    OrderNumber: 'ORD-003',
    ChefId: 'CH003',
    ChefName: 'Michael Lee',
    Status: 'in-progress',
    FoodName: 'Vegetable Stir Fry',
    CustomerName: 'Michael Lee',
    OrderTime: new Date('2025-08-07T11:50:00'),
    EstimatedTime: new Date('2025-08-07T12:05:00'),
    Notified: 'No'
  },
  {
    OrderNumber: 'ORD-004',
    ChefId: 'CH001',
    ChefName: 'Alice Smith',
    Status: 'in-progress',
    FoodName: 'Spaghetti Carbonara',
    CustomerName: 'Sarah Davis',
    OrderTime: new Date('2025-08-07T12:00:00'),
    EstimatedTime: new Date('2025-08-07T12:20:00'),
    Notified: 'No'
  },
  {
    OrderNumber: 'ORD-005',
    ChefId: 'CH002',
    ChefName: 'Bob Johnson',
    Status: 'completed',
    FoodName: 'Grilled Salmon',
    CustomerName: 'David Kim',
    OrderTime: new Date('2025-08-07T11:40:00'),
    EstimatedTime: new Date('2025-08-07T12:05:00'),
    Notified: 'Yes'
  },
  {
    OrderNumber: 'ORD-006',
    ChefId: 'CH003',
    ChefName: 'Michael Lee',
    Status: 'completed',
    FoodName: 'Caesar Salad',
    CustomerName: 'Lisa Taylor',
    OrderTime: new Date('2025-08-07T11:35:00'),
    EstimatedTime: new Date('2025-08-07T11:45:00'),
    Notified: 'Yes'
  },
  {
    OrderNumber: 'ORD-007',
    ChefId: 'CH001',
    ChefName: 'Alice Smith',
    Status: 'not started',
    FoodName: 'Beef Tacos',
    CustomerName: 'James Martinez',
    OrderTime: new Date('2025-08-07T12:05:00'),
    EstimatedTime: new Date('2025-08-07T12:20:00'),
    Notified: 'No'
  },
  {
    OrderNumber: 'ORD-008',
    ChefId: 'CH002',
    ChefName: 'Bob Johnson',
    Status: 'in-progress',
    FoodName: 'Pad Thai',
    CustomerName: 'Olivia Chen',
    OrderTime: new Date('2025-08-07T12:10:00'),
    EstimatedTime: new Date('2025-08-07T12:30:00'),
    Notified: 'No'
  },
  {
    OrderNumber: 'ORD-009',
    ChefId: 'CH003',
    ChefName: 'Michael Lee',
    Status: 'not started',
    FoodName: 'Mushroom Risotto',
    CustomerName: 'Ethan Patel',
    OrderTime: new Date('2025-08-07T12:15:00'),
    EstimatedTime: new Date('2025-08-07T12:40:00'),
    Notified: 'No'
  },
  {
    OrderNumber: 'ORD-010',
    ChefId: 'CH001',
    ChefName: 'Alice Smith',
    Status: 'completed',
    FoodName: 'Butter Chicken',
    CustomerName: 'Sophia Adams',
    OrderTime: new Date('2025-08-07T11:55:00'),
    EstimatedTime: new Date('2025-08-07T12:15:00'),
    Notified: 'Yes'
  }
];