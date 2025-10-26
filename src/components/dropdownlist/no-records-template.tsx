import { DropDownList } from '@syncfusion/react-dropdowns';
import './app.css';

export default function App() {
    const employeeData: { [key: string]: unknown }[] = [];
    const noRecordsTemplate = () => {
        return (
            <div className='text-align-center'>
                <span>No Records Found</span>
            </div>
        );
    }
    return (
        <div className="component-section dropdownlist-container">
            <DropDownList dataSource={employeeData as { [key: string]: object }[]} noRecordsTemplate={noRecordsTemplate} placeholder='Select an item' />
        </div>
    );
}