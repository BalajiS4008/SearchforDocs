import { Dialog } from '@syncfusion/react-popups';
import { Button, Variant, CheckboxChangeEvent } from '@syncfusion/react-buttons';
import { Checkbox } from '@syncfusion/react-buttons';
import { useState } from 'react';

export default function App() {
    const [visible, setVisible] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleCheckChange = (e: CheckboxChangeEvent) => {
        setChecked(e.value);
    };

    return (
        <div className="component-section">
            <Button onClick={() => setVisible(true)}>Open Long Content Dialog</Button>
            <Dialog
                header="Terms and Conditions"
                open={visible}
                footer={
                    <div className="consent-footer" >
                        <Checkbox 
                            label="I agree to the terms and conditions" 
                            checked={checked}
                            onChange={handleCheckChange}
                        />
                        <Button 
                            variant={Variant.Standard} 
                            onClick={() => setVisible(false)} 
                            disabled={!checked}
                        >
                            Accept & Close
                        </Button>
                    </div>
                }
                onClose={() => setVisible(false)}
                style={{ height: "400px", width: "600px" }}
            >
                <>
                    <h4>Software License Agreement</h4>
                    <p>Please read the following terms and conditions carefully before using this software.</p>

                    <h4>1. License Grant</h4>
                    <p>Subject to the terms and conditions of this Agreement, we hereby grant you a limited, non-exclusive, non-transferable license to use the software.</p>

                    <h4>2. Restrictions</h4>
                    <p>You may not:</p>
                    <ul>
                        <li>Modify, adapt, alter, translate, or create derivative works</li>
                        <li>Reverse engineer, disassemble, decompile, or otherwise attempt to derive the source code</li>
                        <li>Remove, alter, or obscure any proprietary notices</li>
                        <li>Use the software for any unlawful purpose</li>
                    </ul>

                    <h4>3. Intellectual Property</h4>
                    <p>The software and all intellectual property rights therein are and shall remain our exclusive property.</p>

                    <h4>4. Disclaimer of Warranties</h4>
                    <p>THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.</p>

                    <h4>5. Limitation of Liability</h4>
                    <p>IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>

                    <h4>6. Termination</h4>
                    <p>This Agreement is effective until terminated. We may terminate this Agreement at any time without notice.</p>

                    <h4>7. Governing Law</h4>
                    <p>This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction.</p>

                    <h4>8. Entire Agreement</h4>
                    <p>This Agreement constitutes the entire agreement between you and us regarding the software.</p>

                    <p>By using the software, you acknowledge that you have read this Agreement and agree to be bound by its terms.</p>
                </>
            </Dialog>
        </div>
    );
}