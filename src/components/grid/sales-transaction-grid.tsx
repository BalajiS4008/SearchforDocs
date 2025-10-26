import { Grid, Column, Columns, FilterSettings, SortSettings, SelectionSettings, CellClassProps, FilterBarType, ClipMode, TextAlign, CellType } from '@syncfusion/react-grid';
import './employeePerformanceDetails.css';
import { employeePerformanceDataGrid, EmployeePerformanceGrid } from './employeePerformanceDetails';
import { useState } from 'react';

export default function App() {
	// Declare states to enable filtering, sorting, and selection in the grid.
	const [filterSettings] = useState<FilterSettings>({enabled: true});
	const [sortSettings] = useState<SortSettings>({enabled: true});
	const [selectionSettings] = useState<SelectionSettings>({ enabled: false });

	/// Returns the CSS class for Performance Rating cells based on rating value.
	const getPerformanceRatingCellClass = (props?: CellClassProps): string => {
		if (props?.cellType !== CellType.Content) { return ''; }
		const data = props?.data as EmployeePerformanceGrid;
		const rating = data?.PerformanceRating;
		if (rating === 'Excellent') {
			return 'rating-excellent';
		} else if (rating === 'Good') {
			return 'rating-good';
		} else if (rating === 'Average') {
			return 'rating-average';
		} else if (rating === 'Below Average') {
			return 'rating-below-average';
		} else if (rating === 'Poor') {
			return 'rating-poor';
		}
		return '';
	};

	// Returns the CSS class for Project Status cells based on status value.
	const getProjectStatusCellClass = (props?: CellClassProps): string => {
		if (props?.cellType !== CellType.Content) { return ''; }
		const data = props?.data as EmployeePerformanceGrid;
		const status = data?.ProjectStatus;
		if (status === 'Completed') {
			return 'status-completed';
		} else if (status === 'In Progress') {
			return 'status-in-progress';
		} else if (status === 'On Hold') {
			return 'status-on-hold';
		} else if (status === 'Delayed') {
			return 'status-delayed';
		}
		return '';
	};

	// Returns the CSS class for Productivity Score cells based on score value.
	const getProductivityScoreCellClass = (props?: CellClassProps): string => {
		if (props?.cellType !== CellType.Content) { return ''; }
		const data = props?.data as EmployeePerformanceGrid;
		const score = data?.ProductivityScore;
		if (score >= 0.90) {
			return 'high-productivity';
		} else if (score >= 0.80) {
			return 'good-productivity';
		} else if (score < 0.70) {
			return 'low-productivity';
		}
		return '';
	};

	// Returns the CSS class for Attendance Percentage cells based on attendance value.
	const getAttendanceCellClass = (props?: CellClassProps): string => {
		if (props?.cellType !== CellType.Content) { return ''; }
		const data = props?.data as EmployeePerformanceGrid;
		const attendance = data?.AttendancePercentage;
		if (attendance >= 0.95) {
			return 'excellent-attendance';
		} else if (attendance < 0.85) {
			return 'poor-attendance';
		}
		return '';
	};

	// Returns the CSS class for Targets Achieved cells based on targets value.
	const getTargetsAchievedCellClass = (props?: CellClassProps): string => {
		if (props?.cellType !== CellType.Content) { return ''; }
		const data = props?.data as EmployeePerformanceGrid;
		const targets = data?.TargetsAchieved;
		if (targets >= 10) {
			return 'high-achiever';
		}
		return '';
	};

	return (
		<div>
			<Grid 
				className='employee-performance' 
				dataSource={employeePerformanceDataGrid} 
				filterSettings={filterSettings} 
				sortSettings={sortSettings} 
				selectionSettings={selectionSettings} 
				enableHover={false}
				height={400}
			>
				<Columns>
					<Column field="EmployeeId" headerText="Employee ID" width={120} />
					<Column field="EmployeeName" headerText="Employee Name" width={150} />
					<Column field="Department" headerText="Department" width={120} />
					<Column field="PerformanceRating" headerText="Performance Rating" width={150} textAlign={TextAlign.Center} clipMode={ClipMode.EllipsisWithTooltip} cellClass={getPerformanceRatingCellClass} />
					<Column field="ProductivityScore" headerText="Productivity" format="P0" filter={{filterBarType:FilterBarType.NumericTextBox}} width={120} textAlign={TextAlign.Center} cellClass={getProductivityScoreCellClass} />
					<Column field="AttendancePercentage" headerText="Attendance" format="P0" filter={{filterBarType:FilterBarType.NumericTextBox}} width={120} textAlign={TextAlign.Center} cellClass={getAttendanceCellClass} />
					<Column field="TargetsAchieved" headerText="Targets Achieved" filter={{filterBarType:FilterBarType.NumericTextBox}} width={140} textAlign={TextAlign.Center} cellClass={getTargetsAchievedCellClass} />
					<Column field="ProjectStatus" headerText="Project Status" width={130} textAlign={TextAlign.Center} cellClass={getProjectStatusCellClass} />
				</Columns>
			</Grid>
		</div>
	);
};
