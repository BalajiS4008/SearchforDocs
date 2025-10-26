import { Grid, Columns, Column, TextWrapSettings, WrapMode, TextAlign } from '@syncfusion/react-grid';
import { inventorRegistry } from './inventoryDetails';
import { useState } from 'react';
export default function App() {
    // Initialize text wrap settings with enabled state and wrap mode.
    const [textWrapSettings] = useState<TextWrapSettings>({enabled: true, wrapMode: WrapMode.Both});
    
    return (
        <div>
            <Grid dataSource={inventorRegistry.slice(0,8)} textWrapSettings={textWrapSettings} >
                <Columns>
                    <Column field='Inventor' headerText='Inventor' width='100' />
                    <Column field='NumberofPatentFamilies' headerText='Number of Patent Families' width='120' textAlign={TextAlign.Right} />
                    <Column field='Country' headerText='Country'  width='100' />
                    <Column field='Active' headerText='Active' width='100' />
                    <Column field='Number of INPADOC patents' headerText='Number of INPADOC Patent' width='130' textAlign={TextAlign.Right} />
                    <Column field='Mainfieldsofinvention' headerText='Main Fields of Invention' width='180' />
                </Columns>
            </Grid>
        </div>
    );
};