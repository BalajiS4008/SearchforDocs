import { TextBox, Variant, TextBoxChangeEvent } from "@syncfusion/react-inputs";
import { SearchIcon, LockIcon, UnlockIcon } from '@syncfusion/react-icons';
import { Button, Variant as ButtonVariant } from "@syncfusion/react-buttons";
import { useState } from "react";
import './App.css';

export default function App() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('password');

    const onSearchChange = (args: TextBoxChangeEvent) => {
        setSearchValue(args.value ?? '');
    }
    const onPasswordChange = (args: TextBoxChangeEvent) => {
        setPasswordValue(args.value ?? '');
    }
    return (
        <div className="textbox-container">
            <div className="textbox-column">
                <div className="textbox-component textbox-icon">
                    <TextBox
                        placeholder="Enter password"
                        type={showPassword ? 'text' : 'password'}
                        width="15.625em"
                        value={passwordValue}
                        onChange={onPasswordChange}
                        labelMode="Auto"
                        prefix={<Button
                            toggleable={true}
                            variant={ButtonVariant.Standard}
                            selected={showPassword}
                            onClick={() => setShowPassword(!showPassword)}
                            icon={showPassword ? <UnlockIcon /> : <LockIcon />}
                        ></Button>} />
                </div>
            </div>
            {/* Search Box with Clear Icon */}
            <div className="textbox-column">
                <div className="textbox-component textbox-icon">
                    <TextBox
                        placeholder="Type to search icons"
                        width="15.625em"
                        value={searchValue}
                        variant={Variant.Outlined}
                        onChange={onSearchChange}
                        labelMode="Auto"
                        suffix={<Button variant={ButtonVariant.Standard} icon={<SearchIcon />}></Button>} />
                </div>
            </div>
        </div>
    );
}