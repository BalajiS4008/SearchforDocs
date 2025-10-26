import { DropDownList } from '@syncfusion/react-dropdowns';
import './app.css';

interface Device {
    id: string;
    name: string;
    icon: string;
}
export default function App() {
    const deviceDatas = [
        { id: 'laptop-1', name: 'MacBook Pro', icon: '💻' },
        { id: 'laptop-2', name: 'Dell XPS', icon: '💻' },
        { id: 'mobile-1', name: 'iPhone', icon: '📱' },
        { id: 'mobile-3', name: 'Google Pixel', icon: '📱' },
        { id: 'tablet-1', name: 'iPad Pro', icon: '📟' },
        { id: 'tablet-2', name: 'Samsung Galaxy Tab', icon: '📟' }
    ];
    const fields = { text: 'name', value: 'id' };

    const itemTemplate = (props: Device) => {
        const { icon, name } = props;
        return (
            <div className='sf-content-center min-gap'>
                <span>{icon}</span>
                <span>{name}</span>
            </div>
        );
    };

    return (
        <div className="component-section dropdownlist-container">
            <DropDownList
                dataSource={deviceDatas as unknown as { [key: string]: object }[]}
                fields={fields}
                placeholder='Select a device'
                itemTemplate={itemTemplate}
            />
        </div>
    );
}