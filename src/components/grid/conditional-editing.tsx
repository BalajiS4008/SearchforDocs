import { useState, useEffect } from 'react';
import { Button, RadioButton } from '@syncfusion/react-buttons';
import { NumericChangeEvent, NumericTextBox } from '@syncfusion/react-inputs';
import GridComponent from './Conditional-edit-grid';
import './customPanel.css';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
  // Initialize user role state.
  const [userRole, setUserRole] = useState<'Admin' | 'Employee'>('Admin');

  // Initialize office start hour state.
  const [officeStartHour, setOfficeStartHour] = useState<number>(9);

  // Initialize office end hour state.
  const [officeEndHour, setOfficeEndHour] = useState<number>(17);

  // Initialize error message for invalid hour input.
  const [hourError, setHourError] = useState<string>('');

  // Initialize output logs for edit actions.
  const [editOutput, setEditOutput] = useState<string[]>([]);

  // Initialize output logs for add actions.
  const [addOutput, setAddOutput] = useState<string[]>([]);

  // Initialize output logs for delete actions.
  const [deleteOutput, setDeleteOutput] = useState<string[]>([]);

  useEffect(() => {
    // Check office hours restriction for Employee role.
    if (userRole === 'Admin') {
      // No restrictions for Admin.
    } else {
      const outsideOfficeHours = isOutsideOfficeHours();
      if (outsideOfficeHours) {
        setEditOutput(prev => [...prev, `Outside office hours: No edits allowed.\n`]);
      }
    }
  }, [userRole, officeStartHour, officeEndHour]);

  // Determine if current time is outside office hours.
  const isOutsideOfficeHours = () => {
    const hour =  new Date().getMinutes()>0? new Date().getHours()+ 1: new Date().getHours();
  
    return hour < officeStartHour || hour > officeEndHour;
  };

  // Validate that office hours are within 0–23 and logically correct.
  const validateOfficeHours = (start: number, end: number) => {
    if (start < 0 || start > 23 || end < 0 || end > 23) {
      setHourError('Hours must be between 0 and 23.');
      return false;
    }
    if (start > end) {
      setHourError('Start hour must be less than or equal to end hour.');
      return false;
    }
    setHourError('');
    return true;
  };

  // Handle changes to office start hour input.
  const handleOfficeStartChange = (args: NumericChangeEvent) => {
    const value = args.value as number;
    if (validateOfficeHours(value, officeEndHour)) {
      setOfficeStartHour(value);
    }
  };

   // Handle changes to office end hour input.
  const handleOfficeEndChange = (args: NumericChangeEvent) => {
    const value = args.value as number;
    if (validateOfficeHours(officeStartHour, value)) {
      setOfficeEndHour(value);
    }
  };

  // Clear all console output logs.
  const clearConsole = () => {
    setEditOutput([]);
    setAddOutput([]);
    setDeleteOutput([]);
  };

  return (
    <>
      <PropertyPane>
        <PropertyColumn>
          <PropertyRow>
            <div className="property-panel-section">
              <span className="property-panel-label">Role:</span>
              <RadioButton
                label="Admin"
                name="role"
                value="Admin"
                checked={userRole === 'Admin'}
                onChange={() => setUserRole('Admin')}
              />
              <RadioButton
                label="Employee"
                name="role"
                value="Employee"
                checked={userRole === 'Employee'}
                onChange={() => setUserRole('Employee')}
              />
            </div>
          </PropertyRow>
        </PropertyColumn>
         <PropertyColumn>
           <PropertyRow>
            <div className="property-panel-item">
              <span className="property-panel-label">Start Hour:</span>
              <NumericTextBox
                value={officeStartHour}
                min={0}
                max={23}
                step={1}
                format="n0"
                width={120}
                onChange={handleOfficeStartChange}
              />
            </div>
           </PropertyRow>
         </PropertyColumn>
         <PropertyColumn>
           <PropertyRow>
            <div className="property-panel-item">
                <span className="property-panel-label">End Hour:</span>
                <NumericTextBox
                  value={officeEndHour}
                  min={0}
                  max={23}
                  step={1}
                  format="n0"
                  width={120}
                  onChange={handleOfficeEndChange}
                />
            </div>
           </PropertyRow>
         </PropertyColumn>
        {hourError && (
          <span className="error-message">{hourError}</span>
        )}
      </PropertyPane>
      <div>
        <GridComponent
          userRole={userRole}
          officeStartHour={officeStartHour}
          officeEndHour={officeEndHour}
          isOutsideOfficeHours={isOutsideOfficeHours}
          editOutput={editOutput}
          setEditOutput={setEditOutput}
          addOutput={addOutput}
          setAddOutput={setAddOutput}
          deleteOutput={deleteOutput}
          setDeleteOutput={setDeleteOutput}
        />
        <div className="console-container">
          <div className="console-header">
            <span className="console-title">
              Console
            </span>
            <Button onClick={clearConsole} disabled={editOutput.length === 0 && addOutput.length === 0 && deleteOutput.length === 0} >Clear</Button>
          </div>
          <div className="console-content">
            <pre>
              {editOutput.length === 0 && addOutput.length === 0 && deleteOutput.length === 0 ?
                'Admins have full data modification permissions, while Employees are restricted to editing only during office hours.' :
                `${editOutput.join('')}${addOutput.join('')}${deleteOutput.join('')}`}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}