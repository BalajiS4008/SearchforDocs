
import { Grid, Column, Columns, CellClassProps, ClipMode, TextAlign, CellType } from '@syncfusion/react-grid';
import './projectRiskDetails.css';
import { projectRegistry, ProjectItem } from './projectRiskDetails';

export default function App() {
    // Returns the CSS class for Risk Level cells based on risk value.
    const getRiskLevelCellClass = (props?: CellClassProps): string => {
        if (props?.cellType !== CellType.Content) { return ''; }
        const data = props?.data as ProjectItem;
        const riskLevel = data?.RiskLevel;
        if (riskLevel === 'Critical') {
            return 'risk-critical-font';
        } else if (riskLevel === 'High') {
            return 'risk-high-font';
        } else if (riskLevel === 'Medium') {
            return 'risk-medium-font';
        } else if (riskLevel === 'Low') {
            return 'risk-low-font';
        }
        return '';
    };

    // Returns the CSS class for Impact Score cells based on score value.
    const getImpactScoreCellClass = (props?: CellClassProps): string => {
        if (props?.cellType !== CellType.Content) { return ''; }
        const data = props?.data as ProjectItem;
        const impact = data?.ImpactScore || 0;
        if (impact >= 90) {
            return 'impact-extreme-font';
        } else if (impact >= 80) {
            return 'impact-high-font';
        } else if (impact >= 60) {
            return 'impact-moderate-font';
        } else {
            return 'impact-low-font';
        }
    };

    // Returns the CSS class for Department cells based on department value.
    const getDepartmentCellClass = (props?: CellClassProps): string => {
        if (props?.cellType !== CellType.Content) { return ''; }
        const data = props?.data as ProjectItem;
        const dept = data?.Department;
        if (dept === 'FinTech' || dept === 'AI/ML') {
            return 'dept-strategic-font';
        } else if (dept === 'Security' || dept === 'Infrastructure') {
            return 'dept-critical-font';
        } else if (dept === 'Data Science' || dept === 'Data Engineering') {
            return 'dept-analytics-font';
        } else {
            return 'dept-operational-font';
        }
    };

    // Returns the CSS class for Budget cells based on budget value.
    const getBudgetCellClass = (props?: CellClassProps): string => {
        if (props?.cellType !== CellType.Content) { return ''; }
        const data = props?.data as ProjectItem;
        const budget = data?.Budget || 0;
        if (budget >= 2000000) {
            return 'budget-enterprise-font';
        } else if (budget >= 1000000) {
            return 'budget-major-font';
        } else if (budget >= 500000) {
            return 'budget-standard-font';
        } else {
            return 'budget-minimal-font';
        }
    };

    // Returns the CSS class for Mitigation Status cells based on status value.
    const getMitigationStatusCellClass = (props?: CellClassProps): string => {
        if (props?.cellType !== CellType.Content) { return ''; }
        const data = props?.data as ProjectItem;
        const status = data?.MitigationStatus;
        if (status === 'Urgent') {
            return 'status-urgent-font';
        } else if (status === 'In Progress') {
            return 'status-active-font';
        } else if (status === 'Planned') {
            return 'status-scheduled-font';
        } else if (status === 'Monitored') {
            return 'status-watch-font';
        }
        return '';
    };

    // Returns the CSS class for Project Manager cells based on project risk and impact.
    const getProjectManagerCellClass = (props?: CellClassProps): string => {
        if (props?.cellType !== CellType.Content) { return ''; }
        const data = props?.data as ProjectItem;
        const impact = data?.ImpactScore || 0;
        const riskLevel = data?.RiskLevel;
        
        // Highlight managers handling critical projects.
        if (riskLevel === 'Critical' && impact >= 90) {
            return 'manager-crisis-font';
        } else if (riskLevel === 'High' && impact >= 75) {
            return 'manager-high-pressure-font';
        } else {
            return 'manager-standard-font';
        }
    };

    // Returns the CSS class for Timeline cells based on timeline and impact values.
    const getTimelineCellClass = (props?: CellClassProps): string => {
        if (props?.cellType !== CellType.Content) { return ''; }
        const data = props?.data as ProjectItem;
        const timeline = data?.Timeline;
        const impact = data?.ImpactScore || 0;
        
        // Check if timeline is a Date and calculate months from now.
        if (timeline instanceof Date) {
            const now = new Date();
            const monthsDiff = (timeline.getFullYear() - now.getFullYear()) * 12 + (timeline.getMonth() - now.getMonth());
            
            if (monthsDiff >= 10 && impact >= 80) {
                return 'timeline-complex-font';
            } else if (monthsDiff >= 6 && impact >= 60) {
                return 'timeline-extended-font';
            } else {
                return 'timeline-standard-font';
            }
        }
        return '';
    };

    return (
        <div>
            <Grid 
                dataSource={projectRegistry} 
                className='project-risk' 
                height={400} 
                enableHover={false}
            >
                <Columns>
                    <Column field="ProjectId" headerText="Project ID" width="100" visible={false} />
                    <Column field="ProjectName" headerText="Project Name" width="180" clipMode={ClipMode.EllipsisWithTooltip}/>
                    <Column field="RiskLevel" headerText="Risk Level" width="100" textAlign={TextAlign.Center} cellClass={getRiskLevelCellClass} />
                    <Column field="ImpactScore" headerText="Impact" width="80" textAlign={TextAlign.Center} cellClass={getImpactScoreCellClass} />
                    <Column field="Department" headerText="Department" width="120" cellClass={getDepartmentCellClass} />
                    <Column field="ProjectManager" headerText="Project Manager" width="140" cellClass={getProjectManagerCellClass} />
                    <Column field="Budget" headerText="Budget" width="120" format="C0" textAlign={TextAlign.Right} cellClass={getBudgetCellClass} />
                    <Column field="Timeline" headerText="Timeline" width="120" textAlign={TextAlign.Center} format="MMM dd, yyyy" cellClass={getTimelineCellClass} />
                    <Column field="MitigationStatus" headerText="Status" width="110" textAlign={TextAlign.Center} cellClass={getMitigationStatusCellClass} />
                </Columns>
            </Grid>
        </div>
    );
}
