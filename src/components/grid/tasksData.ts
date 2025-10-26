export interface TaskDetail {
    TaskID: number;
    TaskName: string;
    Progress: number;
    AssignedTo: string;
    Deadline: Date;
}

export const tasksData: object[] = [
    {
        "TaskID": 1,
        "TaskName": "Deployment",
        "Progress": 0.27,
        "AssignedTo": "David",
        "Deadline": new Date(2024, 6, 18),
        "Priority": "Medium",
        "Status": "In Progress",
        "Department": "Design"
    },
    {
        "TaskID": 2,
        "TaskName": "Testing",
        "Progress": 0.86,
        "AssignedTo": "Eve",
        "Deadline": new Date(2024, 5, 10),
        "Priority": "Medium",
        "Status": "On Hold",
        "Department": "Design"
    },
    {
        "TaskID": 3,
        "TaskName": "Feature Rollout",
        "Progress": 0.45,
        "AssignedTo": "Alice",
        "Deadline": new Date(2024, 1, 16),
        "Priority": "Low",
        "Status": "Not Started",
        "Department": "Engineering"
    },
    {
        "TaskID": 4,
        "TaskName": "Testing",
        "Progress": 0.78,
        "AssignedTo": "Judy",
        "Deadline": new Date(2024, 1, 13),
        "Priority": "Low",
        "Status": "Not Started",
        "Department": "QA"
    },
    {
        "TaskID": 5,
        "TaskName": "Feature Rollout",
        "Progress": 0.29,
        "AssignedTo": "Charlie",
        "Deadline": new Date(2023, 11, 30),
        "Priority": "Medium",
        "Status": "On Hold",
        "Department": "Engineering"
    },
    {
        "TaskID": 6,
        "TaskName": "Documentation",
        "Progress": 0.68,
        "AssignedTo": "David",
        "Deadline": new Date(2024, 2, 7),
        "Priority": "Medium",
        "Status": "Completed",
        "Department": "QA"
    },
    {
        "TaskID": 7,
        "TaskName": "Documentation",
        "Progress": 0.46,
        "AssignedTo": "Alice",
        "Deadline": new Date(2024, 1, 10),
        "Priority": "Low",
        "Status": "In Progress",
        "Department": "Support"
    },
    {
        "TaskID": 8,
        "TaskName": "Bug Fixing",
        "Progress": 0.55,
        "AssignedTo": "Alice",
        "Deadline": new Date(2023, 10, 6),
        "Priority": "Medium",
        "Status": "In Progress",
        "Department": "Engineering"
    },
    {
        "TaskID": 9,
        "TaskName": "Deployment",
        "Progress": 0.36,
        "AssignedTo": "David",
        "Deadline": new Date(2023, 11, 27),
        "Priority": "High",
        "Status": "Completed",
        "Department": "Engineering"
    },
    {
        "TaskID": 10,
        "TaskName": "Feature Rollout",
        "Progress": 0.76,
        "AssignedTo": "David",
        "Deadline": new Date(2024, 6, 4),
        "Priority": "High",
        "Status": "Completed",
        "Department": "Design"
    },
    {
        "TaskID": 11,
        "TaskName": "UI Design",
        "Progress": 0.35,
        "AssignedTo": "Judy",
        "Deadline": new Date(2025, 7, 7),
        "Priority": "Low",
        "Status": "On Hold",
        "Department": "Design"
    },
    {
        "TaskID": 12,
        "TaskName": "Feature Rollout",
        "Progress": 0.29,
        "AssignedTo": "Charlie",
        "Deadline": new Date(2024, 2, 29),
        "Priority": "Low",
        "Status": "On Hold",
        "Department": "QA"
    },
    {
        "TaskID": 13,
        "TaskName": "Documentation",
        "Progress": 0.47,
        "AssignedTo": "Bob",
        "Deadline": new Date(2024, 5, 1),
        "Priority": "High",
        "Status": "On Hold",
        "Department": "QA"
    },
    {
        "TaskID": 14,
        "TaskName": "Bug Fixing",
        "Progress": 0.69,
        "AssignedTo": "Heidi",
        "Deadline": new Date(2025, 7, 18),
        "Priority": "Medium",
        "Status": "On Hold",
        "Department": "Product"
    },
    {
        "TaskID": 15,
        "TaskName": "UI Design",
        "Progress": 0.60,
        "AssignedTo": "Ivan",
        "Deadline": new Date(2024, 3, 4),
        "Priority": "Low",
        "Status": "On Hold",
        "Department": "Support"
    },
    {
        "TaskID": 16,
        "TaskName": "Bug Fixing",
        "Progress": 0.38,
        "AssignedTo": "Heidi",
        "Deadline": new Date(2024, 0, 2),
        "Priority": "Low",
        "Status": "Not Started",
        "Department": "Product"
    },
    {
        "TaskID": 17,
        "TaskName": "Bug Fixing",
        "Progress": 0.75,
        "AssignedTo": "Eve",
        "Deadline": new Date(2024, 4, 20),
        "Priority": "High",
        "Status": "Completed",
        "Department": "Engineering"
    },
    {
        "TaskID": 18,
        "TaskName": "Deployment",
        "Progress": 0.90,
        "AssignedTo": "Eve",
        "Deadline": new Date(2024, 6, 27),
        "Priority": "Medium",
        "Status": "On Hold",
        "Department": "Product"
    },
    {
        "TaskID": 19,
        "TaskName": "Code Review",
        "Progress": 0.71,
        "AssignedTo": "Heidi",
        "Deadline": new Date(2024, 5, 12),
        "Priority": "Medium",
        "Status": "Completed",
        "Department": "QA"
    },
    {
        "TaskID": 20,
        "TaskName": "UI Design",
        "Progress": 0.05,
        "AssignedTo": "Heidi",
        "Deadline": new Date(2024, 3, 22),
        "Priority": "Medium",
        "Status": "Not Started",
        "Department": "Support"
    },
    {
        "TaskID": 21,
        "TaskName": "UI Design",
        "Progress": 0.86,
        "AssignedTo": "Grace",
        "Deadline": new Date(2024, 0, 9),
        "Priority": "Low",
        "Status": "On Hold",
        "Department": "Product"
    },
    {
        "TaskID": 22,
        "TaskName": "Deployment",
        "Progress": 0.33,
        "AssignedTo": "Frank",
        "Deadline": new Date(2024, 5, 1),
        "Priority": "High",
        "Status": "Completed",
        "Department": "Engineering"
    },
    {
        "TaskID": 23,
        "TaskName": "UI Design",
        "Progress": 0.11,
        "AssignedTo": "Frank",
        "Deadline": new Date(2024, 1, 4),
        "Priority": "Low",
        "Status": "Completed",
        "Department": "Product"
    },
    {
        "TaskID": 24,
        "TaskName": "Documentation",
        "Progress": 0.32,
        "AssignedTo": "Alice",
        "Deadline": new Date(2025, 7, 4),
        "Priority": "Low",
        "Status": "In Progress",
        "Department": "Product"
    },
    {
        "TaskID": 25,
        "TaskName": "Code Review",
        "Progress": 0.07,
        "AssignedTo": "Frank",
        "Deadline": new Date(2024, 3, 13),
        "Priority": "High",
        "Status": "In Progress",
        "Department": "Design"
    },
    {
        "TaskID": 26,
        "TaskName": "Code Review",
        "Progress": 0.97,
        "AssignedTo": "Bob",
        "Deadline": new Date(2024, 6, 1),
        "Priority": "Low",
        "Status": "On Hold",
        "Department": "Design"
    },
    {
        "TaskID": 27,
        "TaskName": "Code Review",
        "Progress": 0.36,
        "AssignedTo": "Bob",
        "Deadline": new Date(2023, 11, 2),
        "Priority": "Medium",
        "Status": "On Hold",
        "Department": "QA"
    },
    {
        "TaskID": 28,
        "TaskName": "Database Migration",
        "Progress": 0.57,
        "AssignedTo": "Bob",
        "Deadline": new Date(2024, 6, 7),
        "Priority": "Medium",
        "Status": "On Hold",
        "Department": "Product"
    },
    {
        "TaskID": 29,
        "TaskName": "Deployment",
        "Progress": 0.05,
        "AssignedTo": "Eve",
        "Deadline": new Date(2024, 1, 4),
        "Priority": "Low",
        "Status": "Not Started",
        "Department": "Support"
    },
    {
        "TaskID": 30,
        "TaskName": "Bug Fixing",
        "Progress": 0.58,
        "AssignedTo": "Frank",
        "Deadline": new Date(2024, 5, 13),
        "Priority": "Low",
        "Status": "Completed",
        "Department": "Engineering"
    },
    {
        "TaskID": 31,
        "TaskName": "Bug Fixing",
        "Progress": 0.99,
        "AssignedTo": "Ivan",
        "Deadline": new Date(2024, 1, 11),
        "Priority": "High",
        "Status": "Not Started",
        "Department": "Support"
    },
    {
        "TaskID": 32,
        "TaskName": "Documentation",
        "Progress": 0.11,
        "AssignedTo": "David",
        "Deadline": new Date(2025, 7, 26),
        "Priority": "High",
        "Status": "On Hold",
        "Department": "Product"
    },
    {
        "TaskID": 33,
        "TaskName": "Database Migration",
        "Progress": 0.56,
        "AssignedTo": "Grace",
        "Deadline": new Date(2023, 11, 25),
        "Priority": "Medium",
        "Status": "In Progress",
        "Department": "Product"
    },
    {
        "TaskID": 34,
        "TaskName": "Bug Fixing",
        "Progress": 0.60,
        "AssignedTo": "David",
        "Deadline": new Date(2023, 11, 23),
        "Priority": "Low",
        "Status": "On Hold",
        "Department": "Product"
    },
    {
        "TaskID": 35,
        "TaskName": "UI Design",
        "Progress": 0.92,
        "AssignedTo": "Judy",
        "Deadline": new Date(2024, 1, 13),
        "Priority": "Low",
        "Status": "On Hold",
        "Department": "QA"
    },
    {
        "TaskID": 36,
        "TaskName": "Bug Fixing",
        "Progress": 0.63,
        "AssignedTo": "Ivan",
        "Deadline": new Date(2024, 3, 22),
        "Priority": "High",
        "Status": "On Hold",
        "Department": "Engineering"
    },
    {
        "TaskID": 37,
        "TaskName": "Code Review",
        "Progress": 0.89,
        "AssignedTo": "Eve",
        "Deadline": new Date(2025, 7, 4),
        "Priority": "Medium",
        "Status": "In Progress",
        "Department": "Engineering"
    },
    {
        "TaskID": 38,
        "TaskName": "Code Review",
        "Progress": 0.43,
        "AssignedTo": "Eve",
        "Deadline": new Date(2024, 5, 21),
        "Priority": "High",
        "Status": "Not Started",
        "Department": "Design"
    },
    {
        "TaskID": 39,
        "TaskName": "Feature Rollout",
        "Progress": 0.06,
        "AssignedTo": "Grace",
        "Deadline": new Date(2024, 5, 5),
        "Priority": "Low",
        "Status": "Completed",
        "Department": "Product"
    },
    {
        "TaskID": 40,
        "TaskName": "UI Design",
        "Progress": 0.16,
        "AssignedTo": "Heidi",
        "Deadline": new Date(2024, 5, 15),
        "Priority": "Medium",
        "Status": "Not Started",
        "Department": "Design"
    },
    {
        "TaskID": 41,
        "TaskName": "Testing",
        "Progress": 0.34,
        "AssignedTo": "Bob",
        "Deadline": new Date(2024, 1, 27),
        "Priority": "High",
        "Status": "Not Started",
        "Department": "Engineering"
    },
    {
        "TaskID": 42,
        "TaskName": "Feature Rollout",
        "Progress": 0.62,
        "AssignedTo": "Heidi",
        "Deadline": new Date(2023, 11, 22),
        "Priority": "Low",
        "Status": "Not Started",
        "Department": "Engineering"
    },
    {
        "TaskID": 43,
        "TaskName": "Database Migration",
        "Progress": 0.37,
        "AssignedTo": "David",
        "Deadline": new Date(2024, 2, 11),
        "Priority": "Medium",
        "Status": "On Hold",
        "Department": "Product"
    },
    {
        "TaskID": 44,
        "TaskName": "Bug Fixing",
        "Progress": 0.62,
        "AssignedTo": "Eve",
        "Deadline": new Date(2024, 4, 28),
        "Priority": "High",
        "Status": "In Progress",
        "Department": "Design"
    },
    {
        "TaskID": 45,
        "TaskName": "UI Design",
        "Progress": 0.14,
        "AssignedTo": "Eve",
        "Deadline": new Date(2023, 10, 26),
        "Priority": "Low",
        "Status": "In Progress",
        "Department": "QA"
    },
    {
        "TaskID": 46,
        "TaskName": "UI Design",
        "Progress": 0.67,
        "AssignedTo": "Charlie",
        "Deadline": new Date(2025, 7, 9),
        "Priority": "Low",
        "Status": "Completed",
        "Department": "Engineering"
    },
    {
        "TaskID": 47,
        "TaskName": "Testing",
        "Progress": 0.17,
        "AssignedTo": "Ivan",
        "Deadline": new Date(2024, 0, 8),
        "Priority": "Low",
        "Status": "Completed",
        "Department": "Product"
    },
    {
        "TaskID": 48,
        "TaskName": "Documentation",
        "Progress": 0.53,
        "AssignedTo": "Judy",
        "Deadline": new Date(2024, 5, 26),
        "Priority": "Medium",
        "Status": "Completed",
        "Department": "Product"
    },
    {
        "TaskID": 49,
        "TaskName": "Feature Rollout",
        "Progress": 0.49,
        "AssignedTo": "Bob",
        "Deadline": new Date(2024, 0, 5),
        "Priority": "Medium",
        "Status": "On Hold",
        "Department": "Product"
    },
    {
        "TaskID": 50,
        "TaskName": "Deployment",
        "Progress": 0.72,
        "AssignedTo": "Ivan",
        "Deadline": new Date(2024, 4, 22),
        "Priority": "Medium",
        "Status": "On Hold",
        "Department": "Product"
    }
]
