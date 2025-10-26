 export interface Feedback {
  CustomerID: string;
  CustomerName: string;
  Product: string;
  Feedback: 'Positive' | 'Negative';
}

 export const feedbackDetails: object[] = [ 
  { CustomerID: 'C-001', CustomerName: 'John Smith', Product: 'Smartphone', Feedback: 'Positive', FeedbackSource: 'Website', SupportStatus: 'Resolved', FeedbackCategory: 'Performance', ContactMethod: 'Email' },
  { CustomerID: 'C-002', CustomerName: 'Emily Johnson', Product: 'Laptop', Feedback: 'Negative', FeedbackSource: 'Email', SupportStatus: 'Pending', FeedbackCategory: 'Quality', ContactMethod: 'Phone' },
  { CustomerID: 'C-003', CustomerName: 'Michael Brown', Product: 'Headphones', Feedback: 'Positive', FeedbackSource: 'App', SupportStatus: 'Resolved', FeedbackCategory: 'Performance', ContactMethod: 'Chat' },
  { CustomerID: 'C-004', CustomerName: 'Sarah Davis', Product: 'Smartwatch', Feedback: 'Negative', FeedbackSource: 'Email', SupportStatus: 'Pending', FeedbackCategory: 'Delivery', ContactMethod: 'Email' },
  { CustomerID: 'C-005', CustomerName: 'David Wilson', Product: 'Tablet', Feedback: 'Positive', FeedbackSource: 'Website', SupportStatus: 'Resolved', FeedbackCategory: 'Quality', ContactMethod: 'Phone' },
  { CustomerID: 'C-006', CustomerName: 'Ashley Martinez', Product: 'Monitor', Feedback: 'Positive', FeedbackSource: 'App', SupportStatus: 'Resolved', FeedbackCategory: 'Performance', ContactMethod: 'Chat' },
  { CustomerID: 'C-007', CustomerName: 'James Anderson', Product: 'Keyboard', Feedback: 'Negative', FeedbackSource: 'Email', SupportStatus: 'Pending', FeedbackCategory: 'Quality', ContactMethod: 'Email' },
  { CustomerID: 'C-008', CustomerName: 'Jessica Taylor', Product: 'Mouse', Feedback: 'Positive', FeedbackSource: 'Website', SupportStatus: 'Resolved', FeedbackCategory: 'Performance', ContactMethod: 'Phone' },
  { CustomerID: 'C-009', CustomerName: 'Christopher Thomas', Product: 'Printer', Feedback: 'Negative', FeedbackSource: 'Email', SupportStatus: 'Pending', FeedbackCategory: 'Delivery', ContactMethod: 'Chat' },
  { CustomerID: 'C-010', CustomerName: 'Amanda Moore', Product: 'Router', Feedback: 'Positive', FeedbackSource: 'App', SupportStatus: 'Resolved', FeedbackCategory: 'Performance', ContactMethod: 'Email' },
  { CustomerID: 'C-011', CustomerName: 'Matthew Jackson', Product: 'Speaker', Feedback: 'Positive', FeedbackSource: 'Website', SupportStatus: 'Resolved', FeedbackCategory: 'Quality', ContactMethod: 'Phone' },
  { CustomerID: 'C-012', CustomerName: 'Olivia White', Product: 'Webcam', Feedback: 'Negative', FeedbackSource: 'Email', SupportStatus: 'Pending', FeedbackCategory: 'Quality', ContactMethod: 'Chat' },
  { CustomerID: 'C-013', CustomerName: 'Joshua Harris', Product: 'Charger', Feedback: 'Positive', FeedbackSource: 'App', SupportStatus: 'Resolved', FeedbackCategory: 'Performance', ContactMethod: 'Email' },
  { CustomerID: 'C-014', CustomerName: 'Megan Martin', Product: 'Power Bank', Feedback: 'Negative', FeedbackSource: 'Email', SupportStatus: 'Pending', FeedbackCategory: 'Delivery', ContactMethod: 'Phone' },
  { CustomerID: 'C-015', CustomerName: 'Andrew Thompson', Product: 'External HDD', Feedback: 'Positive', FeedbackSource: 'Website', SupportStatus: 'Resolved', FeedbackCategory: 'Quality', ContactMethod: 'Chat' },
];