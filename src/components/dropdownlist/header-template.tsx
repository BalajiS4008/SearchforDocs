import { DropDownList } from '@syncfusion/react-dropdowns';
import { useState } from 'react';
import './header-template.css';

export default function App() {
    interface Employee {
        Id: string;
        Name: string;
        Email: string;
        ProfilePic?: string;
        Initials?: string;
        HasImage: boolean;
        Color?: string;
    }

    const employeesData: { [key: string]: unknown }[] = [
        {
            Id: 'emp1',
            Name: 'Alex Johnson',
            Email: 'alex.johnson@example.com',
            ProfilePic: 'https://example.com/profile1.jpg',
            HasImage: true
        },
        {
            Id: 'emp2',
            Name: 'Taylor Smith',
            Email: 'taylor.smith@example.com',
            Initials: 'TS',
            HasImage: false,
            Color: '#c27ac0'
        }
    ];
    const fields = { text: 'Name', value: 'Id' };
    const [selected] = useState<string | null>(null);

    const headerTemplate = () => (
        <div className='suggested-contacts-header font-weight-bold sf-font-size-base'>
            Suggested contacts
        </div>
    );
    const itemTemplate = ({ Id, Name, Email, HasImage, ProfilePic, Initials, Color }: Employee) => (
        <div className='contact-row' style={{
            backgroundColor: selected === Id ? '#f5f5f5' : 'transparent'
        }}>
            {HasImage ? (
                <div className='circular-avatar'>
                    <img
                        src={ProfilePic as string}
                        alt={Name}
                        className='avatar-image'
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                                parent.innerHTML = Name.split(' ')
                                    .map(n => n[0])
                                    .slice(0, 2)
                                    .join('');
                                parent.style.alignItems = 'center';
                                parent.style.justifyContent = 'center';
                                parent.style.backgroundColor = '#7925ff';
                                parent.style.color = '#fff';
                                parent.style.fontWeight = 'bold';
                            }
                        }}
                    />
                </div>
            ) : (
                <div className='circular-avatar-text' style={{
                    backgroundColor: Color
                }}>
                    {Initials}
                </div>
            )}
            <div>
                <div className='contact-name'>{Name}</div>
                <div className='contact-email'>{Email}</div>
            </div>
        </div>
    );

    return (
        <div className='contact-container dropdownlist-container'>
            <div className='contact-row'></div>

            <DropDownList
                dataSource={employeesData as { [key: string]: object }[]}
                fields={fields}
                headerTemplate={headerTemplate()}
                itemTemplate={itemTemplate}
                placeholder="Invite attendees"
                popupWidth="300px"
            />
        </div>
    );
}