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

export interface LeadsDataItem {
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

export const leadManagementData: LeadsDataItem[] = [
        {
            id: 1,
            leadId: "L-1001",
            details: {
                name: "John Doe",
                initial: "JD",
                email: "john.doe@example.com",
                colorTheme: "Red"
            },
            status: "Qualified",
            interest: "High",
            date: new Date(2024, 8, 15),
            assignee: {
                name: "Alice Smith",
                avatar: "avatar-8.jpg"
            },
            source: "Web Inquiry",
            revenue: 90000
        },
        {
            id: 2,
            leadId: "L-1002",
            details: {
                name: "Emily White",
                initial: "EW",
                email: "emily.white@example.com",
                colorTheme: "Blue"
            },
            status: "New",
            interest: "Medium",
            date: new Date(2024, 9, 8),
            assignee: {
                name: "Bob Johnson",
                avatar: "avatar-1.jpg"
            },
            source: "Referral",
            revenue: 80000
        },
        {
            id: 3,
            leadId: "L-1003",
            details: {
                name: "Michael Green",
                initial: "MG",
                email: "michael.green@example.com",
                colorTheme: "Green"
            },
            status: "Contacted",
            interest: "High",
            date: new Date(2024, 11, 9),
            assignee: {
                name: "Carol Brown",
                avatar: "avatar-4.jpg"
            },
            source: "Trade Show",
            revenue: 85000
        },
        {
            id: 4,
            leadId: "L-1004",
            details: {
                name: "Sarah Brown",
                initial: "SB",
                email: "sarah.brown@example.com",
                colorTheme: "Orange"
            },
            status: "Lead",
            interest: "Low",
            date: new Date(2024, 8, 14),
            assignee: {
                name: "Dave Wilson",
                avatar: "avatar-3.jpg"
            },
            source: "Email Campaign",
            revenue: 60000
        },
        {
            id: 5,
            leadId: "L-1005",
            details: {
                name: "David Miller",
                initial: "DM",
                email: "david.miller@example.com",
                colorTheme: "Blue"
            },
            status: "Qualified",
            interest: "High",
            date: new Date(2024, 8, 20),
            assignee: {
                name: "Emma Davis",
                avatar: "avatar-11.jpg"
            },
            source: "Direct Mail",
            revenue: 95000
        },
        {
            id: 6,
            leadId: "L-1006",
            details: {
                name: "Laura Martinez",
                initial: "LM",
                email: "laura.martinez@example.com",
                colorTheme: "Purple"
            },
            status: "New",
            interest: "Medium",
            date: new Date(2024, 8, 16),
            assignee: {
                name: "Frank Moore",
                avatar: "avatar-2.jpg"
            },
            source: "Web Inquiry",
            revenue: 75000
        },
        {
            id: 7,
            leadId: "L-1007",
            details: {
                name: "Chris Lee",
                initial: "CL",
                email: "chris.lee@example.com",
                colorTheme: "Green"
            },
            status: "Contacted",
            interest: "Medium",
            date: new Date(2024, 8, 17),
            assignee: {
                name: "Grace Hui",
                avatar: "avatar-12.jpg"
            },
            source: "Referral",
            revenue: 85000
        },
        {
            id: 8,
            leadId: "L-1008",
            details: {
                name: "Megan Johnson",
                initial: "MJ",
                email: "megan.johnson@example.com",
                colorTheme: "Orange"
            },
            status: "Lead",
            interest: "High",
            date: new Date(2024, 8, 18),
            assignee: {
                name: "Henry King",
                avatar: "avatar-5.jpg"
            },
            source: "Trade Show",
            revenue: 95000
        },
        {
            id: 9,
            leadId: "L-1009",
            details: {
                name: "Robert Smith",
                initial: "RS",
                email: "robert.smith@example.com",
                colorTheme: "Blue"
            },
            status: "New",
            interest: "Medium",
            date: new Date(2024, 8, 19),
            assignee: {
                name: "Ivy Walker",
                avatar: "avatar-14.jpg"
            },
            source: "Email Campaign",
            revenue: 70000
        },
        {
            id: 10,
            leadId: "L-1010",
            details: {
                name: "Olivia Davis",
                initial: "OD",
                email: "olivia.davis@example.com",
                colorTheme: "Red"
            },
            status: "Contacted",
            interest: "Low",
            date: new Date(2024, 8, 20),
            assignee: {
                name: "Jack Lee",
                avatar: "avatar-6.jpg"
            },
            source: "Direct Mail",
            revenue: 90000
        }
    ];
