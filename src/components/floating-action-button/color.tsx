import { Color, Fab, FabPosition } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
    return (
        <div className='component-section flex-wrap sf-align-center gap-30 heigth-50'>
            <div className='sf-pos-relative min-width-100 heigth-50'>
                <Fab color={Color.Info} position={FabPosition.MiddleCenter} >Info</Fab>
            </div>
            <div className='sf-pos-relative min-width-100 heigth-50'>
                <Fab color={Color.Warning} position={FabPosition.MiddleCenter} >Warning</Fab>
            </div>
            <div className='sf-pos-relative min-width-100 heigth-50'>
                <Fab color={Color.Error} position={FabPosition.MiddleCenter} >Error</Fab>
            </div>
            <div className='sf-pos-relative min-width-100 heigth-50'>
                <Fab color={Color.Success} position={FabPosition.MiddleCenter} >Success</Fab>
            </div>
        </div>

    );
}