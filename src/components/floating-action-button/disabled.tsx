import { Fab, FabPosition } from '@syncfusion/react-buttons';

export default function App() {
    return (
        <div className='component-section sf-pos-relative heigth-50'>
            <Fab disabled position={FabPosition.MiddleCenter} >Disabled</Fab>
        </div>
    );
}
