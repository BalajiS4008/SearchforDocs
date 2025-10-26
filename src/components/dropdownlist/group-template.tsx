import { DropDownList } from '@syncfusion/react-dropdowns';
import './group-template.css';

interface Employee {
    ID: string;
    Name: string;
    Department: string;
    Experience: string;
}

interface GroupData {
    items: Employee[];
}

export default function App() {
    const employeeDatas: { [key: string]: string | object }[] = [
        { ID: '1', Name: 'Andrew', Department: 'Development', Experience: 'Senior' },
        { ID: '2', Name: 'Bella', Department: 'Testing', Experience: 'Junior' },
        { ID: '4', Name: 'Diana', Department: 'UI/UX', Experience: 'Mid-level' },
        { ID: '5', Name: 'Ethan', Department: 'Development', Experience: 'Junior' },
        { ID: '6', Name: 'Fiona', Department: 'UI/UX', Experience: 'Senior' },
        { ID: '7', Name: 'George', Department: 'Testing', Experience: 'Mid-level' }
    ];

    const fields = { text: 'Name', value: 'ID', groupBy: 'Department' };

    const groupTemplate = ({ items }: GroupData) => {
        const [firstItem] = items;
        const { Department } = firstItem;

        return (
            <div className='ddl-border-bottom'>
                <span>{Department}</span>
            </div>
        );
    }

    const getBadgeClass = (exp: string) => {
        if (exp === 'Senior') return 'badge--senior';
        if (exp === 'Mid-level') return 'badge--mid';
        return 'badge--default';
    };

    const itemTemplate = ({ Name, Experience }: Employee) => {
        return (
            <div className='sf-content-between ddl-flex-container'>
                <span>{Name}</span>
                <span className={`sf-font-size-xs sf-radius-8 badge ${getBadgeClass(Experience)}`}>{Experience}</span>
            </div>
        );
    }

    return (
        <div className="component-section dropdownlist-container">
            <DropDownList
                dataSource={employeeDatas as { [key: string]: object }[]}
                fields={fields}
                groupTemplate={groupTemplate}
                itemTemplate={itemTemplate}
                placeholder='Select an employee'
            />
        </div>
    );
}