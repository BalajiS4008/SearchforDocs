import { useCallback, useMemo } from 'react';
import { Grid, Column, Columns, ValueAccessorProps, ValueType, ClipMode, TextAlign } from '@syncfusion/react-grid';
import { studentData, StudentData } from './studentData';

export default function App() {
    // Calculates the weighted final grade using multiple assessment components
    const finalGradeCalculator = useCallback((args?: ValueAccessorProps): ValueType => {
        const studentScores = args?.data as StudentData;
        const midterm = studentScores.MidtermScore || 0;
        const project = studentScores.ProjectScore || 0;
        const attendance = studentScores.AttendanceRate || 0;
        const finalExam = studentScores.FinalExamScore || 0;
        
        // Weighted calculation: Midterm(25%) + Project(30%) + Attendance(10%) + Final(35%).
        const finalGrade = (midterm * 0.25) + (project * 0.30) + (attendance * 0.10) + (finalExam * 0.35);
        
        return `${finalGrade.toFixed(1)}%`;
    }, []);

    // Provide the percentage for Attendance
    const attendanceCalculator = useCallback((args?: ValueAccessorProps): ValueType => {
        const studentScores = args?.data as StudentData;
        return `${studentScores.AttendanceRate}%`;
    }, []);

    // Determines letter grade based on final grade percentage.
    const letterGradeCalculator = useCallback((args?: ValueAccessorProps): ValueType => {
        const studentScores = args?.data as StudentData;
        const midterm = studentScores.MidtermScore || 0;
        const project = studentScores.ProjectScore || 0;
        const attendance = studentScores.AttendanceRate || 0;
        const finalExam = studentScores.FinalExamScore || 0;
        
        // Calculate final grade first.
        const finalGrade = (midterm * 0.25) + (project * 0.30) + (attendance * 0.10) + (finalExam * 0.35);
        
        // Convert to letter grade.
        if (finalGrade >= 93) return 'A';
        if (finalGrade >= 90) return 'A-';
        if (finalGrade >= 87) return 'B+';
        if (finalGrade >= 83) return 'B';
        if (finalGrade >= 80) return 'B-';
        if (finalGrade >= 77) return 'C+';
        if (finalGrade >= 73) return 'C';
        if (finalGrade >= 70) return 'C-';
        if (finalGrade >= 60) return 'D';
        return 'F';
    }, []);

    
    // Calculates GPA points earned based on letter grade and credit hours.
    const gpaPointsCalculator = useCallback((args?: ValueAccessorProps): ValueType => {
        const studentScores = args?.data as StudentData;
        const midterm = studentScores.MidtermScore || 0;
        const project = studentScores.ProjectScore || 0;
        const attendance = studentScores.AttendanceRate || 0;
        const finalExam = studentScores.FinalExamScore || 0;
        const creditHours = studentScores.CreditHours || 0;
        
        // Calculate final grade.
        const finalGrade = (midterm * 0.25) + (project * 0.30) + (attendance * 0.10) + (finalExam * 0.35);
        
        // Convert to GPA scale (4.0).
        let gradePoints = 0;
        if (finalGrade >= 93) gradePoints = 4.0;
        else if (finalGrade >= 90) gradePoints = 3.7;
        else if (finalGrade >= 87) gradePoints = 3.3;
        else if (finalGrade >= 83) gradePoints = 3.0;
        else if (finalGrade >= 80) gradePoints = 2.7;
        else if (finalGrade >= 77) gradePoints = 2.3;
        else if (finalGrade >= 73) gradePoints = 2.0;
        else if (finalGrade >= 70) gradePoints = 1.7;
        else if (finalGrade >= 60) gradePoints = 1.0;
        
        const totalPoints = gradePoints * creditHours;
        return `${totalPoints.toFixed(2)}`;
    }, []);

    // Calculates academic standing based on overall performance.
    const academicStandingCalculator = useCallback((args?: ValueAccessorProps): ValueType => {
        const studentScores = args?.data as StudentData;
        const midterm = studentScores.MidtermScore || 0;
        const project = studentScores.ProjectScore || 0;
        const attendance = studentScores.AttendanceRate || 0;
        const finalExam = studentScores.FinalExamScore || 0;
        
        // Calculate final grade.
        const finalGrade = (midterm * 0.25) + (project * 0.30) + (attendance * 0.10) + (finalExam * 0.35);
        
        // Determine academic standing.
        if (finalGrade >= 90) return 'Dean\'s List';
        if (finalGrade >= 83) return 'Good Standing';
        if (finalGrade >= 70) return 'Satisfactory';
        if (finalGrade >= 60) return 'Warning';
        return 'Probation';
    }, []);

    // Calculates performance trend by comparing midterm and final exam scores.
    const performanceTrendCalculator = useCallback((args?: ValueAccessorProps): ValueType => {
        const studentScores = args?.data as StudentData;
        const midterm = studentScores.MidtermScore || 0;
        const finalExam = studentScores.FinalExamScore || 0;
        
        const improvement = finalExam - midterm;
        
        if (improvement >= 10) return 'Strong Improvement';
        if (improvement >= 5) return 'Improving';
        if (improvement >= -2) return 'Stable';
        if (improvement >= -7) return 'Declining';
        return 'Needs Attention';
    }, []);

    // Memoize Grid component to optimize rendering.
    return (
        <div>
            {useMemo(
                () => (
                    <Grid 
                        dataSource={studentData}
                        height={400}
                    >
                        <Columns>
                            <Column field="StudentName" headerText="Student Name" width="150" />
                            <Column field="Department" headerText="Department" width="120" clipMode={ClipMode.EllipsisWithTooltip} />
                            <Column field="MidtermScore" headerText="Midterm" width="85" textAlign={TextAlign.Center} />
                            <Column field="ProjectScore" headerText="Project" width="80" textAlign={TextAlign.Center} />
                            <Column field="FinalExamScore" headerText="Final" width="70" textAlign={TextAlign.Center} />
                            <Column field="AttendanceRate" headerText="Attendance" width="130" textAlign={TextAlign.Center} valueAccessor={attendanceCalculator} />
                            <Column field="FinalGrade" headerText="Overall Mark" width="140" textAlign={TextAlign.Center} valueAccessor={finalGradeCalculator} />
                            <Column field="LetterGrade" headerText="Grade" width="80" textAlign={TextAlign.Center} valueAccessor={letterGradeCalculator} />
                            <Column field="GpaPoints" headerText="GPA Pts" width="80" textAlign={TextAlign.Center} valueAccessor={gpaPointsCalculator} />
                            <Column field="AcademicStanding" headerText="Standing" width="120" valueAccessor={academicStandingCalculator} />
                            <Column field="PerformanceTrend" headerText="Trend" width="170" valueAccessor={performanceTrendCalculator} clipMode={ClipMode.EllipsisWithTooltip} />
                        </Columns>
                    </Grid>
                ),
                [finalGradeCalculator, attendanceCalculator, letterGradeCalculator, gpaPointsCalculator, academicStandingCalculator, performanceTrendCalculator]
            )}
        </div>
    );
}
