export interface ProductCatalogItem {
  ProductId: string;
  ProductName: string;
  Category: string;
  FullDescription: string;
  TechnicalSpecifications: string;
  BusinessValue: string;
}

export const productPortfolio: ProductCatalogItem[] = [
  {
    "ProductId": "PRD-001",
    "ProductName": "Retail Analytics",
    "Category": "Retail Analytics",
    "FullDescription": "Analytics",
    "TechnicalSpecifications": "SaaS with 99.95% uptime, integrates with POS and e-commerce platforms, real-time inventory sync",
    "BusinessValue": "Margins"
  },
  {
    "ProductId": "PRD-002",
    "ProductName": "Manufacturing Analytics",
    "Category": "Industrial IoT",
    "FullDescription": "AI-powered predictive maintenance and quality control for real-time equipment monitoring and optimization",
    "TechnicalSpecifications": "Edge computing with 5G, supports 50,000+ sensors, sub-millisecond latency, SAP/Oracle/ERP integration",
    "BusinessValue": "Efficiency"
  },
  {
    "ProductId": "PRD-003",
    "ProductName": "Learning System",
    "Category": "Education Technology",
    "FullDescription": "Learning",
    "TechnicalSpecifications": "Scalable cloud, supports 1M+ learners, mobile-responsive, WCAG 2.1 compliant",
    "BusinessValue": "Engagement"
  },
  {
    "ProductId": "PRD-004",
    "ProductName": "Risk Assessment",
    "Category": "Fintech Analytics",
    "FullDescription": "Scoring",
    "TechnicalSpecifications": "GPU-accelerated cluster, processes 100,000+ applications daily, credit bureau integration",
    "BusinessValue": "Reduces loan defaults by 25%, speeds approvals, expands lending with alternative data analysis"
  },
  {
    "ProductId": "PRD-005",
    "ProductName": "Cloud Security",
    "Category": "Cybersecurity Solutions",
    "FullDescription": "Comprehensive security with advanced threat detection, real-time monitoring, and automated incident response",
    "TechnicalSpecifications": "Security",
    "BusinessValue": "Reduces response time by 75%, eliminates false positives with AI, ensures compliance"
  },
  {
    "ProductId": "PRD-006",
    "ProductName": "Grid Optimizer",
    "Category": "Renewable Energy",
    "FullDescription": "Grid",
    "TechnicalSpecifications": "Real-time monitoring, integrates solar and wind, microsecond response times",
    "BusinessValue": "Stability"
  },
  {
    "ProductId": "PRD-007",
    "ProductName": "Health Integration",
    "Category": "Medical Technology",
    "FullDescription": "HIPAA-compliant platform for EHR, device, and patient portal integration to enhance care coordination",
    "TechnicalSpecifications": "FHIR",
    "BusinessValue": "Reduces medical errors by 30%, improves care coordination and clinical workflows"
  },
  {
    "ProductId": "PRD-008",
    "ProductName": "Supply Chain Tracker",
    "Category": "Logistics Management",
    "FullDescription": "Tracking",
    "TechnicalSpecifications": "Blockchain-based traceability, IoT sensors, 200+ carrier APIs, ML for demand prediction",
    "BusinessValue": "Reduces inventory costs by 20%, improves supplier performance and delivery accuracy"
  },
  {
    "ProductId": "PRD-009",
    "ProductName": "Property Analytics",
    "Category": "Property Technology",
    "FullDescription": "AI-powered real estate valuation and investment analysis using market data and trends",
    "TechnicalSpecifications": "Valuation",
    "BusinessValue": "Improves investment accuracy by 35%, reduces evaluation time, identifies market opportunities"
  },
  {
    "ProductId": "PRD-010",
    "ProductName": "Customer Hub",
    "Category": "Customer Engagement",
    "FullDescription": "Engagement",
    "TechnicalSpecifications": "Cloud-native SaaS, supports 1M+ profiles, ML-driven personalization, real-time analytics",
    "BusinessValue": "Satisfaction"
  }
];