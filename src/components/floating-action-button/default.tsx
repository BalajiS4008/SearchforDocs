import { Fab, FabPosition } from '@syncfusion/react-buttons';
import { SaveIcon } from '@syncfusion/react-icons';

export default function App() {
    return (
        <div className='component-section sf-pos-relative heigth-50' >
            <Fab icon={<SaveIcon  />} position={FabPosition.MiddleCenter}>FAB</Fab>
        </div>

    );
}