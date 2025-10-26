export interface StudentData {
  StudentId: string;
  StudentName: string;
  MidtermScore: number;
  ProjectScore: number;
  AttendanceRate: number;
  FinalExamScore: number;
  CreditHours: number;
  Department: string;
}

// Sample student academic data for grade calculation with varied performance trends
export const studentData: StudentData[] = [
    { StudentId: 'STU-001', StudentName: 'Alex Johnson', MidtermScore: 75, ProjectScore: 92, AttendanceRate: 95, FinalExamScore: 88, CreditHours: 3, Department: 'Computer Science' }, // +13 Strong Improvement
    { StudentId: 'STU-002', StudentName: 'Sarah Williams', MidtermScore: 78, ProjectScore: 85, AttendanceRate: 88, FinalExamScore: 85, CreditHours: 4, Department: 'Mathematics' }, // +7 Improving
    { StudentId: 'STU-003', StudentName: 'Michael Brown', MidtermScore: 92, ProjectScore: 89, AttendanceRate: 92, FinalExamScore: 94, CreditHours: 3, Department: 'Physics' }, // +2 Stable
    { StudentId: 'STU-004', StudentName: 'Emma Davis', MidtermScore: 88, ProjectScore: 91, AttendanceRate: 97, FinalExamScore: 86, CreditHours: 4, Department: 'Chemistry' }, // -2 Stable
    { StudentId: 'STU-005', StudentName: 'James Wilson', MidtermScore: 85, ProjectScore: 80, AttendanceRate: 85, FinalExamScore: 79, CreditHours: 3, Department: 'Biology' }, // -6 Declining
    { StudentId: 'STU-006', StudentName: 'Olivia Miller', MidtermScore: 82, ProjectScore: 96, AttendanceRate: 98, FinalExamScore: 95, CreditHours: 4, Department: 'Computer Science' }, // +13 Strong Improvement
    { StudentId: 'STU-007', StudentName: 'William Garcia', MidtermScore: 82, ProjectScore: 87, AttendanceRate: 90, FinalExamScore: 88, CreditHours: 3, Department: 'Mathematics' }, // +6 Improving
    { StudentId: 'STU-008', StudentName: 'Sophia Martinez', MidtermScore: 89, ProjectScore: 88, AttendanceRate: 93, FinalExamScore: 91, CreditHours: 4, Department: 'Physics' }, // +2 Stable
    { StudentId: 'STU-009', StudentName: 'Benjamin Lee', MidtermScore: 91, ProjectScore: 84, AttendanceRate: 89, FinalExamScore: 88, CreditHours: 3, Department: 'Chemistry' }, // -3 Stable
    { StudentId: 'STU-010', StudentName: 'Isabella Taylor', MidtermScore: 91, ProjectScore: 93, AttendanceRate: 96, FinalExamScore: 83, CreditHours: 4, Department: 'Biology' }, // -8 Needs Attention
    { StudentId: 'STU-011', StudentName: 'Lucas Anderson', MidtermScore: 90, ProjectScore: 82, AttendanceRate: 87, FinalExamScore: 81, CreditHours: 3, Department: 'Computer Science' }, // -9 Needs Attention
    { StudentId: 'STU-012', StudentName: 'Mia Thomas', MidtermScore: 81, ProjectScore: 90, AttendanceRate: 94, FinalExamScore: 92, CreditHours: 4, Department: 'Mathematics' }, // +11 Strong Improvement
    { StudentId: 'STU-013', StudentName: 'Ethan Jackson', MidtermScore: 86, ProjectScore: 89, AttendanceRate: 91, FinalExamScore: 92, CreditHours: 3, Department: 'Physics' }, // +6 Improving
    { StudentId: 'STU-014', StudentName: 'Charlotte White', MidtermScore: 89, ProjectScore: 86, AttendanceRate: 89, FinalExamScore: 83, CreditHours: 4, Department: 'Chemistry' }, // -6 Declining
    { StudentId: 'STU-015', StudentName: 'Alexander Harris', MidtermScore: 88, ProjectScore: 94, AttendanceRate: 95, FinalExamScore: 91, CreditHours: 3, Department: 'Biology' } // +3 Stable
];