import { DropDownList } from '@syncfusion/react-dropdowns';
import { DataManager, WebApiAdaptor } from '@syncfusion/react-data';
import './app.css';

export default function App() {
    const employeeDatas: DataManager = new DataManager({
        url: 'https://services.syncfusion.com/react/production/api/Employees',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
    const fields = { text: 'FirstName', value: 'EmployeeID' };
    return (
        <div className="component-section dropdownlist-container">
            <DropDownList dataSource={employeeDatas} fields={fields} placeholder="Select an employee"/>
        </div>
    );
}