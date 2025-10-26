import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { useState } from 'react';

export default function App() {
    const [controlledValue, setControlledValue] = useState<string | number | boolean | object | null>('3');
    const uncontrolledValue = '1';

    const employeeData = [
        { Id: '1', Name: 'Andrew', Designation: 'Manager' },
        { Id: '2', Name: 'Bella', Designation: 'Developer' },
        { Id: '3', Name: 'Charlie', Designation: 'Designer' },
        { Id: '4', Name: 'Diana', Designation: 'Tester' },
        { Id: '5', Name: 'Ethan', Designation: 'Product Owner' },
        { Id: '6', Name: 'Fiona', Designation: 'UX Designer' },
        { Id: '7', Name: 'George', Designation: 'DevOps Engineer' },
        { Id: '8', Name: 'Hannah', Designation: 'Data Analyst' },
        { Id: '9', Name: 'Ian', Designation: 'Security Specialist' },
        { Id: '10', Name: 'Julia', Designation: 'Frontend Developer' },
        { Id: '11', Name: 'Kevin', Designation: 'Backend Developer' },
        { Id: '12', Name: 'Laura', Designation: 'Scrum Master' },
        { Id: '13', Name: 'Michael', Designation: 'Database Administrator' },
        { Id: '14', Name: 'Nora', Designation: 'QA Engineer' },
        { Id: '15', Name: 'Oscar', Designation: 'System Architect' }
    ];

    const fields = { text: 'Name', value: 'Id' };
    return (
        <div className="component-section">
            <div className='sf-display-flex max-gap'>
                <div>
                    <h4>Controlled Dropdown List</h4>
                    <DropDownList
                        dataSource={employeeData as unknown as { [key: string]: object }[]}
                        fields={fields}
                        value={controlledValue}
                        onChange={(e?: ChangeEventArgs) => {
                            if (e) {
                                const value = e.value;
                                setControlledValue(value);
                            }
                        }}
                    />
                </div>
                <div>
                    <h4>Uncontrolled Dropdown List</h4>
                    <DropDownList
                        dataSource={employeeData as unknown as { [key: string]: object }[]}
                        fields={fields}
                        defaultValue={uncontrolledValue}
                    />
                </div>
            </div>
        </div>
    );
}