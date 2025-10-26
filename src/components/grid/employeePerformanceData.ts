export interface EmployeeDetails {
  Department: string;
  Email: string;
  EmployeeID: string;
  JoinDate: Date | string;
  LastPromotionDate: Date | string;
  ManagerID: string;
  Name: string;
  PerformanceRating: number;
  Phone: string;
  Role: string;
  Salary: number;
  Status: string;
  Task: number;
}

export const employeePerformanceData: EmployeeDetails[] =[
  {
    EmployeeID: "EMP-1022",
    Name: "Susan Adams",
    Task: 99,
    Department: "HR",
    Status: "Active",
    JoinDate: new Date(1644192000000),
    Email: "susan.adams@company.com",
    Phone: "+91-9876543210",
    Role: "HR Manager",
    ManagerID: "EMP-1001",
    Salary: 85000,
    PerformanceRating: 4.5,
    LastPromotionDate: new Date(1672444800000)
  },
  {
    EmployeeID: "EMP-1015",
    Name: "Robert Hernandez",
    Task: 24,
    Department: "Operations",
    Status: "Active",
    JoinDate: new Date(1612137600000),
    Email: "robert.hernandez@company.com",
    Phone: "+91-9876543211",
    Role: "Operations Analyst",
    ManagerID: "EMP-1022",
    Salary: 72000,
    PerformanceRating: 3.8,
    LastPromotionDate: new Date(1680307200000)
  },
  {
    EmployeeID: "EMP-1002",
    Name: "Jennifer Williams",
    Task: 75,
    Department: "IT",
    Status: "Active",
    JoinDate: new Date(1580515200000),
    Email: "jennifer.williams@company.com",
    Phone: "+91-9876543212",
    Role: "Software Engineer",
    ManagerID: "EMP-1015",
    Salary: 95000,
    PerformanceRating: 4.2,
    LastPromotionDate: new Date(1669852800000)
  },
  {
    EmployeeID: "EMP-1038",
    Name: "Laura Morris",
    Task: 92,
    Department: "Operations",
    Status: "Active",
    JoinDate: new Date(1548979200000),
    Email: "laura.morris@company.com",
    Phone: "+91-9876543213",
    Role: "Operations Lead",
    ManagerID: "EMP-1002",
    Salary: 88000,
    PerformanceRating: 4.6,
    LastPromotionDate: new Date(1677628800000)
  },
  {
    EmployeeID: "EMP-1032",
    Name: "Donna Parker",
    Task: 46,
    Department: "HR",
    Status: "Inactive",
    JoinDate: new Date(1517443200000),
    Email: "donna.parker@company.com",
    Phone: "+91-9876543214",
    Role: "HR Executive",
    ManagerID: "EMP-1038",
    Salary: 67000,
    PerformanceRating: 3.5,
    LastPromotionDate: new Date(1654041600000)
  },
  {
    EmployeeID: "EMP-1030",
    Name: "Sandra Phillips",
    Task: 100,
    Department: "HR",
    Status: "Inactive",
    JoinDate: new Date(1640995200000),
    Email: "sandra.phillips@company.com",
    Phone: "+91-9876543220",
    Role: "HR Director",
    ManagerID: "EMP-1022",
    Salary: 98000,
    PerformanceRating: 4.7,
    LastPromotionDate: new Date(1677628800000)
    },
    {
    EmployeeID: "EMP-1008",
    Name: "Emily Rodriguez",
    Task: 60,
    Department: "Sales",
    Status: "Active",
    JoinDate: new Date(1601510400000),
    Email: "emily.rodriguez@company.com",
    Phone: "+91-9876543221",
    Role: "Sales Executive",
    ManagerID: "EMP-1030",
    Salary: 75000,
    PerformanceRating: 4.0,
    LastPromotionDate: new Date(1672444800000)
    },
    {
    EmployeeID: "EMP-1045",
    Name: "Timothy Bailey",
    Task: 79,
    Department: "Sales",
    Status: "Inactive",
    JoinDate: new Date(1564617600000),
    Email: "timothy.bailey@company.com",
    Phone: "+91-9876543222",
    Role: "Sales Manager",
    ManagerID: "EMP-1008",
    Salary: 87000,
    PerformanceRating: 3.9,
    LastPromotionDate: new Date(1661990400000)
    },
    {
    EmployeeID: "EMP-1047",
    Name: "Jason Cooper",
    Task: 100,
    Department: "Sales",
    Status: "Inactive",
    JoinDate: new Date(1572566400000),
    Email: "jason.cooper@company.com",
    Phone: "+91-9876543223",
    Role: "Sales Director",
    ManagerID: "EMP-1045",
    Salary: 99000,
    PerformanceRating: 4.8,
    LastPromotionDate: new Date(1659312000000)
    },
    {
    EmployeeID: "EMP-1027",
    Name: "Steven Perez",
    Task: 83,
    Department: "Operations",
    Status: "Active",
    JoinDate: new Date(1677628800000),
    Email: "steven.perez@company.com",
    Phone: "+91-9876543224",
    Role: "Operations Manager",
    ManagerID: "EMP-1047",
    Salary: 88000,
    PerformanceRating: 4.3,
    LastPromotionDate: new Date(1680307200000)
    },
    {
    EmployeeID: "EMP-1004",
    Name: "Charles Martinez",
    Task: 71,
    Department: "Marketing",
    Status: "Inactive",
    JoinDate: new Date(1543622400000),
    Email: "charles.martinez@company.com",
    Phone: "+91-9876543225",
    Role: "Marketing Manager",
    ManagerID: "EMP-1027",
    Salary: 82000,
    PerformanceRating: 3.6,
    LastPromotionDate: new Date(1654041600000)
    },
    {
    EmployeeID: "EMP-1005",
    Name: "Christopher Garcia",
    Task: 34,
    Department: "Finance",
    Status: "Active",
    JoinDate: new Date(1625097600000),
    Email: "christopher.garcia@company.com",
    Phone: "+91-9876543226",
    Role: "Finance Associate",
    ManagerID: "EMP-1004",
    Salary: 78000,
    PerformanceRating: 4.1,
    LastPromotionDate: new Date(1672444800000)
    },
    {
    EmployeeID: "EMP-1013",
    Name: "James Allen",
    Task: 52,
    Department: "Operations",
    Status: "Inactive",
    JoinDate: new Date(1593561600000),
    Email: "james.allen@company.com",
    Phone: "+91-9876543227",
    Role: "Operations Coordinator",
    ManagerID: "EMP-1005",
    Salary: 69000,
    PerformanceRating: 3.7,
    LastPromotionDate: new Date(1667260800000)
    },
    {
    EmployeeID: "EMP-1048",
    Name: "Kathleen Richard",
    Task: 78,
    Department: "Finance",
    Status: "Inactive",
    JoinDate: new Date(1525132800000),
    Email: "kathleen.richardson@company.com",
    Phone: "+91-9876543228",
    Role: "Senior Accountant",
    ManagerID: "EMP-1013",
    Salary: 86000,
    PerformanceRating: 4.0,
    LastPromotionDate: new Date(1659312000000)
    },
    {
    EmployeeID: "EMP-1007",
    Name: "Daniel Clark",
    Task: 32,
    Department: "Sales",
    Status: "Inactive",
    JoinDate: new Date(1538352000000),
    Email: "daniel.clark@company.com",
    Phone: "+91-9876543229",
    Role: "Sales Associate",
    ManagerID: "EMP-1048",
    Salary: 72000,
    PerformanceRating: 3.5,
    LastPromotionDate: new Date(1654041600000)
    }
];
