export interface Project {
  ProjectId: string;
  ProjectName: string;
  RiskLevel: string;
  ImpactScore: number;
  Department: string;
  ProjectManager: string;
  Budget: number;
  Timeline: Date;
  MitigationStatus: string;
}

export const projectData: object[] = [
  {
    "ProjectId": "PRJ-001",
    "ProjectName": "Digital Banking Platform",
    "RiskLevel": "Critical",
    "ImpactScore": 95,
    "Department": "FinTech",
    "ProjectManager": "Sarah Mitchell",
    "Budget": 2500000,
    "Timeline": new Date(2024, 11, 31), // Full year project (Dec 31, 2024)
    "MitigationStatus": "Urgent"
  },
  {
    "ProjectId": "PRJ-002",
    "ProjectName": "Customer Analytics Dashboard",
    "RiskLevel": "High",
    "ImpactScore": 78,
    "Department": "Data Science",
    "ProjectManager": "Michael Torres",
    "Budget": 850000,
    "Timeline": new Date(2024, 8, 30), // Q2-Q3 project (Sep 30, 2024)
    "MitigationStatus": "In Progress"
  },
  {
    "ProjectId": "PRJ-003",
    "ProjectName": "Mobile App Redesign",
    "RiskLevel": "Medium",
    "ImpactScore": 65,
    "Department": "UX Design",
    "ProjectManager": "Emma Rodriguez",
    "Budget": 450000,
    "Timeline": new Date(2024, 8, 15), // Q3 project (Sep 15, 2024)
    "MitigationStatus": "Planned"
  },
  {
    "ProjectId": "PRJ-004",
    "ProjectName": "AI Chatbot Integration",
    "RiskLevel": "Critical",
    "ImpactScore": 88,
    "Department": "AI/ML",
    "ProjectManager": "David Chen",
    "Budget": 1800000,
    "Timeline": new Date(2024, 8, 30), // Q1-Q3 project (Sep 30, 2024)
    "MitigationStatus": "Urgent"
  },
  {
    "ProjectId": "PRJ-005",
    "ProjectName": "Security Audit System",
    "RiskLevel": "Low",
    "ImpactScore": 42,
    "Department": "Security",
    "ProjectManager": "Lisa Thompson",
    "Budget": 320000,
    "Timeline": new Date(2024, 11, 15), // Q4 project (Dec 15, 2024)
    "MitigationStatus": "Monitored"
  },
  {
    "ProjectId": "PRJ-006",
    "ProjectName": "Cloud Migration Phase 2",
    "RiskLevel": "High",
    "ImpactScore": 82,
    "Department": "Infrastructure",
    "ProjectManager": "James Wilson",
    "Budget": 1200000,
    "Timeline": new Date(2024, 11, 31), // Q2-Q4 project (Dec 31, 2024)
    "MitigationStatus": "In Progress"
  },
  {
    "ProjectId": "PRJ-007",
    "ProjectName": "Employee Portal Upgrade",
    "RiskLevel": "Medium",
    "ImpactScore": 58,
    "Department": "HR Tech",
    "ProjectManager": "Amanda Foster",
    "Budget": 380000,
    "Timeline": new Date(2024, 11, 20), // Q3-Q4 project (Dec 20, 2024)
    "MitigationStatus": "Planned"
  },
  {
    "ProjectId": "PRJ-008",
    "ProjectName": "Blockchain Payment Gateway",
    "RiskLevel": "Critical",
    "ImpactScore": 91,
    "Department": "FinTech",
    "ProjectManager": "Robert Kim",
    "Budget": 3200000,
    "Timeline": new Date(2024, 11, 31), // Q1-Q4 project (Dec 31, 2024)
    "MitigationStatus": "Urgent"
  },
  {
    "ProjectId": "PRJ-009",
    "ProjectName": "IoT Device Management",
    "RiskLevel": "Low",
    "ImpactScore": 38,
    "Department": "IoT",
    "ProjectManager": "Jennifer Adams",
    "Budget": 280000,
    "Timeline": new Date(2024, 10, 30), // Q4 project (Nov 30, 2024)
    "MitigationStatus": "Monitored"
  },
  {
    "ProjectId": "PRJ-010",
    "ProjectName": "Data Warehouse Optimization",
    "RiskLevel": "High",
    "ImpactScore": 75,
    "Department": "Data Engineering",
    "ProjectManager": "Chris Martinez",
    "Budget": 950000,
    "Timeline": new Date(2024, 8, 30), // Q2-Q3 project (Sep 30, 2024)
    "MitigationStatus": "In Progress"
  },
  {
    "ProjectId": "PRJ-011",
    "ProjectName": "API Gateway Modernization",
    "RiskLevel": "Medium",
    "ImpactScore": 62,
    "Department": "Backend",
    "ProjectManager": "Ashley Brown",
    "Budget": 520000,
    "Timeline": new Date(2024, 7, 31), // Q3 project (Aug 31, 2024)
    "MitigationStatus": "Planned"
  },
  {
    "ProjectId": "PRJ-012",
    "ProjectName": "Machine Learning Pipeline",
    "RiskLevel": "High",
    "ImpactScore": 85,
    "Department": "AI/ML",
    "ProjectManager": "Kevin Zhang",
    "Budget": 1400000,
    "Timeline": new Date(2024, 11, 31), // Q1-Q4 project (Dec 31, 2024)
    "MitigationStatus": "In Progress"
  },
  {
    "ProjectId": "PRJ-013",
    "ProjectName": "Real-time Analytics Engine",
    "RiskLevel": "Critical",
    "ImpactScore": 93,
    "Department": "Data Science",
    "ProjectManager": "Michelle Lee",
    "Budget": 2100000,
    "Timeline": new Date(2024, 11, 15), // Q2-Q4 project (Dec 15, 2024)
    "MitigationStatus": "Urgent"
  },
  {
    "ProjectId": "PRJ-014",
    "ProjectName": "Legacy System Migration",
    "RiskLevel": "Low",
    "ImpactScore": 45,
    "Department": "Legacy Systems",
    "ProjectManager": "Daniel Garcia",
    "Budget": 360000,
    "Timeline": new Date(2024, 10, 15), // Q4 project (Nov 15, 2024)
    "MitigationStatus": "Monitored"
  },
  {
    "ProjectId": "PRJ-015",
    "ProjectName": "Social Media Integration",
    "RiskLevel": "Medium",
    "ImpactScore": 55,
    "Department": "Marketing Tech",
    "ProjectManager": "Rachel Johnson",
    "Budget": 420000,
    "Timeline": new Date(2024, 9, 30), // Q3-Q4 project (Oct 30, 2024)
    "MitigationStatus": "Planned"
  }
];
