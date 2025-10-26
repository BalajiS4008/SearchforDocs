import { DropDownList } from '@syncfusion/react-dropdowns';
import { DataManager, ODataV4Adaptor } from '@syncfusion/react-data';
import './app.css';

export default function App() {
    const customerDatas: DataManager = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
    });
    const fields = { text: 'ContactName', value: 'CustomerID' };
    return (
        <div className="component-section dropdownlist-container">
            <DropDownList dataSource={customerDatas} fields={fields} placeholder="Select a customer" filterable={true} />
        </div>
    );
}