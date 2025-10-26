import { Checkbox } from '@syncfusion/react-buttons';
import { useState } from 'react';

export default function App() {
    const [checked, setChecked] = useState([true, false]);

    const handleParentChange = () => {
        const allChecked = checked[0] && checked[1];
        setChecked([!allChecked, !allChecked]);
    };

    const handleChildChange = (index: number) => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
    };

    const isIndeterminate = checked.some(value => value) && !checked.every(value => value);

    return (
        <div className="component-section">
            <div>
                <Checkbox
                    checked={checked[0] && checked[1]}
                    label="Inputs"
                    indeterminate={isIndeterminate}
                    onChange={handleParentChange}
                />
                <div style={{ marginLeft: '25px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Checkbox
                        checked={checked[0]}
                        label="TextBox"
                        onChange={() => handleChildChange(0)}
                    />
                    <Checkbox
                        checked={checked[1]}
                        label="TextArea"
                        onChange={() => handleChildChange(1)}
                    />
                </div>
            </div>
        </div>
    );
}