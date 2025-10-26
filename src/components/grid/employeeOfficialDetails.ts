
export interface EmployeeProfile {
  Name: string;
  EmployeeCode: string;
  Team: string;
  Designation: string;
  TeamLead: string;
  ManagerName: string;
  Mail: string;
  DateOfJoining: Date;
}

export const employeeDirectory: EmployeeProfile[] = [
  {
    Name: 'Michael',
    EmployeeCode: 'EMP-10001',
    Team: 'Management',
    Designation: 'General Manager',
    TeamLead: 'Christopher Anderson',
    ManagerName: 'Christopher Anderson',
    Mail: 'michael@example.com',
    DateOfJoining: new Date(731764800000),
  },
  {
    Name: 'James',
    EmployeeCode: 'EMP-10002',
    Team: 'Infrastructure and Operations',
    Designation: 'Manager of Infrastructure and Operations',
    TeamLead: 'Michael Anderson',
    ManagerName: 'Christopher Anderson',
    Mail: 'james_thomas@example.com',
    DateOfJoining: new Date(731764800000),
  },
  {
    Name: 'Jessica Taylor',
    EmployeeCode: 'EMP-10003',
    Team: 'Technical Support',
    Designation: 'Manager of Technical Support',
    TeamLead: 'Michael Anderson',
    ManagerName: 'Christopher Anderson',
    Mail: 'jessica_taylor@example.com',
    DateOfJoining: new Date(731764800000),
  },
  {
    Name: 'Sarah Davis',
    EmployeeCode: 'EMP-10004',
    Team: 'Sales and Business Development',
    Designation: 'Manager of Sales and Business Development',
    TeamLead: 'Michael Anderson',
    ManagerName: 'Christopher Anderson',
    Mail: 'sarah_davis@example.com',
    DateOfJoining: new Date(731764800000),
  },
  {
    Name: 'Jennifer',
    EmployeeCode: 'EMP-10005',
    Team: 'Software Development',
    Designation: 'Manager of Software Development',
    TeamLead: 'Michael Anderson',
    ManagerName: 'Christopher Anderson',
    Mail: 'jennifer_martinez@example.com',
    DateOfJoining: new Date(731764800000),
  },
  {
    Name: 'Michael Brown',
    EmployeeCode: 'EMP-10006',
    Team: 'Marketing and Communication',
    Designation: 'Manager of Marketing and Communication',
    TeamLead: 'Anderson',
    ManagerName: 'Christopher Anderson',
    Mail: 'michael_brown@example.com',
    DateOfJoining: new Date(731764800000),
  },
  {
    Name: 'Emily Johnson',
    EmployeeCode: 'EMP-10007',
    Team: 'Finance and Accounting',
    Designation: 'Manager of Finance and Accounting',
    TeamLead: 'Michael Anderson',
    ManagerName: 'Christopher Anderson',
    Mail: 'emily_johnson@example.com',
    DateOfJoining: new Date(731764800000),
  },
  {
    Name: 'John Smith',
    EmployeeCode: 'EMP-10008',
    Team: 'Human Resources (HR)',
    Designation: 'Manager of Human Resources (HR)',
    TeamLead: 'Michael Anderson',
    ManagerName: 'Christopher Anderson',
    Mail: 'john_smith@example.com',
    DateOfJoining: new Date(731764800000),
  },
  {
    Name: 'Nancy Scott',
    EmployeeCode: 'EMP-10009',
    Team: 'Strategy and Planning',
    Designation: 'Manager of Strategy and Planning',
    TeamLead: 'Michael Anderson',
    ManagerName: 'Christopher Anderson',
    Mail: 'nancy_scott@example.com',
    DateOfJoining: new Date(731764800000),
  },
];