export interface EmployeeAssetDetail {
  EmployeeName: string;
  EmployeeID: string;
  MailID: string;
  DateOfJoining: Date | string;
  Designation: string;
  EmployeeAvailability: string;
  AssetKit: string;
  AssetKitDistribution: Date | string;
  Location: string;
  PhoneNumber: string | number;
  Team: string;
  SoftwareTeam: string;
  ReportTo: string;
  YearOfExperience: string;
}

export const employeeAssetRegistry: EmployeeAssetDetail[] = [
    {
        "EmployeeID": 'EMP-1001',
        "EmployeeName": "Emma",
        "MailID": "emma@example.com",
        "PhoneNumber": '(711) 555-4444',
        "Designation": "Sales Representative",
        "Team": "Sales",
        "SoftwareTeam": "Web-General",
        "ReportTo": "Vinet",
        "DateOfJoining": new Date(2022, 4, 1),
        "YearOfExperience": "3 Years",
        "Location": "Reims",
        "AssetKit": "Headset, Laptop",
        "AssetKitDistribution": new Date(2022, 4, 1),
        "EmployeeAvailability": "Available"
    },
    {
        "EmployeeID": 'EMP-1002',
        "EmployeeName": "James",
        "MailID": "james@example.com",
        "PhoneNumber": '(206) 555-1189',
        "Designation": "Marketing Manager",
        "Team": "Marketing",
        "SoftwareTeam": "Web-Server",
        "ReportTo": "Suprd",
        "DateOfJoining": new Date(2022, 7, 16),
        "YearOfExperience": "1 Year 10 Months",
        "Location": "Albuquerque",
        "AssetKit": "Laptop, Projector",
        "AssetKitDistribution": new Date(2022, 7, 16),
        "EmployeeAvailability": "Available"
    },
    {
        "EmployeeID": 'EMP-1003',
        "EmployeeName": "Olivia",
        "MailID": "olivia@example.com",
        "PhoneNumber": '(710) 555-5598',
        "Designation": "HR Specialist",
        "Team": "Human Resources",
        "SoftwareTeam": "Web-General",
        "ReportTo": "Hanar",
        "DateOfJoining": new Date(2022, 3, 1),
        "YearOfExperience": "1 Year",
        "Location": "Barquisimeto",
        "AssetKit": "Headset, Laptop",
        "AssetKitDistribution": new Date(2022, 3, 1),
        "EmployeeAvailability": "Not available"
    },
    {
        "EmployeeID": 'EMP-1004',
        "EmployeeName": "Isabella",
        "MailID": "isabella@example.com",
        "PhoneNumber": '(811) 555-7773',
        "Designation": "Sales Representative",
        "Team": "Sales",
        "SoftwareTeam": "Window",
        "ReportTo": "Vinet",
        "DateOfJoining": new Date(2023, 4, 3),
        "YearOfExperience": "2 Years",
        "Location": "Albuquerque",
        "AssetKit": "Headset, Laptop",
        "AssetKitDistribution": new Date(2023, 4, 3),
        "EmployeeAvailability": "Available"
    },
    {
        "EmployeeID": 'EMP-1005',
        "EmployeeName": "William",
        "MailID": "william@example.com",
        "PhoneNumber": '(712) 555-4848',
        "Designation": "IT Support",
        "Team": "IT Department",
        "SoftwareTeam": "Web-Server",
        "ReportTo": "Tomsp",
        "DateOfJoining": new Date(2023, 9, 17),
        "YearOfExperience": "5 Years 3 Months",
        "Location": "Reims",
        "AssetKit": "Keyboard, Laptop",
        "AssetKitDistribution": new Date(2023, 9, 17),
        "EmployeeAvailability": "Not available"
    },
    {
        "EmployeeID": 'EMP-1006',
        "EmployeeName": "Michael",
        "MailID": "michael@example.com",
        "PhoneNumber": '(206) 555-8122',
        "Designation": "HR Specialist",
        "Team": "Human Resources",
        "SoftwareTeam": "Designer",
        "ReportTo": "Victe",
        "DateOfJoining": new Date(2023, 9, 17),
        "YearOfExperience": "3 Years 1 Month",
        "Location": "Barquisimeto",
        "AssetKit": "Headset, Laptop",
        "AssetKitDistribution": new Date(2023, 9, 17),
        "EmployeeAvailability": "Available"
    },
    {
        "EmployeeID": 'EMP-1007',
        "EmployeeName": "Benjamin",
        "MailID": "benjamin@example.com",
        "PhoneNumber": '(206) 555-3412',
        "Designation": "Marketing Manager",
        "Team": "Marketing",
        "SoftwareTeam": "Support",
        "ReportTo": "Hanar",
        "DateOfJoining": new Date(2024, 0, 2),
        "YearOfExperience": "4 Years",
        "Location": "Reims",
        "AssetKit": "Laptop, Projector",
        "AssetKitDistribution": new Date(2024, 0, 2),
        "EmployeeAvailability": "Not available"
    },
    {
        "EmployeeID": 'EMP-1008',
        "EmployeeName": "Sophia",
        "MailID": "sophia@example.com",
        "PhoneNumber": '(206) 555-9482',
        "Designation": "Customer Service",
        "Team": "Customer Support",
        "SoftwareTeam": "Web-Server",
        "ReportTo": "Vinet",
        "DateOfJoining": new Date(2024, 2, 5),
        "YearOfExperience": "11 Months",
        "Location": "Albuquerque",
        "AssetKit": "Headset, Phone",
        "AssetKitDistribution": new Date(2024, 2, 5),
        "EmployeeAvailability": "Not available"
    },
    {
        "EmployeeID": 'EMP-1009',
        "EmployeeName": "Elizabeth",
        "MailID": "elizabeth@example.com",
        "PhoneNumber": '(206) 555-9857',
        "Designation": "Finance Analyst",
        "Team": "Finance",
        "SoftwareTeam": "Testing",
        "ReportTo": "Suprd",
        "DateOfJoining": new Date(2025, 6, 15),
        "YearOfExperience": "3 Years 5 Months",
        "Location": "Reims",
        "AssetKit": "Calculator, Headset",
        "AssetKitDistribution": new Date(2025, 6, 15),
        "EmployeeAvailability": "Available"
    }
];
